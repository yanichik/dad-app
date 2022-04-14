import React, { useState, Fragment } from "react";
import AuthImg from "../assets/AuthImg";
import Throttle from "../components/UI/Throttle";

export default function Auth(props) {
	const [showLogin, setShowLogin] = useState(true);
	const submitHandler = (e) => {
		e.preventDefault();
	};
	const throttleLoginRegisterHandler = () => {
		setShowLogin((prevShowLogin) => {
			setShowLogin(!prevShowLogin);
		});
	};
	const loginDiv = (
		<div className="login">
			<div className="login_welcome">
				<h3>Hello Again!</h3>
				<form onSubmit={submitHandler}>
					<label>
						Username:
						<input type="text" name="name" />
					</label>
					<label>
						Password:
						<input type="password" name="password" />
					</label>
					<input type="submit" value="Submit" />
				</form>
				<Throttle
					showLeftThrottle={showLogin}
					onShowLeftThrottle={throttleLoginRegisterHandler}
					buttonNames={{ throttle_left: "Register", throttle_right: "Sign In" }}
					throttleClass="throttle_register_login"
				/>
			</div>
		</div>
	);
	return (
		<Fragment>
			<AuthImg />
			{showLogin && loginDiv}
			{/* {!showLogin && signupDiv} */}
		</Fragment>
	);
}

// For safe keeping
/* <div className="throttle_login_register">
<button
	onClick={throttleLoginRegisterHandler}
	className={showLogin ? "" : "throttle_register"}
	type="button"
>
	Register
</button>
<button
	onClick={throttleLoginRegisterHandler}
	className={showLogin ? "throttle_login" : ""}
	type="button"
>
	Sign In
</button>
</div> */
