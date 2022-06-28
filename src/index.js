import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import MainTheme from "@/utilities/Theme";
import App from "@/App";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={MainTheme}>
			<CssBaseline />
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
