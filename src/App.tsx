
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";

import Login from "./pages/Login";
import { lightTheme, darkTheme } from "./theme/theme";
import { RootState } from "./redux/store";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    // Use custom theme for the whole application with theme mode
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Login />
      <ToastContainer position='top-right' theme='colored' />
    </ThemeProvider>
  );
}

export default App;
