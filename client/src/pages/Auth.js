import React, { useState, Fragment, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import AuthImg from "../assets/AuthImg";
import Throttle from "../components/UI/Throttle";
import show_pw from "../assets/show_pw.png";
import hide_pw from "../assets/hide_pw.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Auth/login-button";
import LogoutButton from "../components/Auth/logout-button";
import SignupButton from "../components/Auth/signup-button";

export default function Auth(props) {
	const { isAuthenticated } = useAuth0();

	return (
		<Fragment>
			<AuthImg />
			<div className="auth_page">
				<div className="auth_welcome_msg">
					<h3 style={{ marginBottom: "0px" }}>Spend some quality</h3>
					<h3 className="dadtime">
						DadTime
						<span className="super">TM</span>
					</h3>
					<p>Join us to become a cool dad.</p>
				</div>
			</div>
			<div className="auth_buttons">
				<LoginButton />
				<SignupButton />
			</div>
		</Fragment>
	);
}
