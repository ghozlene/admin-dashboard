import Sidebar from './components/sidebar/Sidebar';
import Toolbar from './components/toolbar/Toolbar';
import './App.css';
import Home from './pages/home/Home';
import User from './pages/users/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleUser from './pages/singleUser/SingleUser';
function App() {
	return (
		<Router>
			<Toolbar />
			<div className='container'>
				<Sidebar />
				<Routes>
					<Route exact path='/' element={<Home />} />

					<Route path='/users' element={<User />} />
					<Route path='/user/:userId' element={<SingleUser />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
