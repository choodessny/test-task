import { takeEvery, put } from "@redux-saga/core/effects";
import { UserActionTypes } from "../store/constants";

const getUser = async () => {
  const response = await fetch("https://graphqlzero.almansi.me/api", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `{
      user(id: 1) {
        id
        name
      }
    }`,
    }),
  });
  return response.json();
};

export function* workerSaga() {
  const response = yield getUser();
  yield put({
    type: UserActionTypes.USER_FETCH_SUCCEEDED,
    payload: response.data.user,
  });
}
export function* watchClickSaga() {
  yield takeEvery(UserActionTypes.USER_FETCH_REQUESTED, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
