import React from "react";
import { NavLink } from "react-router-dom";

import "../css/Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<div className="main-navbar-container">
				<div className="navbar-logo-container">
					<h1 className="navbar-logo" style={{ margin: "0px", padding: "0px" }}>
						KBuild
					</h1>
				</div>
				<div className="navbar-navigation-links-container">
					<NavLink exact to="/" activeClassName="active" className="navbar-link">
						Home
					</NavLink>

					<NavLink exact to="/about" activeClassName="active" className="navbar-link">
						About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
