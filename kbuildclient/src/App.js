import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import Navbar from "./components/Navbar";
import AdminPage from "./views/AdminPage";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/api/adminpage" component={AdminPage} />
			</Switch>
		</Router>
	);
};

export default App;
