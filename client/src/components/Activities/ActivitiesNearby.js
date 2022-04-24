import React, { Fragment } from "react";
import "./ActivitiesNearby.css";
export default function ActivitiesNearby(props) {
	const activities = [
		{
			activity: "pond_hockey",
			children_min: 1,
			parents_min: 1,
			description: "playing hockey on the pond",
			img: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
		},
		{
			activity: "freesbee",
			children_min: 1,
			parents_min: 1,
			description: "playing freesbee in the park",
			img: "https://images.unsplash.com/photo-1601831974284-7cba02cd2887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
		},
		{
			activity: "sea_world",
			children_min: 1,
			parents_min: 1,
			description: "visit sea world",
			img: "https://images.unsplash.com/photo-1522432601293-65a2fdbd86c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		},
		{
			activity: "basketball",
			children_min: 1,
			parents_min: 1,
			description: "watch a basketball game",
			img: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		},
		{
			activity: "watch_baseball",
			children_min: 1,
			parents_min: 1,
			description: "watch a baseball game",
			img: "https://images.unsplash.com/photo-1529768167801-9173d94c2a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		},
	];
	return (
		<Fragment>
			<div className="dashboard">
				<div className="activities_title">Activities Nearby</div>
        <br />
				<div className="activities_nearby">
					{activities.map((activity) => {
						return (
							<div className='activity_card'>
								<img src={activity.img} alt={activity.activity} />
								<p>{activity.children_min}</p>
								<p>{activity.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
}
