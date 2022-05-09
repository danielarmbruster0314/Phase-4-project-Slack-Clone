import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Registration from "./LoginPage/Registration";
import Workspace from "./Workspace/Workspace.js";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />}></Route>
			<Route path='/registration' element={<Registration />}></Route>
			<Route path='/workspace' element={<Workspace />}></Route>
		</Routes>
	);
}

export default App;
