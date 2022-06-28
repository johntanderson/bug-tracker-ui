import React, { useState } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Appbar, Drawer } from "@/components/navigation";
import { DrawerProvider } from "@/contexts/DrawerContext";
import {
	Admin,
	Analytics,
	Bugs,
	Dashboard,
	Projects,
	Settings,
} from "@/views/protected";
import {
	Login,
	Register
} from "@/views/public";

const loggedIn = true;

function App() {
	const [sidebarOpen] = useState(()=>false);

	return (
		<Routes>

			{/* Public Routes */}
			<Route element={<Outlet />} >
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Route>

			{/* Protected Routes */}
			<Route
				element={
					<Box sx={{ display: "flex" }}>
						<DrawerProvider>
							<Appbar />
							<Drawer />
							<Box component='main' sx={{ flex: 4, p: 3 }}>
								<Toolbar />
								<Outlet />
							</Box>
						</DrawerProvider>
					</Box>
				}
			>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/bugs' element={<Bugs />} />
				<Route path='/bugs/:ID' element={<Bugs />} />
				<Route path='/analytics' element={<Analytics />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/admin' element={<Admin />} />
			</Route>
			<Route path='*' element={<Navigate to={loggedIn ? '/dashboard' : '/login'} replace />} />
		</Routes>
	);
}

export default App;
