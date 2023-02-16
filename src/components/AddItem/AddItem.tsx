import { useDispatch } from 'react-redux'
import Button from "@mui/material/Button"
import { createItem } from '../../store/list';

export const AddItem: React.FC = () => {
    const dispatch = useDispatch();
    return <Button variant="contained" onClick={() => {
        dispatch(createItem('aaaaaaa'))
    }}>
        Добавить
    </Button>
}