// import React, { Fragment, useContext } from "react";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Profile from "../../pages/Profile";

const Navbar = () => {
	// const ctx = useContext(AuthContext);
	return (
		<Fragment>
			<header className="header">
				<div className="logo">Dad App</div>
				<nav className="nav">
					<ul>
						<li>
							{/* first link to take back to previous - need to figure out how to do this*/}
							{/* <NavLink to="/???" activeClassName="active">

						</NavLink> */}
							{/* <NavLink to="/favorites" activeClassName="active">
							Favorites Icon
						</NavLink> */}
						</li>
						{/* create search bar */}
						{/* <li>
						<SearchInput />
					</li> */}
						<li>
							{/* <NavLink to="/profile" activeClassName="active">
							<Profile />
						</NavLink> */}
						</li>
						{/* put here logout link with icon */}
						{/* <li>
						<NavLink to="/" activeClassName="active">
							<Logout />
						</NavLink>
					</li> */}
					</ul>
				</nav>
			</header>
		</Fragment>
	);
};

export default Navbar;
