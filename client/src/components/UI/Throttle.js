import React, { Fragment } from "react";

export default function Throttle(props) {
	const throttleHandler = (e) => {
		// console.log(e.target.className);
		props.onShowLeftThrottle(e.target.className);
	};
	return (
		<Fragment>
			<div className={props.throttleClass}>
				<button
					onClick={throttleHandler}
					className={
						props.showLeftThrottle ? "throttle_left active" : "throttle_left"
					}
				>
					{props.buttonNames.throttle_left}
				</button>
				<button
					onClick={throttleHandler}
					className={
						!props.showLeftThrottle ? "throttle_right active" : "throttle_right"
					}
				>
					{props.buttonNames.throttle_right}
				</button>
			</div>
		</Fragment>
	);
}
