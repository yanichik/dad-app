import { Fragment, useContext } from "react";
import Navbar from "./Navbar";
import Auth from "../../pages/Auth";
import AuthContext from "../../store/auth-context";

const Layout = (props) => {
	const ctx = useContext(AuthContext);
	return (
		<Fragment>
			{ctx.isLoggedIn && <Navbar />}
			{!ctx.isLoggedIn && <Auth />}
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
