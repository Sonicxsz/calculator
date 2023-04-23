import {configureStore} from '@reduxjs/toolkit';
import formDataSlice from './reducer/formReducer'


const store = configureStore({
    reducer: {
        formDataSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store