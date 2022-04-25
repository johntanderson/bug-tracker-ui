import React, { useState } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Appbar, Drawer } from "@components/navigation";

import {
	Admin,
	Analytics,
	Bugs,
	Dashboard,
	Projects,
	Settings,
} from "@views/protected";
import { 
	Landing,
	Login,
	Register
} from "@views/public";

const loggedIn = true;
const role = 'Admin';

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(()=>false);

	return (
		<Routes>

			{/* Public Routes */}
			<Route element={<Outlet />} >
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Route>

			{/* Protected Routes */}
			<Route
				element={
					<Box sx={{ display: "flex" }}>
						<Appbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
						<Drawer />
						<Box component='main' sx={{ flex: 4, p: 3 }}>
							<Toolbar />
							<Outlet />
						</Box>
					</Box>
				}
			>
				<Route path='/dashboard' element={<Dashboard sidebarOpen={sidebarOpen} />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/bugs' element={<Bugs />} />
				<Route path='/bugs/:ID' element={<Bugs />} />
				<Route path='/analytics' element={<Analytics />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/admin' element={<Admin />} />
			</Route>
			<Route path='*' element={<Navigate to={loggedIn ? '/dashboard' : '/'} replace />} />
		</Routes>
	);
}

export default App;
