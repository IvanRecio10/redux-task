import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice'

export const store = configureStore({
    reducer: {
        task: todosReducer
    }
})