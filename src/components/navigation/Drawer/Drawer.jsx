import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ExitToApp, BugReport } from "@mui/icons-material";
import { InitialAvatar } from "@/components/avatars";
import DrawerMenu from "./DrawerMenu";
import { MenuButton } from "@/components/buttons";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DrawerContext } from "@/contexts/DrawerContext";
import {
	Box,
	Drawer as MuiDrawer,
	Typography,
	IconButton,
} from "@mui/material";

function Drawer() {
	const [drawerContext, setOpen] = useContext(DrawerContext);
	const theme = useTheme();
	const xs = useMediaQuery(theme.breakpoints.only("xs"));

	return (
		<MuiDrawer
			variant='permanent'
			sx={{
				width: drawerContext.width,
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: drawerContext.open
						? theme.transitions.duration.enteringScreen
						: theme.transitions.duration.leavingScreen,
				}),
				"& .MuiDrawer-paper": {
					justifyContent: "space-between",
					overflowX: "hidden",
					width: drawerContext.width,
					borderRight: "0px",
					borderRadius: "0px 16px 16px 0px",
					boxShadow: theme.shadows[8],
					backgroundColor: "#11101D",
					transition: theme.transitions.create("width", {
						easing: theme.transitions.easing.sharp,
						duration: drawerContext.open
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
							display: drawerContext.open ? (xs ? "none" : "initial") : "none",
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
							marginLeft: drawerContext.open ? "8px" : "0px",
							paddingBottom: "3px",
						}}
					>
						Bug Tracker
					</Typography>
					<MenuButton
						onClick={() => setOpen()}
						color='lightgray'
						sx={{
							"&:hover": {
								backgroundColor: "#26284687",
							},
						}}
					/>
				</Box>
				<DrawerMenu open={drawerContext.open} />
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
				marginRight: "17px",
				paddingLeft: "0px",
				alignItems: "center",
				alignContent: "center",
			}}>
					<InitialAvatar title={drawerContext.open ? "" : "Account Settings"} />
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
