import React from 'react'
import List from "@mui/material/List";
import ListSubheader from '@mui/material/ListSubheader';

export default function SidebarList({title, children}) {
  return (
    <List
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader 
        component="div"
        id="nested-list-subheader"
        sx={{
          backgroundColor: 'inherit', 
          fontSize: '18px', 
          fontWeight: 'bold',
          lineHeight: '25px',
          color: 'rgb(187, 186, 186)'
        }}
      >
        {title}
      </ListSubheader>
    }
    sx={{marginBottom: '15px'}}
  >
    {children}
  </List>
  )
}
