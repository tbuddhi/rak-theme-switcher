import { createSlice } from "@reduxjs/toolkit"

// Create theme slice
export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkTheme: !!JSON.parse(localStorage.getItem("darkMode")),
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme
        }
    }
})

// Handle toggling theme mode and local storage using thunk function
export const asyncToggleTheme = () => (dispatch) => {
    const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
    localStorage.setItem("darkMode", !isDarkMode);
    dispatch(toggleTheme());
};

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer