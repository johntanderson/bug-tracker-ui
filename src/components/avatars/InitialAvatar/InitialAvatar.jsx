import * as React from "react";
import {
	Avatar as MuiAvatar,
	Box,
	IconButton,
	Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RippleBadge } from '@components/badges';

function InitialAvatar({ open }) {

	const attributes = {

		Tooltip: {
			title: open ? '' : 'Open Settings',
			placement: 'right'
		},

		IconButton: {
			component: Link,
			to: '/settings',
			sx: { padding: 0 }
		},

		Badge: {
			overlap: 'circular',
			anchorOrigin: { vertical: "bottom", horizontal: "right" },
			variant: 'dot'
		},

		MuiAvatar: {
			alt: 'Remy Sharp',
			sx: { width: "32px", height: "32px" }
		},
		
	};

	return (
		<Box>
			<Tooltip {...attributes.Tooltip} >
				<IconButton {...attributes.IconButton} >
					<RippleBadge {...attributes.Badge} >
						<MuiAvatar {...attributes.MuiAvatar} >
							JA
						</MuiAvatar>
					</RippleBadge>
				</IconButton>
			</Tooltip>
		</Box>
	);
}

export { InitialAvatar }
export default InitialAvatar;