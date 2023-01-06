import { configureStore } from "@reduxjs/toolkit";
import themeSlice  from "./reducers/themeSlice";

// Configure the redux store and import reducer
export const store = configureStore({
    reducer: {
        theme: themeSlice
    }
})

// Define store types
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch