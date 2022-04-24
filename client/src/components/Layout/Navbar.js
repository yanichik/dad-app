// import React, { Fragment, useContext } from "react";
import React, { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Profile from "../../pages/Profile";
import LogoutButton from "../Auth/logout-button";
import hamburger from "../../assets/hamburger.png";
import closeX from "../../assets/closeX.png";
import back_arrow from "../../assets/back_arrow.png";

import "./Navbar.css";
const Navbar = () => {
	// const ctx = useContext(AuthContext);
	const navigate = useNavigate();
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	const closeMenu = () => {
		setNavbarOpen(false);
	};
	const backOneHandler = () => {
		navigate(-1);
	};
	return (
		<Fragment>
			<header className="header">
				<div>
					{/*TODO: make NavLink dynamic to always go back to previous screen*/}
					<div>
						<img
							onClick={backOneHandler}
							className="back_arrow"
							src={back_arrow}
							alt="Navigate Back One"
						/>
					</div>
				</div>
				<div>
					<input type="text" />
				</div>
				<nav>
					<button onClick={handleToggle}>
						{navbarOpen ? (
							<img className="hamburger" src={closeX} alt="Close Hamburger" />
						) : (
							<img className="hamburger" src={hamburger} alt="Hamburger Menu" />
						)}
					</button>
					<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
						<li>
							<NavLink
								to="/favorites"
								activeClassName="active"
								onClick={() => closeMenu()}
								exact
							>
								Favorites
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/profile"
								activeClassName="active"
								onClick={() => closeMenu()}
								exact
							>
								<Profile />
							</NavLink>
						</li>
						<li>
							<LogoutButton>Logout</LogoutButton>
						</li>
					</ul>
				</nav>
			</header>
		</Fragment>
	);
};

export default Navbar;
