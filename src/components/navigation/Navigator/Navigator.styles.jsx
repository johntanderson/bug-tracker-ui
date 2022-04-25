import { Typography as MUITypography, Breadcrumbs as MUIBreadcrumbs, Link as MUILink } from "@mui/material";
import MUIHomeIcon from "@mui/icons-material/Home";
import { Link as RouterLink } from "react-router-dom";

const Link = ({children, to, sx}) => (
    <MUILink
        component={RouterLink}
        sx={{
            color: "rgb(52, 71, 103)",
            underline: "hover",
            display: "flex",
            alignItems: "center",
            ...sx,
        }}
        to={to}
    >
        {children}
    </MUILink>
);

const HomeIcon = ({sx}) => (
    <MUIHomeIcon 
        sx={{
            marginTop: "2px",
            fontSize: "18px",
            ...sx,
        }}
    />
);

const Breadcrumbs = ({children, sx}) => (
    <MUIBreadcrumbs
        sx={{
            marginLeft: "15px",
            ...sx,
        }}
    >
        {children}
    </MUIBreadcrumbs>
);

const Typography = ({children, sx}) => (
    <MUITypography
        sx={{
            color: "rgb(52, 71, 103)",
            ...sx,
        }}
    >
        {children}
    </MUITypography>
);


export {Link, HomeIcon, Breadcrumbs, Typography};