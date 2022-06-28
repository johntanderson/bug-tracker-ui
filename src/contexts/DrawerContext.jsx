import React, {createContext, useState, useEffect, useCallback} from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const getDrawerWidth = ((open, screenSize) => {
    const drawerDimensions = {
        open: {
            xs: 68,
            sm: 240,
        },
        closed: {
            xs: 0,
            sm: 68,
        },
    };
    return drawerDimensions[open][screenSize];
})

export const DrawerContext = createContext(null);

export const DrawerProvider = ({children}) => {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only("xs"), {noSsr: true});
    const [drawerState, setDrawerState] = useState(()=> getInitialState())

    useEffect(() => {
        setDrawerState((prevState) => {
            return {
                open: prevState.open,
                width: getDrawerWidth(prevState.open ? "open" : "closed", xs ? "xs" : "sm")
            }
        })
    }, [xs]);

    function getInitialState(){
        let open = sessionStorage.getItem("DrawerContext") || "closed";

        let width = getDrawerWidth(open, xs ? "xs" : "sm");
        return {open: open === "open", width: width};
    }

    function setOpen(){
        setDrawerState((prev) => {
            sessionStorage.setItem("DrawerContext", !prev.open ? "open" : "closed");
            return {open: !prev.open, width: getDrawerWidth(!prev.open ? "open" : "closed", xs ? "xs" : "sm")}
        });
    }

    return (
        <DrawerContext.Provider value={[drawerState, setOpen]}>
            {children}
        </DrawerContext.Provider>
    )
}