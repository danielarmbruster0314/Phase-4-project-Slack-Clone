import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Registration from "./LoginPage/Registration";
import Workspace from "./Workspace/Workspace.js";
import LandingPage from "./LandingPage/LandingPage";
import "semantic-ui-css/semantic.min.css";



function App() {
const [user, setUser] = useState(null)
const [workspace, setWorkspace] = useState("jimmy")
// useEffect(() => {
// 	fetch('/users')
// 	.then(res => res.json())
// 	.then(data => console.log(data))
// }) 


	return (
		<Routes>{!user ? (
			<>
				<Route path='/' element={<Login setUser={setUser}/>}></Route>
				<Route path='/registration' element={<Registration />}></Route>
			</>
		):(

			<>
				<Route path='/landingpage' element={<LandingPage user={user} setWorkspace={setWorkspace}/>}></Route>
				{!workspace ?  (null) : (<Route path='/workspace' element={<Workspace workspace={workspace} user={user}/>}></Route>)}
				
				
			</>
		)}
			
			

		</Routes>
	);
}

export default App;
