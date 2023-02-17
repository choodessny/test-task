import Button from "@mui/material/Button"
import {useState} from 'react';
import { AddItemModal } from "../AddItemModal/AddItemModal";
 
export const AddItem: React.FC = () => {

    const [addItemActive, setItemActive] = useState(true);

    return <>
    <Button variant="contained" onClick={() => {setItemActive(true)}}>
        Добавить
    </Button>
     <AddItemModal active ={addItemActive} setActive={setItemActive} />
     </>
}