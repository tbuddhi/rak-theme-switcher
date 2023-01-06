import { createTheme } from "@mui/material";

export const themeOrange = '#ff5c5c'
export const themeBlue = '#1f0b4f'
declare module '@mui/material/styles/createPalette' {
    // interface Palette {
    //     inputBg: {
    //     main?: string;
    //   },
    //   neutral: {
    //     main?: string;
    //     contrastText?: string;
    //   },
    //   orange: {
    //     main?: string;
    //     contrastText?: string;
    //   }
    // }
    interface PaletteOptions {
        custom: {
          inputText?: string;
          inputBg?: string;
          smButtonBg?: string;
          smButtonHoverBg?: string;
        }
    }
  }

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#e6ebfc",
    },
    text: {
      primary: "#11111",
    },
    custom: {
      inputText: '#2b1e66',
      inputBg: '#e6ebfc',
      smButtonBg: '#fedfdd',
      smButtonHoverBg: '#ffb7b7'
    }
  },
  typography: {
    h5: {
      color: '#2b1e66'
    },
    overline: {
      color: '#6d6d6d',
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#3f365a",
    },
    text: {
      primary: "#fff",
    },
    custom: {
      inputBg: '#40355a',
      smButtonBg: '#fff',
      smButtonHoverBg: '#e0e0e0'
    }
  },
  typography: {
    overline: {
      color: '#fff',
    }
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#e6e6e6'
        },
      },
    }
  }
})