import React from "react";
import ActivitiesNearby from "../components/Activities/ActivitiesNearby";
// import FindThingsNearYou from "../components/Activities/FindThingsNearYou";
// import AllTopics from "../components/Activities/AllTopics";

export default function Dashboard(props) {
	return (
		<React.Fragment>
			<p>Dashboard</p>
			<ActivitiesNearby activities={props.activities} />
			{/* <FindThingsNearYou /> */}
			{/* <AllTopics /> */}
		</React.Fragment>
	);
}
