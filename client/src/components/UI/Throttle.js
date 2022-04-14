import React, { Fragment } from "react";

export default function Throttle(props) {
	const throttleHandler = () => {
		props.onShowLeftThrottle();
	};
	return (
		<Fragment>
			<div className={props.throttleClass}>
				<button
					onClick={throttleHandler}
					className={props.showLeftThrottle ? "throttle_left" : ""}
				>
					{props.buttonNames.throttle_left}
				</button>
				<button
					onClick={throttleHandler}
					className={!props.showLeftThrottle ? "throttle_right" : ""}
				>
					{props.buttonNames.throttle_right}
				</button>
			</div>
		</Fragment>
	);
}
