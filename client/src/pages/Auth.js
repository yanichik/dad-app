import React, { useState, Fragment, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import AuthImg from "../assets/AuthImg";
import Throttle from "../components/UI/Throttle";
import show_pw from "../assets/show_pw.png";
import hide_pw from "../assets/hide_pw.png";

export default function Auth(props) {
	const [showLogin, setShowLogin] = useState(true);
	const [showPw, setShowPw] = useState(false);
	// const [pw1, setPw1] = useState("");
	// const [pw2, setPw2] = useState("");

	const showPwHandler = () => {
		setShowPw((prev) => !prev);
	};

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
				<input
					type="email"
					name="email"
					placeholder="Email Address"
					defaultValue=""
				/>
				<input
					type={showPw ? "text" : "password"}
					name="password"
					placeholder="Password"
					defaultValue=""
				/>
				<input type="submit" value="Submit" className="auth_submit" />
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
				<div className="pw_container">
					<input
						type={showPw ? "text" : "password"}
						name="password"
						placeholder="Password"
						defaultValue=""
					/>
					<img
						onClick={showPwHandler}
						src={showPw ? show_pw : hide_pw}
						alt="Show/Hide PW"
					/>
				</div>
				<input
					type="password"
					name="password"
					placeholder="Password"
					defaultValue=""
				/>
				<input type="submit" value="Submit" className="auth_submit" />
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
			<Routes>
				<Route path="/" element={loginDiv} />
				<Route path="/login" element={loginDiv} />
				<Route path="/register" element={signupDiv} />
			</Routes>
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
