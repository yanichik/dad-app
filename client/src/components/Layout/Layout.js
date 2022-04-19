import { Fragment, useContext } from "react";
import Navbar from "./Navbar";
import Auth from "../../pages/Auth";
import AuthContext from "../../store/auth-context";
import { useAuth0 } from "@auth0/auth0-react";

const Layout = (props) => {
	const { isAuthenticated } = useAuth0();
	const ctx = useContext(AuthContext);
	return (
		<Fragment>
			<main>
				{isAuthenticated && <p>Logged In!</p>}
				{ctx.isLoggedIn && <Navbar />}
				{!ctx.isLoggedIn && <Auth />}
				{props.children}
			</main>
		</Fragment>
	);
};

export default Layout;
