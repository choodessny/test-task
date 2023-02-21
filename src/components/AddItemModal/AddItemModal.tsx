import { ModalTypes, resetModal } from "../../store/modal";
import Input from "@mui/material/Input";
import Modal from "../Modal/Modal";
import { createItem } from "../../store/list";
import { useAppSelector } from "../../store/useAppSelector";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const AddItemModal: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const open =
    useAppSelector((store) => store.modal.type) === ModalTypes.ADD_ITEM;

  return (
    <Modal
      open={open}
      title="Добавление записи"
      onSubmit={() => {
        if (text) {
          dispatch(createItem(text));
          setText("");
          dispatch(resetModal());
        }
      }}
      submitDisabled={!text}
      onClose={() => {
        setText("");
      }}
    >
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Modal>
  );
};
