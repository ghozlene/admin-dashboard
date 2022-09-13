import Sidebar from './components/sidebar/Sidebar';
import Toolbar from './components/toolbar/Toolbar';
import './App.css';
import Home from './pages/home/Home';
import User from './pages/users/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleUser from './pages/singleUser/SingleUser';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/products/ProductList';
function App() {
	return (
		<Router>
			<Toolbar />
			<div className='container'>
				<Sidebar />
				<Routes>
					<Route exact path='/' element={<Home />} />

					<Route path='/users' element={<User />} />
					<Route path='/products' element={<ProductList />} />
					<Route path='/product/:productId' element={<ProductList />} />
					<Route path='/new-product' element={<ProductList />} />
					<Route path='/user/:userId' element={<SingleUser />} />
					<Route path='/new-user' element={<NewUser />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
