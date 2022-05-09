import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Registration from "./LoginPage/Registration";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />}></Route>
			<Route path='/registration' element={<Registration />}></Route>
		</Routes>
	);
}

export default App;
