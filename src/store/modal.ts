export enum ModalTypes {
  "DELETE_ITEM",
  "ADD_ITEM",
}

export type TModalState = {
  id?: number;
  type: ModalTypes | null;
};

const INITIAL_VALUE: TModalState = {
  id: undefined,
  type: null,
};

type TSetModal = {
  type: "setModal";
  payload: { type: ModalTypes | null; id?: number };
};
type TResetModal = {
  type: "resetModal";
};

export const modalReducer = (
  state: TModalState = INITIAL_VALUE,
  action: TSetModal | TResetModal
): TModalState => {
  switch (action.type) {
    case "setModal":
      return action.payload;
    case "resetModal":
      return INITIAL_VALUE;
    default:
      return state;
  }
};

export const setModal = (type: ModalTypes | null, id?: number): TSetModal => ({
  type: "setModal",
  payload: {
    type,
    id,
  },
});

export const resetModal = (): TResetModal => ({
  type: "resetModal",
});
