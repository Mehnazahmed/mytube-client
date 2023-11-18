import { createTheme } from "@mui/material";

export const theme =createTheme({
    palette:{
        primary:{
            main: '#556cd6',
        },
        secondary:{
            main: '#19857b',
        },
        error:{
            main: '#ff0000',
        },
    },
    components:{
        MuiContainer:{
            defaultProps:{
                maxWidth:'xl'
            }
        }
    }
})