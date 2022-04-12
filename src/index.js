import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainTheme from "./themes/MainTheme";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<ThemeProvider theme={MainTheme}>
		<CssBaseline />
		<App />
	</ThemeProvider>
);
