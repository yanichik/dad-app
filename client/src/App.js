import { useEffect, useState } from "react";

import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
	const [activity, setActivity] = useState();
	const [activityInit, setActivityInit] = useState(false);

	useEffect(() => {
		async function fetchActivity() {
			const response = await axios({
				method: "GET",
				headers: [{ "content-type": "application/json" }],
				url: "/activities",
			});

			setActivity(response.data[0]);
		}

		if (!activityInit) {
			fetchActivity();
			setActivityInit(true);
		}
	}, [activity, activityInit]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					{/* Learn React {activity.name} */}
					Learn React {activity}
				</a>
			</header>
		</div>
	);
}

export default App;
