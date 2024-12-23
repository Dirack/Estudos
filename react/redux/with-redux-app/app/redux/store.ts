import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>