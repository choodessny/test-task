import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MUIModal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { resetModal } from "../../store/modal";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";

type TModalProps = {
  title: string;
  onClose?: () => void;
  open: boolean;
  children: React.ComponentProps<typeof MUIModal>["children"];
  onSubmit?: () => void;
  submitDisabled?: boolean;
  submitText?: string;
  cancelText?: string;
};

const Modal: React.FC<TModalProps> = ({
  children,
  open,
  title,
  onSubmit,
  submitDisabled = false,
  submitText = "Да",
  cancelText = "Нет",
  onClose,
}) => {
  const dispatch = useDispatch();
  return (
    <MUIModal open={open}>
      <Box className={styles.modalContainer}>
        <Typography variant="h5">{title}</Typography>
        <Box className={styles.childrenContainer}>{children}</Box>
        <Box className={styles.buttonsContainer}>
          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={submitDisabled}
          >
            {submitText}
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              if (onClose) {
                onClose();
              }
              dispatch(resetModal());
            }}
          >
            {cancelText}
          </Button>
        </Box>
      </Box>
    </MUIModal>
  );
};
export default Modal;
