import { Fragment } from 'react';
import { AddItem } from './components/AddItem/AddItem';
import { ItemsList } from './components/ItemsList/ItemsList';
import { useAppSelector } from './store/useAppSelector';

function App() {
  const list = useAppSelector((state) => state.list)
  return (
   <Fragment>
    <AddItem/>
    <ItemsList
      items={list}
    />
   </Fragment>
  );
}

export default App;
