import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route,Navigate  } from "react-router-dom";
import Login from "./LoginPage/Login";
import Registration from "./LoginPage/Registration";
import Workspace from "./Workspace/Workspace.js";
import LandingPage from "./LandingPage/LandingPage";
import "semantic-ui-css/semantic.min.css";
import LogOut from "./LoginPage/LogOut";


function App(cableApp) {
const [user, setUser] = useState(null)
const [workspace, setWorkspace] = useState("jimmy")
useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }else{
		r.json().then((error)=> console.log(error) )
	}
    });
  }, []);


	return (
		<Routes>{!user ? (
			<>
			 	
				<Route path='*' element={<Login setUser={setUser}/>}></Route>
				<Route path='/registration' element={<Registration setUser={setUser}/>}></Route>
				<Route path='/logout' element={<LogOut />}></Route>
				{/* <Route path="*" element={<Navigate to="/" />}> </Route> */}
			</>
		):(

			<>
				{/* <Route path="*" element={<Navigate to="/landingpage" />}></Route> */}
				<Route path='/landingpage' element={<LandingPage user={user} setUser={setUser} setWorkspace={setWorkspace}/>}></Route>
				{!workspace ?  (null) : (<Route path='/workspace' element={<Workspace workspace={workspace} user={user} setUser={setUser} cableApp={cableApp}/>}></Route>)}
				
				
			</>
		)}
			
			

		</Routes>
	);
}

export default App;
