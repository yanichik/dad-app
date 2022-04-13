import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Activities from "./pages/Activities";
import ActivityFeed from "./pages/ActivityFeed";
import Profile from "./pages/Profile";
import Donate from "./pages/Donate";

function App() {
	return (
		<Fragment>
			<Routes>
				{/* "/" path conditional -> goes to login when user is logged out. goes to dashboard IF logged in */}
				<Route exact path="/" element={<Login />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
			</Routes>
			<Layout>
				<Routes>
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/activities" element={<Activities />} />
					<Route exact path="/activityfeed" element={<ActivityFeed />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/donate" element={<Donate />} />
				</Routes>
			</Layout>
		</Fragment>
	);
}

export default App;
