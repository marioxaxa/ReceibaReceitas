import {  createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

export const themeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#DE702B",
        },
        secondary: {
            main: "#DEED87",
        },
    },
};

const theme = createTheme(themeOptions);

function ThemeContext({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeContext;
