import {configureStore} from '@reduxjs/toolkit';
import { tareasReducer } from './reducers/tareasReducer';

export const store = configureStore({
    reducer:{
        tareas: tareasReducer
    },
});