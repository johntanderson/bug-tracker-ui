    import React, { useContext } from "react";
    import { Grid } from "@mui/material";
    import CheckIcon from '@mui/icons-material/Check';
    import LowPriorityIcon from '@mui/icons-material/LowPriority';
    import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
    import { DrawerContext } from "@/contexts/DrawerContext";
    import { BugCounterCard } from "@/components/analytics";

    function BugCounter(){
    const [drawerContext] = useContext(DrawerContext);

    const Styles = {
        GridItem: {
            xs: 12,
            sm: drawerContext.open ? 12 : 6,
            md: 6,
            lg: 3,
        }
    }

    return (
        <Grid
            container
            spacing={3}
        >
            <Grid item {...Styles.GridItem}>
                <BugCounterCard
                    title="Critical"
                    subtitle={"Assigned to you"}
                    count="4"
                />
            </Grid>
            <Grid item {...Styles.GridItem} zeroMinWidth>
                <BugCounterCard
                    title="Moderate"
                    subtitle={"Assigned to you"}
                    Icon={FlagOutlinedIcon}
                    count="7"
                />
            </Grid>
            <Grid item {...Styles.GridItem} zeroMinWidth>
                <BugCounterCard
                    title="Minor"
                    subtitle={"Assigned to you"}
                    Icon={LowPriorityIcon}
                    count="18"
                />
            </Grid>
            <Grid item {...Styles.GridItem} zeroMinWidth>
                <BugCounterCard
                    title="Resolved"
                    subtitle={"This past year"}
                    Icon={CheckIcon}
                    count="38"
                />
            </Grid>
        </Grid>
    );
    }

    export { BugCounter };
    export default BugCounter;