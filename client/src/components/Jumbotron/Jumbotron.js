import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({children}) => (
	<header className="header">
		<h1>ENG Share</h1>
		<h7>Teaching English As a Second Language </h7>
		<h3>Sharing Network</h3> {children}
	</header>
);


export default Jumbotron;
