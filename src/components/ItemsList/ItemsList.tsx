import { ModalTypes, setModal } from "../../store/modal";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { TItem } from "../../store/list";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

type TListProps = {
  items: TItem[];
};

export const ItemsList: React.FC<TListProps> = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {items.map((item) => (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon
                onClick={() => {
                  dispatch(setModal(ModalTypes.DELETE_ITEM, item.id));
                }}
              ></DeleteIcon>
            </IconButton>
          }
          key={item.id}
        >
          <div className={styles.textContainer}>{item.text}</div>
        </ListItem>
      ))}
    </List>
  );
};
