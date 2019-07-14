import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contacts extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="title">Contacts Page</h1>
				<div className="group-btn">
					<div className="box-btn">
						<Link to="/users">Prev</Link>
					</div>
					<div className="box-btn">
						<Link to="/">Next</Link>
					</div>
				</div>
			</div>
		);
	}
}
