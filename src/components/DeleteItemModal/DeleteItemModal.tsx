import { ModalTypes, resetModal } from "../../store/modal";

import Modal from "../Modal/Modal";
import { deleteItem } from "../../store/list";
import { useAppSelector } from "../../store/useAppSelector";
import { useDispatch } from "react-redux";

export const DeleteItemModal: React.FC = () => {
  const dispatch = useDispatch();
  const { id, type } = useAppSelector((store) => store.modal);
  return (
    <Modal
      open={type === ModalTypes.DELETE_ITEM}
      title="Удаление записи"
      submitText="Да"
      onSubmit={() => {
        if (id) {
          dispatch(deleteItem(id));
          dispatch(resetModal());
        }
      }}
    >
      <span>Хотите удалить запись?</span>
    </Modal>
  );
};
