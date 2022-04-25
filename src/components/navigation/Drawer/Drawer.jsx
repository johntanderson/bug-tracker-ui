import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
	Box,
	Drawer as MuiDrawer,
	Typography,
	IconButton,
} from "@mui/material";
import { ExitToApp, BugReport } from "@mui/icons-material";
import { InitialAvatar } from "@components/avatars";
import DrawerMenu from "./DrawerMenu";
import { MenuButton } from "@components/buttons";
import useMediaQuery from "@mui/material/useMediaQuery";

function getDrawerWidth(drawerState, screenSize) {
	const drawerDimentions = {
		open: {
			xs: 68,
			sm: 240,
		},
		closed: {
			xs: 0,
			sm: 68,
		},
	};
	return drawerDimentions[drawerState][screenSize];
}

function Drawer() {
	const theme = useTheme();
	const xs = useMediaQuery(theme.breakpoints.only("xs"));
	const [open, setOpen] = useState(() => false);
	const [width, setWidth] = useState(() => null);

	useEffect(() => {
		setWidth(() => getDrawerWidth(open ? "open" : "closed", xs ? "xs" : "sm"));
	}, [xs, open]);

	return (
		<MuiDrawer
			variant='permanent'
			sx={{
				width: { width },
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: open
						? theme.transitions.duration.enteringScreen
						: theme.transitions.duration.leavingScreen,
				}),
				"& .MuiDrawer-paper": {
					justifyContent: "space-between",
					overflowX: "hidden",
					width: { width },
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
			}}
		>
			<Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						height: "42px",
						width: "auto",
						backgroundColor: "transparent",
						margin: "14px 14px",
						padding: "12px 0px",
						borderBottom: "1px solid lightgray",
						alignItems: "flex-end",
					}}
				>
					<Box
						sx={{
							flexShrink: 0,
							display: open ? (xs ? "none" : "initial") : "none",
							marginBottom: "3px",
						}}
					>
						<BugReport sx={{ fontSize: "22px", color: "lightgray" }} />
					</Box>
					<Typography
						variant='h1'
						noWrap={true}
						gutterBottom
						sx={{
							display: xs ? "none" : "initial",
							fontSize: "18px",
							fontWeight: 600,
							color: "lightgray",
							width: "154px",
							marginLeft: open ? "8px" : "0px",
							paddingBottom: "3px",
						}}
					>
						Bug Tracker
					</Typography>
					<MenuButton
						onClick={() => setOpen((prev) => !prev)}
						color='lightgray'
						sx={{
							"&:hover": {
								backgroundColor: "#26284687",
							},
						}}
					/>
				</Box>
				<DrawerMenu open={open} />
			</Box>

			<Box sx={{
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				alignContents: "center",
				margin: "14px 14px",
				padding: "12px 4px",
				borderTop: "1px solid lightgray",
			}}>
				<Box sx={{
				display: "flex",
				marginRight: "18px",
				paddingLeft: "0px",
				alignItems: "center",
				alignContent: "center",
			}}>
					<InitialAvatar title={open ? "" : "Account Settings"} />
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
					<Typography
						component='span'
						variant='body2'
						sx={{
							display: "block",
							whiteSpace: "nowrap",
							lineHeight: "inherit",
							fontWeight: 500,
							color: "lightgray",
						}}
					>
						John Anderson
					</Typography>
					<Typography
						component='span'
						variant='body2'
						sx={{
							fontSize: "12px",
							display: "block",
							whiteSpace: "nowrap",
							lineHeight: "inherit",
							color: "lightgray",
						}}
					>
						Software Engineer
					</Typography>
				</Box>
				<IconButton contained='true' sx={{ color: "lightGray" }}>
					<ExitToApp />
				</IconButton>
			</Box>
		</MuiDrawer>
	);
}

export { Drawer };

export default Drawer;
