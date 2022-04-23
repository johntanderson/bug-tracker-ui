import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import navbarList from "../../../utilities/Routes";
import { Link, useLocation } from "react-router-dom";

export default function DrawerMenu({ open }) {
	const { pathname } = useLocation();
	console.log();

	return (
		<List dense={true}>
			{navbarList.map((key, index) => (
				<Tooltip
					key={key.desc}
					title={open ? "" : key.desc}
					placement={"right"}
					componentsProps={{
						tooltip: {
							sx: {
								backgroundColor: "gray",
								color: "white",
								marginLeft: "22px !important",
								boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
							},
						},
					}}
				>
					<ListItemButton
						selected={key.path === `/${pathname.split('/')[1]}`}
						component={Link}
						to={key.path}
						sx={{
							margin: "6px 14px",
							padding: "10px",
							borderRadius: "8px",
							"&:hover": {
								backgroundColor: "#26284687",
							},
						}}
					>
						<ListItemIcon sx={{ minWidth: "46px" }}>
							<Badge badgeContent={key.badge} color='secondary' variant='dot'>
								<key.icon sx={{ fontSize: "20px", color: "lightgray" }} />
							</Badge>
						</ListItemIcon>

						<ListItemText
							primary={key.desc}
							primaryTypographyProps={{
								variant: "body2",
							}}
							sx={{
								display: "inline",
								margin: "0px",
								overflowX: "hidden",
								color: "lightgray",
								whiteSpace: "nowrap",
								minWidth: "126px",
							}}
						/>
						{key.badge !== 0 ? (
							<Chip
								label={key.badge}
								color={"secondary"}
								size='small'
								sx={{ height: "auto" }}
							/>
						) : (
							<></>
						)}
					</ListItemButton>
				</Tooltip>
			))}
			<Divider variant='middle' light={true} />
		</List>
	);
}
