import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Homepage} />
			</Switch>
		</Router>
	);
};

export default App;
