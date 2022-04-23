import React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar as MuiAppBar, Toolbar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import BreadCrumbs from "./Breadcrumbs";

function Appbar({ sidebarOpen, setSidebarOpen }) {
	const theme = useTheme();

	const Styles = {
		Button: {
			minWidth: "initial",
			padding: "10px",
			color: "gray",
			borderRadius: "8px",
			backgroundColor: "transparent",
			"&:hover": {
				backgroundColor: "transparent",
			},
			display: !sidebarOpen ? { xs: "", sm: "none" } : "none",
		},
		MenuIcon: { fontSize: "20px", color: "#11101D" },
	};

	return (
		<MuiAppBar
			position='fixed'
			sx={{
				backgroundColor: "transparent",
				boxShadow: "none",
				position: "absolute",
				width: sidebarOpen
					? { xs: `calc(100% - 68px)`, sm: `calc(100% - 240px)` }
					: { xs: `100%`, sm: `calc(100% - 68px)` },
				ml: sidebarOpen
					? { xs: `calc(100% - 68px)`, sm: `calc(100% - 240px)` }
					: { xs: `100%`, sm: `calc(100% - 68px)` },
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: sidebarOpen
						? theme.transitions.duration.enteringScreen
						: theme.transitions.duration.leavingScreen,
				}),
			}}
		>
			<Toolbar>
				{!sidebarOpen ? (
					<Button
						onClick={() => {
							setSidebarOpen(!sidebarOpen);
						}}
						display='none'
						sx={Styles.Button}
					>
						<MenuIcon sx={Styles.MenuIcon} />
					</Button>
				) : (
					""
				)}
				<Box sx={{ justifyContent: "space-between" }}>
					<BreadCrumbs />
					<Box></Box>
				</Box>
			</Toolbar>
		</MuiAppBar>
	);
}

export { Appbar }
export default Appbar;