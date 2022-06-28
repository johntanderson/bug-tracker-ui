import React from "react";
import { BugCounter } from "@/components/analytics";
import { Box } from "@mui/material";
import { ResolvedBugsGraph } from "@/components/analytics";
import { WhiteTile } from "@/components/surfaces";
import CardHeader from "@mui/material/CardHeader";
import { Grid } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CardContent from '@mui/material/CardContent';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function Dashboard() {
	return (
		<Box sx={{ ml: "10px", mr: "10px" }}>
			<BugCounter />
			<ResolvedBugsGraph />

			<Grid container spacing={3} mt="1px">
				<Grid item xs="12" lg="6">
					<WhiteTile>
						<CardHeader title='Recent Projects' />
                        <CardContent>
                            <BasicTable />
                        </CardContent>
					</WhiteTile>
				</Grid>
				<Grid item xs="12" lg="6">
					<WhiteTile>
						<CardHeader title='Recent Bugs' />
					</WhiteTile>
				</Grid>
			</Grid>
		</Box>
	);
}


function BasicTable() {
    return (
        <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell align="right">Contributors</TableCell>
              <TableCell align="right">Active Bugs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
    );
  }