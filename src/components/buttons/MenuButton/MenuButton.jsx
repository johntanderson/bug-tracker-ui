import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const MenuButton = ({onClick, sx, color}) => (
    <Button
        onClick={onClick}
        sx={{
            minWidth: "initial",
			padding: "10px",
			color: "gray",
            borderRadius: "8px",
			backgroundColor: "transparent",
			"&:hover": {
				backgroundColor: "transparent",
			},
            ...sx,
        }}
    >
        <MenuIcon 
            sx={{ fontSize: "20px", color: {color} }}
        />
    </Button>
)

export default MenuButton;
export {MenuButton};