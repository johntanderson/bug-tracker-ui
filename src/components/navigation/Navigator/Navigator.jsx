import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Breadcrumbs, Link, HomeIcon } from "./Navigator.styles";

function getPathLinks(location) {
	const pathTitles = location.pathname.substring(1).split("/");
	let curPath = "/";
	const paths = [];

	for (let i = 0; i < pathTitles.length; i++) {
		curPath += pathTitles[i];
		paths.push(
			i === pathTitles.length - 1 ? (
				<Typography key={curPath}>
					{pathTitles[i].charAt(0).toUpperCase() + pathTitles[i].slice(1)}
				</Typography>
			) : (
				<Link key={curPath} to={curPath}>
					{pathTitles[i].charAt(0).toUpperCase() + pathTitles[i].slice(1)}
				</Link>
			)
		);
		curPath += "/";
	}

	return paths;
}

function Navigator() {
	const location = useLocation();
	const [pathLinks, setPathLinks] = useState(()=>null);

	useEffect(() => {
		setPathLinks(() => getPathLinks(location));
	}, [location]);

	return (
		<Breadcrumbs>
			<Link to='/dashboard'>
				<HomeIcon />
			</Link>
			{pathLinks}
		</Breadcrumbs>
	);
}

export default Navigator;
export {Navigator};
