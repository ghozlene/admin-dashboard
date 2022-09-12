import Sidebar from './components/sidebar/Sidebar';
import Toolbar from './components/toolbar/Toolbar';
import './App.css';
function App() {
	return (
		<div>
			<Toolbar />
			<div className='container'>
				<Sidebar />
				<div className='others'> others pages</div>
			</div>
		</div>
	);
}

export default App;
