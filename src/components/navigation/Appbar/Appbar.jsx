import { useContext } from "react";
import { Toolbar, Box } from "@mui/material";
import { MenuButton } from '@/components/buttons';
import { Navigator } from '@/components/navigation'
import { StyledAppBar } from './Appbar.styles';
import { DrawerContext} from "@/contexts/DrawerContext";

function Appbar() {
	const [drawerContext, setDrawerOpen] = useContext(DrawerContext);

	return (
		<StyledAppBar>
			<Toolbar>
				{!drawerContext.open ? (
					<MenuButton 
						onClick={()=>setDrawerOpen((prev)=>!prev)}
						color="#11101D"
						sx={{display: { sm: "none" } }}
					/>
				) : (
					""
				)}
				<Box sx={{ justifyContent: "space-between" }}>
					<Navigator />
					<Box></Box>
				</Box>
			</Toolbar>
		</StyledAppBar>
	);
}

export { Appbar }
export default Appbar;