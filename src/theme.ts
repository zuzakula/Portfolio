import {createMuiTheme} from "@mui/material";
import {pink} from "@mui/material/colors";

const theme = createMuiTheme(
    {
        palette: {
            primary: pink,
        },
        components: {
            MuiImageListItemBar: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        fontSize: '2rem'
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: '1.25rem',
                        fontFamily: 'Montserrat',
                        borderRadius: '50%'
                    }
                }
            }
        }
    },

)

export default theme;
