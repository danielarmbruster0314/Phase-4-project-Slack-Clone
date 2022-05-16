import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter  } from "react-router-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import actioncable from 'actioncable';

const cableApp = {}
cableApp.cable = actioncable.createConsumer('ws://localhost:3000/cable')

	ReactDOM.render(
    (<BrowserRouter>
        <App cableApp={cableApp}/>
    </BrowserRouter>),document.getElementById('root')
);
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.render(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
