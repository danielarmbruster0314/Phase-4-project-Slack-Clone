import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Registration from "./LoginPage/Registration";
import Workspace from "./Workspace/Workspace.js";
import LandingPage from "./LandingPage/LandingPage";
import "semantic-ui-css/semantic.min.css";
import LogOut from "./LoginPage/LogOut";


function App() {
const [user, setUser] = useState(null)
const [workspace, setWorkspace] = useState("jimmy")
useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


	return (
		<Routes>{!user ? (
			<>
				<Route path='/' element={<Login setUser={setUser}/>}></Route>
				<Route path='/registration' element={<Registration />}></Route>
				<Route path='/logout' element={<LogOut />}></Route>
			</>
		):(

			<>
				<Route path='/landingpage' element={<LandingPage user={user} setWorkspace={setWorkspace}/>}></Route>
				{!workspace ?  (null) : (<Route path='/workspace' element={<Workspace workspace={workspace} user={user} setUser={setUser}/>}></Route>)}
				
				
			</>
		)}
			
			

		</Routes>
	);
}

export default App;
