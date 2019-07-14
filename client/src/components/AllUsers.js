import React, { Component } from "react";
import { Link } from "react-router-dom";
import { allUsers, removeAllUsers } from "../API";

export default class AllUsers extends Component {
	state = {
		users: []
	};

	componentDidMount() {
		allUsers().then(users => this.setState({ users }));
	}

	render() {
		const { users } = this.state;
		return (
			<div className="container">
				<h1 className="title">List all users</h1>
				<div className="group-btn">
					<div className="box-btn">
						<Link to="/">Prev</Link>
					</div>
					<div className="box-btn">
						<Link to="/contacts">Next</Link>
					</div>
				</div>
				<ul className="users-list">
					{users.length > 0 &&
						users.map(user => <li key={user._id}>{user.name}</li>)}
				</ul>
			</div>
		);
	}
}
