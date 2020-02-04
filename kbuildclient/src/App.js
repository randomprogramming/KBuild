import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import Navbar from "./components/Navbar";
import AdminPage from "./views/AdminPage";
import About from "./views/About";
import Contact from "./views/Contact";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/apiadminpage" component={AdminPage} />
			</Switch>
		</Router>
	);
};

export default App;
