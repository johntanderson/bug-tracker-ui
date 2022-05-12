import React, {createContext, useState, useEffect} from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function getDrawerWidth(drawerState = 'closed', screenSize = 'sm') {
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
    return drawerDimensions[drawerState][screenSize];
}

export const DrawerContext = createContext(null);

export const DrawerProvider = ({children}) => {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only("xs"));
    const [open, setOpen] = useState(() => false);
    const [width, setWidth] = useState(() => null);

    useEffect(() => {
        setWidth(() => getDrawerWidth(open ? "open" : "closed", xs ? "xs" : "sm"));
    }, [xs, open]);

    return (
        <DrawerContext.Provider value={[{open: open, width: width}, setOpen]}>
            {children}
        </DrawerContext.Provider>
    )
}