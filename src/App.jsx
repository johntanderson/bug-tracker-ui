import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "@fontsource/source-sans-pro"
import "@fontsource/source-sans-pro/600.css"
import "@fontsource/source-sans-pro/300.css"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./routes/Dashboard/Dashboard";
import Projects from "./routes/Projects/Projects";
import Bugs from "./routes/Bugs/Bugs";
import Messages from "./routes/Messages/Messages";
import AccountSettings from "./routes/AccountSettings/AccountSettings";
import AdminPanel from "./routes/AdminPanel/AdminPanel";

function App() {
	return (
		<Router>
			<Box sx={{ display: "flex" }}>
				<Navbar />
				<Sidebar />
				<Box component='main' sx={{ flex: 4, p: 3 }}>
					<Toolbar />
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/issues' exact element={<Bugs />} />
						<Route path='/messages' exact element={<Messages />} />
						<Route path='/settings' element={<AccountSettings />} />
						<Route path='/admin' element={<AdminPanel />} />
					</Routes>
				</Box>
			</Box>
		</Router>
	);
}

export default App;
