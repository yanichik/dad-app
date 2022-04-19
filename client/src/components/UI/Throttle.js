import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Auth/login-button";

export default function Throttle(props) {
	const throttleHandler = (e) => {
		// console.log(e.target.className);
		props.onShowLeftThrottle(e.target.className);
	};
	return (
		<Fragment>
			<div className={props.throttleClass}>
				<LoginButton />
				{/* <Link
					to={`/${props.buttonNames.throttle_left.toLowerCase()}`}
					onClick={throttleHandler}
					className={
						props.showLeftThrottle ? "throttle_left active" : "throttle_left"
					}
				>
					{props.buttonNames.throttle_left}
				</Link> */}
				<Link
					to={`/${props.buttonNames.throttle_right.toLowerCase()}`}
					onClick={throttleHandler}
					className={
						!props.showLeftThrottle ? "throttle_right active" : "throttle_right"
					}
				>
					{props.buttonNames.throttle_right}
				</Link>
			</div>
		</Fragment>
	);
}
