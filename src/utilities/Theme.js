import { createTheme } from '@mui/material/styles';
import "@fontsource/source-sans-pro"
import "@fontsource/source-sans-pro/600.css"
import "@fontsource/source-sans-pro/300.css"

export default createTheme({
    typography: {
     "fontFamily": `"Source Sans Pro", sans-serif`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500,
     "fontWeightBold": 600,
    },
    palette: {
    }
  });