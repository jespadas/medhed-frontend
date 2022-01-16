import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/deail/:id'>
					<Detail />
				</Route>
			</Switch>
		</Router>
	);
}

export default AppRouter;
