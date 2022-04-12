import React, {useEffect} from "react";
import ListItemButton from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from 'react-router-dom';

export default function Item({ icon, children, path }) {
  const {pathname} = useLocation();

  return (
    <ListItemButton
      selected={path === pathname}
      component={Link}
      to={path}
      button 
      key={path}
      sx={{ 
        py: 0, 
        minHeight: 32, 
        borderRadius: '10px',
        color: '#555'
      }}
    >
      <ListItemIcon sx={{ color: 'inherit', minWidth: '32px'}}>
        {icon}
      </ListItemIcon>
      <ListItemText 
        primary={children}
        primaryTypographyProps={{
          fontSize: 15,
          color: '#555'
        }}
      />
    </ListItemButton>
  );
}
