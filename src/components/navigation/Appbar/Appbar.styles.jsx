import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar as MUIAppBar } from "@mui/material";
import { DrawerContext } from "@/contexts/DrawerContext";

const StyledAppBar = ({children}) => {
    const theme = useTheme();
    const [drawerContext, ] = useContext(DrawerContext);
    return (
        <MUIAppBar
            position='fixed'
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                position: "absolute",
                width: `calc(100% - ${drawerContext.width}px)`,
                ml: `calc(100% - ${drawerContext.width}px)`,
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: drawerContext.open
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