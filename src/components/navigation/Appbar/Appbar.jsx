import { Toolbar, Box } from "@mui/material";
import { MenuButton } from '@components/buttons';
import { Navigator } from '@components/navigation'
import { StyledAppBar } from './Appbar.styles';

function Appbar({ sidebarOpen, setSidebarOpen }) {

	return (
		<StyledAppBar open={sidebarOpen}>
			<Toolbar>
				{!sidebarOpen ? (
					<MenuButton 
						onClick={()=>setSidebarOpen((prev)=>!prev)}
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