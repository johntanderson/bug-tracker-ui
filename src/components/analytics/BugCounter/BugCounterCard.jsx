import React from "react";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Typography, Divider, Box } from "@mui/material";
import { WhiteTile } from "@/components/surfaces"
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import theme from "@/utilities/Theme";

function BugCounterCard({title, count = 0, subtitle, Icon = PriorityHighIcon}) {

	return (
		<WhiteTile
			sx={{
				cursor: "pointer",
				'&:hover': {
					boxShadow: '0px 0px 20px -10px rgba(0, 0, 0, 0.75)'
				}

			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingTop: "12px",
					paddingLeft: "18px",
					paddingRight: "18px",
					paddingBottom: "5px",
					backgroundColor: "transparent",
					color: "#343159",
					boxShadow: "none",
				}}
			>
				<Box
					sx={{
						flex: 0,
						display: "flex",
						color: "#343159",
						padding: "8px 8px",
						borderRadius: "50%",
						border: `thin solid #11101D`,
					}}
				>
					<Icon />
				</Box>
				<Typography
					pl="5px"
					component='span'
					variant='span'
					fontSize='1rem'
					letterSpacing='0.02857em'
					fontWeight='600'
					marginBottom="-10px"
				>
					{title}
				</Typography>
			</Box>
			<Typography
				component='h4'
				variant='h4'
				fontSize='1.5rem'
				lineHeight="1"
				fontWeight='600'
				letterSpacing='0.00735em'
				color='#11101D'
				mr='23px'
				ml='31px'
				mt={"-5px"}
				textAlign="right"
				overflow='hidden'
			>
				{count}
			</Typography>
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
					paddingLeft: "16px",
					paddingRight: "16px",
					color: "rgb(52, 71, 103)",
				}}
			>
				<Typography
					fontSize='0.865rem'
					fontWeight='300'
					lineHeight='1.5'
					letterSpacing='0.02857em'
					color='rgba(123, 128, 154, 0.93)'
					ml='10px'
				>
					{subtitle}
				</Typography>
			</Box>
		</WhiteTile>
	);
}

export { BugCounterCard }
export default BugCounterCard;