import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FF6B00",
                    color: "#FFFFFF"
                }
            }
        }
    }
})