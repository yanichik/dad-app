import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import ErrorPage from "./pages/ErrorPage";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AuthContext from "./store/auth-context";
import Profile from "./pages/Profile";

function App() {
	const [activities, setActivities] = useState([]);
	const [activitiesFetched, setActivitiesFetched] = useState(false);
	const { isAuthenticated } = useAuth0();
	useEffect(() => {
		if (!activitiesFetched) {
			async function fetchActivities() {
				const response = await axios({
					method: "GET",
					url: `${process.env.REACT_APP_APIHOST}/api/activities`,
					headers: { "content-format": "application/json" },
				});

				setActivities(response.data);
			}

			fetchActivities();
			setActivitiesFetched(true);
		}
	}, [activitiesFetched]);

	let status = "Loading ...";
	if (!!activities) status = `${activities.length} activities found.`;

	return (
		<AuthContext.Provider value={{ isLoggedIn: false }}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route
							path="/"
							element={
								isAuthenticated ? (
									<Navigate replace to="/dashboard" />
								) : (
									<Auth />
								)
							}
						></Route>
						<Route path="/dashboard" element={<Dashboard />}>
							
						</Route>
						<Route path="/favorites" element={<p>Favorites</p>}></Route>
						<Route path="/profile" element={<Profile />}></Route>
						<Route path="*" element={<ErrorPage />}></Route>
					</Routes>
				</Layout>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
