import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {Box, Drawer as MuiDrawer, Typography, Button, IconButton} from "@mui/material";
import {Menu, ExitToApp, BugReport} from "@mui/icons-material";
import { InitialAvatar } from "@components/avatars";
import DrawerMenu from "./DrawerMenu";

function Drawer({ open, setOpen }) {
	const theme = useTheme();

	const Styles = {
		Drawer: {
			width: open ? { xs: 68, sm: 240 } : { xs: "0px", sm: 68 },
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: open
					? theme.transitions.duration.enteringScreen
					: theme.transitions.duration.leavingScreen,
			}),
			"& .MuiDrawer-paper": {
				justifyContent: "space-between",
				overflowX: "hidden",
				width: open ? { xs: 68, sm: 240 } : { xs: "0px", sm: 68 },
				borderRight: "0px",
				borderRadius: "0px 16px 16px 0px",
				boxShadow: theme.shadows[8],
				backgroundColor: "#11101D",
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: open
						? theme.transitions.duration.enteringScreen
						: theme.transitions.duration.leavingScreen,
				}),
			},
		},
		Header: {
			Box: {
				display: "flex",
				justifyContent: "space-between",
				height: "42px",
				width: "auto",
				backgroundColor: "transparent",
				margin: "14px 14px",
				padding: "12px 0px",
				borderBottom: "1px solid lightgray",
				alignItems: "flex-end",
			},
			IconBox: {
				flexShrink: 0,
				display: open ? { xs: "none", sm: "initial" } : "none",
				marginBottom: "3px",
			},
			BugReportIcon: { fontSize: "22px", color: "lightgray" },
			Typography: {
				display: { xs: "none", sm: "initial" },
				fontSize: "18px",
				fontWeight: 600,
				color: "lightgray",
				width: "154px",
				marginLeft: open ? "8px" : "0px",
				paddingBottom: "3px",
			},
			Button: {
				minWidth: "initial",
				padding: "10px",
				color: "gray",
				borderRadius: "8px",
				backgroundColor: "transparent",
				"&:hover": {
					backgroundColor: "#26284687",
				},
			},
			MenuIcon: { fontSize: "20px", color: "lightgray" },
		},
		Footer: {
			Box: {
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				alignContents: "center",
				margin: "14px 14px",
				padding: "12px 4px",
				borderTop: "1px solid lightgray",
			},
			AvatarBox: {
				display: "flex",
				marginRight: "18px",
				paddingLeft: "0px",
				alignItems: "center",
				alignContent: "center",
			},
			NameBox: { display: "flex", flexDirection: "column", flexGrow: 1 },
			NameTypography: {
				fontFamily: "inherit",
				display: "block",
				whiteSpace: "nowrap",
				lineHeight: "inherit",
				fontWeight: 500,
				color: "lightgray",
			},
			ProfessionTypography: {
				display: "block",
				whiteSpace: "nowrap",
				lineHeight: "inherit",
				color: "lightgray",
			},
			ExitIconButton: { color: "lightGray" },
		},
	};


	return (
		<MuiDrawer variant='permanent' open={open} sx={Styles.Drawer}>
			<Box>
				<Box sx={Styles.Header.Box}>
					<Box sx={Styles.Header.IconBox}>
						<BugReport sx={Styles.Header.BugReportIcon} />
					</Box>
					<Typography
						variant='h1'
						noWrap={true}
						gutterBottom
						sx={Styles.Header.Typography}
					>
						Bug Tracker
					</Typography>
					<Button onClick={()=>{setOpen(!open)}} sx={Styles.Header.Button}>
						<Menu sx={Styles.Header.MenuIcon} />
					</Button>
				</Box>
				<DrawerMenu open={open} />
			</Box>

			<Box sx={Styles.Footer.Box}>
				<Box sx={Styles.Footer.AvatarBox}>
					<InitialAvatar open={open} />
				</Box>
				<Box sx={Styles.Footer.NameBox}>
					<Typography
						component='span'
						variant='body2'
						sx={Styles.Footer.NameTypography}
					>
						John Anderson
					</Typography>
					<Typography
						component='span'
						variant='body2'
						sx={Styles.Footer.ProfessionTypography}
					>
						Software Engineer I
					</Typography>
				</Box>
				<IconButton contained='true' sx={Styles.Footer.ExitIconButton}>
					<ExitToApp />
				</IconButton>
			</Box>
		</MuiDrawer>
	);
}

export { Drawer }

export default Drawer;
