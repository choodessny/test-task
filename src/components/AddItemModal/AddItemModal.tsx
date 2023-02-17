import { createItem } from '../../store/list';
import { useDispatch } from 'react-redux';
import Button from "@mui/material/Button"
import { Modal } from '@mui/material';

type TModalProps = {active: boolean, setActive: (newActive:boolean)=>void}

export const AddItemModal: React.FC<TModalProps> = ({active, setActive}) => {
    const dispatch = useDispatch();

 return <Modal open={active}>
<>
 <Button variant="contained" onClick={() => {
    dispatch(createItem('aaaaaaa'))}}>
    Ок
</Button>
<Button variant="contained" onClick={() => setActive(false)}>
    Отмена
    </Button>
    </>
    </Modal>
};