import React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar as MUIAppBar } from "@mui/material";


const StyledAppBar = ({children, open}) => {
    const theme = useTheme();
    return (
        <MUIAppBar
            position='fixed'
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                position: "absolute",
                width: open
                    ? { xs: `calc(100% - 68px)`, sm: `calc(100% - 240px)` }
                    : { xs: `100%`, sm: `calc(100% - 68px)` },
                ml: open
                    ? { xs: `calc(100% - 68px)`, sm: `calc(100% - 240px)` }
                    : { xs: `100%`, sm: `calc(100% - 68px)` },
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: open
                        ? theme.transitions.duration.enteringScreen
                        : theme.transitions.duration.leavingScreen,
                }),
            }}
        >
            {children}
        </MUIAppBar>
    )
}

    export { StyledAppBar }