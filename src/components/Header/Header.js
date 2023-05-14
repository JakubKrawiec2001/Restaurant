import React from "react";
import "./Header.scss";
import "../../App.scss";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

function Header() {
	return (
		<>
			<Navbar></Navbar>
			<Hero></Hero>
		</>
	);
}

export default Header;
