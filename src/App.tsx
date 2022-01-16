import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/detail/:idHospital'>
					<Detail />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
