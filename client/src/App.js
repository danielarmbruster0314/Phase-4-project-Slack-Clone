import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Registration from "./LoginPage/Registration";
import Workspace from "./Workspace/Workspace.js";
import LandingPage from "./LandingPage/LandingPage";
import "semantic-ui-css/semantic.min.css";


function App() {
const [user, setUser] = useState("jimmy")
const [workspace, setWorkspace] = useState("jimmy")
	return (
		<Routes>{!user ? (
			<>
				<Route path='/' element={<Login />}></Route>
				<Route path='/registration' element={<Registration />}></Route>
			</>
		):(

			<>
				<Route path='/landingpage' element={<LandingPage user={user}/>}></Route>
				{!workspace ?  (null) : (<Route path='/workspace' element={<Workspace user={user}/>}></Route>)}
				
				
			</>
		)}
			
			

		</Routes>
	);
}

export default App;
