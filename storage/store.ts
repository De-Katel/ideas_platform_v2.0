import { configureStore } from '@reduxjs/toolkit';

import dataReduser from './slises/dataSlise';

export const store = configureStore({
    reducer: {
        data: dataReduser
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;