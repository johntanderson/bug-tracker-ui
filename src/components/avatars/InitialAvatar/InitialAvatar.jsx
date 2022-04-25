import * as React from "react";
import { Avatar as MuiAvatar, Box, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { RippleBadge } from "@components/badges";

function InitialAvatar({
	title = "",
	placement = "right",
	path = "/settings",
}) {
	return (
		<Box>
			<Tooltip title={title} placement={placement}>
				<IconButton component={Link} to={path} sx={{ padding: 0 }}>
					<RippleBadge
						overlap='circular'
						anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						variant='dot'
					>
						<MuiAvatar
							alt='John Anderson'
							sx={{ width: "32px", height: "32px" }}
						>
							JA
						</MuiAvatar>
					</RippleBadge>
				</IconButton>
			</Tooltip>
		</Box>
	);
}

export { InitialAvatar };
export default InitialAvatar;
