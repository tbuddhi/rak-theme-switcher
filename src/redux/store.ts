import { configureStore } from "@reduxjs/toolkit";
import themeSlice  from "./reducers/themeSlice";

// Configure the redux store and import reducer
export const store = configureStore({
    reducer: {
        theme: themeSlice
    }
})