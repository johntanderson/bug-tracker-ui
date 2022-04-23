import * as React from "react";
import { Typography, Breadcrumbs as MuiBreadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
	const attributes = {
		Link: {
			component: RouterLink,
			sx: {
				color: "rgb(52, 71, 103)",
				underline: "hover",
				display: "flex",
				alignItems: "center",
			},
		},

		HomeIcon: {
			sx: {
				marginTop: "2px",
				fontSize: "18px",
			},
		},

		MuiBreadcrumb: {
			sx: { marginLeft: "15px" },
		},

		Typography: {
			color: "rgb(52, 71, 103)",
		},
	};

	function GetPaths() {
		const pathTitles = useLocation().pathname.substring(1).split("/");
		let curPath = "/";
		const paths = [];

		for (let i = 0; i < pathTitles.length; i++) {
			curPath += pathTitles[i];
			paths.push(
				i === pathTitles.length - 1 ? (
					<Typography {...attributes.Typography} key={curPath}>
						{pathTitles[i].charAt(0).toUpperCase() + pathTitles[i].slice(1)}
					</Typography>
				) : (
					<Link {...attributes.Link} key={curPath} to={curPath}>
						{pathTitles[i].charAt(0).toUpperCase() + pathTitles[i].slice(1)}
					</Link>
				)
			);
			curPath += "/";
		}

		return paths;
	}

	return (
		<MuiBreadcrumbs {...attributes.MuiBreadcrumb}>
			<Link to='/dashboard' {...attributes.Link}>
				<HomeIcon {...attributes.HomeIcon} />
			</Link>
			{GetPaths()}
		</MuiBreadcrumbs>
	);
}
