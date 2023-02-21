import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { AddItemModal } from "./components/AddItemModal/AddItemModal";
import { DeleteItemModal } from "./components/DeleteItemModal/DeleteItemModal";
import { ItemsList } from "./components/ItemsList/ItemsList";
import SnackBar from "./components/SnackBar/SnackBar";
import { ModalTypes, setModal } from "./store/modal";
import { useAppSelector } from "./store/useAppSelector";
import { startUserFetching } from "./store/userData";
import styles from "./App.scss";

function App() {
  const dispatch = useDispatch();
  const list = useAppSelector((state) => state.list);
  return (
    <Stack
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          variant="contained"
          onClick={() => dispatch(setModal(ModalTypes.ADD_ITEM))}
        >
          Добавить
        </Button>

        <Button
          onClick={() => {
            dispatch(startUserFetching());
          }}
        >
          Тест GraphQl
        </Button>
      </Stack>
      {/* TODO: SEPARATE STYLES */}
      <div style={{ width: "500px" }}>
        <ItemsList items={list} />
      </div>
      <AddItemModal />
      <DeleteItemModal />
      <SnackBar />
    </Stack>
  );
}

export default App;
