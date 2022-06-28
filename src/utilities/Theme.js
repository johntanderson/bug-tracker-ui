import { createTheme } from '@mui/material/styles';
import "@fontsource/source-code-pro"
import "@fontsource/source-code-pro/600.css"
import "@fontsource/source-code-pro/300.css"
import "@fontsource/source-code-pro/500.css"
import "@fontsource/source-code-pro/700.css"

export default createTheme({
    typography: {
     "fontFamily": `"Source Code Pro", monospace`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500,
     "fontWeightBold": 600,
    },
    palette: {
    }
  });