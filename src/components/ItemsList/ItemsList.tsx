import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import { TItem } from "../../store/list"
import { DeleteItem } from "../DeleteItem/DeleteItem";

type TListProps = {
    items: TItem[]
}

export const ItemsList: React.FC<TListProps> =({items})=>{
    return <List>
        {items.map(item=>(
            <ListItem
                secondaryAction={
                    <DeleteItem id={item.id}/>
                }
                key={item.id}>
                {item.text}
            </ListItem>))
        }
        </List>
}