import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store'
import { AnyAction } from '@reduxjs/toolkit';


export function useActionDispatcher(actionFn: (payload: any) => AnyAction) {
    const dispatch = useAppDispatch();
    return (item: any) => dispatch(actionFn(item));
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;