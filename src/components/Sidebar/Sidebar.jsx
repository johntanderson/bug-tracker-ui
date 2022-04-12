import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SidebarList from './SidebarList';
import SidebarListItem from './SidebarListItem';

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box", boxShadow: "0 1px 25px 1px rgb(0 0 0 / 11%)", border: 'none'},
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto",  marginTop: "25px", padding: '5px'}}>
        <SidebarList title="Navigation">
          <SidebarListItem 
            icon={<DashboardOutlinedIcon sx={{fontSize: '22px'}} />}
            path='/dashboard'
          >
            Dashboard
          </SidebarListItem>
          <SidebarListItem 
            icon={<SourceOutlinedIcon sx={{fontSize: '22px'}} />}
            path='/projects'
          >
            My Projects
          </SidebarListItem>
          <SidebarListItem 
            icon={<BugReportOutlinedIcon sx={{fontSize: '22px'}} />}
            path='/issues'
          >
            Assigned Issues
          </SidebarListItem>
          <SidebarListItem 
            icon={<EmailOutlinedIcon sx={{fontSize: '22px'}} />}
            path='/messages'
          >
            Messages
          </SidebarListItem>
        </SidebarList>
        <SidebarList title="Account">
          <SidebarListItem 
            icon={<SettingsOutlinedIcon sx={{fontSize: '22px'}} />}
            path='/settings'
          >
            Settings
          </SidebarListItem>
        </SidebarList>
        <SidebarList title="Administration">
          <SidebarListItem 
            icon={<AdminPanelSettingsOutlinedIcon sx={{fontSize: '22px'}} />}
            path='/admin'
          >
            Manage Users
          </SidebarListItem>
        </SidebarList>
      </Box>
    </Drawer>
  );
}
