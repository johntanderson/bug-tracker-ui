import React from "react";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Typography, Divider, Box } from "@mui/material";
import Tile from "../Surfaces/Tile"

function BugCounter() {
	return (
		<Tile>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingTop: "8px",
					paddingLeft: "16px",
					paddingRight: "16px",
					backgroundColor: "transparent",
					color: "#343159",
					boxShadow: "none",
				}}
			>
				<Box
					sx={{
						display: "flex",
						color: "red",
						justifyContent: "center",
						alignItems: "center",
						width: "40px",
						height: "40px",
						borderRadius: "50%",
						border: "thin solid red",
					}}
				>
					<PriorityHighIcon />
				</Box>
				<Box
					sx={{
						textAlign: "right",
						lineHeight: "1.25",
					}}
				>
					<Typography
						component='span'
						variant='span'
						fontSize='1.08rem'
						lineHeight='1.5'
						letterSpacing='0.02857em'
						fontWeight='bold'
					>
						Critical Bugs
					</Typography>
					<Typography
						component='h4'
						variant='h4'
						fontSize='2rem'
						lineHeight='1.375'
						fontWeight='700'
						letterSpacing='0.00735em'
						color='#11101D'
						mr='5px'
					>
						8
					</Typography>
				</Box>
			</Box>
			<Divider
				variant='fullWidth'
				sx={{
					borderTop: "0px solid rgba(0, 0, 0, 0.12)",
					borderRight: "0px solid rgba(0, 0, 0, 0.12)",
					borderLeft: "0px solid rgba(0, 0, 0, 0.12)",
					backgroundColor: "transparent",
					height: "0.0625rem",
					margin: "1rem 0px",
					borderBottom: "none",
					opacity: 0.25,
					backgroundImage:
						"linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0)) !important",
				}}
			/>
			<Box
				sx={{
					paddingBottom: "16px",
					paddingleft: "16px",
					paddingRight: "16px",
					color: "rgb(52, 71, 103)",
				}}
			>
				<Typography
					fontSize='0.875rem'
					fontWeight='400'
					lineHeight='1.5'
					letterSpacing='0.02857em'
					color='rgb(123, 128, 154)'
					ml='15px'
				>
					Assigned to you currently.
				</Typography>
			</Box>
		</Tile>
	);
}

export { BugCounter }
export default BugCounter;