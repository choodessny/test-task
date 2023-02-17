import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteItem } from '../../store/list';
import { useDispatch } from "react-redux";

export const DeleteItem: React.FC<{id:number}> = ({id}) => {
    const dispatch = useDispatch();
    
    return <IconButton edge="end" aria-label="delete">
    <DeleteIcon onClick={() => {
        dispatch(deleteItem(id))}}>

        </DeleteIcon>
</IconButton>
}
