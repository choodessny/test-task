import { UserActionTypes } from "./constants";

export type TUserState = {
  loading: boolean;
  user?: TUser;
};

export type TUser = {
  id: number;
  name: string;
};

const INITIAL_VALUE: TUserState = {
  loading: false,
  user: undefined,
};

type TUserAction = {
  type: keyof typeof UserActionTypes;
  payload?: TUser;
};

export const userDataReducer = (
  //хранит данные, реагирует на экшены
  state: TUserState = INITIAL_VALUE, //если state= undefined, то initinal_value, tuserstate - тип данных редюсера
  action: TUserAction
): TUserState => {
  switch (action.type) {
    case "USER_FETCH_SUCCEEDED":
      return { ...state, user: action.payload, loading: false };
    case "USER_FETCH_REQUESTED":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const startUserFetching = (): TUserAction => ({
  type: UserActionTypes.USER_FETCH_REQUESTED,
});
