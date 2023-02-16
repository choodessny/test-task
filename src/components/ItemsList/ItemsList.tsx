import List from "@mui/material/List"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import { TItem } from "../../store/list"
import DeleteIcon from '@mui/icons-material/Delete';

type TListProps = {
    items: TItem[]
}

export const ItemsList: React.FC<TListProps> =({items})=>{
    return <List>
        {items.map(item=>(
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
                key={item.id}>
                {item.text}
            </ListItem>))
        }
        </List>
}