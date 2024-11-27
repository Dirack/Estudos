import userReducer from "./userReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>