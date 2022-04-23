import React from "react";
import { Grid, Box } from "@mui/material";
import { WhiteTile } from "@components/surfaces"

export default function Dashboard({sidebarOpen}) {

  const Styles = {
    GridItem: {
      xs: 12,
      sm: sidebarOpen ? 12 : 6,
      md: 6,
      lg: 3
    }
  }

	return (
		<Box sx={{ml: '10px', mr: '10px'}}>
			<Grid container spacing={3} >
        <Grid item {...Styles.GridItem}>
          <WhiteTile>One</WhiteTile>
        </Grid>
        <Grid item {...Styles.GridItem}>
          <WhiteTile>Two</WhiteTile>
        </Grid>
        <Grid item {...Styles.GridItem}>
          <WhiteTile>Three</WhiteTile>
        </Grid>
        <Grid item {...Styles.GridItem}>
          <WhiteTile>Four</WhiteTile>
        </Grid>
			</Grid>
		</Box>
	);
}