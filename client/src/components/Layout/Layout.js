import { Fragment, useContext } from "react";
import Navbar from "./Navbar";
import Auth from "../../pages/Auth";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Auth/logout-button";

const Layout = (props) => {
	const { isAuthenticated, isLoading } = useAuth0();
	if (isLoading) {
		return <div>Loading ...</div>;
	}
	return (
		<Fragment>
			<main>
				{isAuthenticated ? (
					<div>
						<p style={{ fontSize: "10px", margin: "0px" }}>Logged In!</p>
						<LogoutButton />
					</div>
				) : (
					<p style={{ fontSize: "10px", margin: "0px" }}>Logged Out!</p>
				)}
				{isAuthenticated && <Navbar />}
				{/* {!isAuthenticated && <Auth />} */}
				{props.children}
			</main>
		</Fragment>
	);
};

export default Layout;
