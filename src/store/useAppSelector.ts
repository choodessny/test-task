import { TStore } from "./store";
import { useSelector } from 'react-redux';

export const useAppSelector = <Selected>(selector: ((store: TStore) => Selected)): Selected => {
    return useSelector<TStore, Selected>(selector)
}