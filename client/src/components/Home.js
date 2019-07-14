import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../API";

export default class Home extends Component {
	state = {
		userName: "",
		isUserAdded: false,
		userWithSameName: false
	};

	onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

	onSubmit = e => {
		e.preventDefault();
		const { userName } = this.state;

		addUser(userName)
			.then(user => {
				if (user && user.name) {
					this.setState({
						isUserAdded: true,
						userWithSameName: false
					});
				}
			})
			.catch(error => {
				error && this.setState({ userWithSameName: true });
			});

		this.reset();
	};

	reset = () => {
		setTimeout(() => {
			this.setState({
				userName: "",
				isUserAdded: false
			});
		}, 1400);
	};

	render() {
		const { userWithSameName, isUserAdded, userName } = this.state;
		return (
			<div className="container">
				<h1 className="title">Home Page</h1>
				<div className="group-btn">
					<div className="box-btn">
						<Link to="/contacts">Prev</Link>
					</div>
					<div className="box-btn">
						<Link to="/users">Next</Link>
					</div>
				</div>
				<form className="form-add-user" onSubmit={this.onSubmit}>
					<input
						type="text"
						name="userName"
						value={userName}
						onChange={this.onChange}
					/>
					<button type="submit" className="btn-dark">
						Add user
					</button>
				</form>
				{isUserAdded && (
					<p className="text-center success">{userName} added successfully</p>
				)}
				{userWithSameName && (
					<p className="text-center error">Username already exists</p>
				)}
			</div>
		);
	}
}
