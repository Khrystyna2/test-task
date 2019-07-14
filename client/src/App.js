import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import AllUsers from "./components/AllUsers";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";

export class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/users" component={AllUsers} />
					<Route path="/contacts" component={Contacts} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default App;
