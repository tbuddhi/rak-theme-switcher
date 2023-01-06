
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";

import Login from "./pages/Login";
import { lightTheme, darkTheme } from "./theme/theme";
import { RootState } from "./redux/store";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    // Use custom theme for the whole application with theme mode
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

export default App;
