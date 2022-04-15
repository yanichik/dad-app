import React, { useState, Fragment } from "react";
import AuthImg from "../assets/AuthImg";
import Throttle from "../components/UI/Throttle";

export default function Auth(props) {
	const [showLogin, setShowLogin] = useState(true);
	const submitHandler = (e) => {
		e.preventDefault();
	};
	const throttleLoginRegisterHandler = (input) => {
		if (input.includes("throttle_left")) {
			setShowLogin(true);
		} else {
			setShowLogin(false);
		}
	};
	const loginDiv = (
		<div className="auth_page">
			<div className="login_welcome">
				<h3>Hello Again!</h3>
				<p>Welcome back, you've been missed.</p>
			</div>
			<form className="login_signup_form" onSubmit={submitHandler}>
				<input type="email" name="email" placeholder="Email Address" />
				<input type="password" name="password" placeholder="Password" />
				<input type="submit" value="Submit" />
			</form>
			<Throttle
				showLeftThrottle={showLogin}
				onShowLeftThrottle={throttleLoginRegisterHandler}
				buttonNames={{ throttle_left: "Login", throttle_right: "Register" }}
				throttleClass="throttle_register_login"
			/>
		</div>
	);
	const signupDiv = (
		<div className="auth_page">
			<div className="signup_welcome">
				<h3>Welcome!</h3>
				<p>Join us to become a cool dad.</p>
			</div>
			<form className="login_signup_form" onSubmit={submitHandler}>
				<input type="email" name="email" placeholder="Email Address" />
				<input type="password" name="password" placeholder="Password" />
				<input type="password" name="password" placeholder="Password" />
				<input type="submit" value="Submit" />
			</form>
			<Throttle
				showLeftThrottle={showLogin}
				onShowLeftThrottle={throttleLoginRegisterHandler}
				buttonNames={{ throttle_left: "Login", throttle_right: "Register" }}
				throttleClass="throttle_register_login"
			/>
		</div>
	);
	return (
		<Fragment>
			<AuthImg />
			{showLogin && loginDiv}
			{!showLogin && signupDiv}
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
