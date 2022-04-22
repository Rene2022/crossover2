import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Tournament from './components/Tournament';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='App container'>
				<div className='ContentLeft'></div>
				<div className='ContentCenter'>
					<div className='Navbar'>
						<div className='Navbar-Left'>
							<Link to='/'>
								<img src='/images/logo.png' alt='logo' />
							</Link>
						</div>
						<div className='Navbar-Right'>
							<Link to='/'>Home</Link>
							<Link to='/about'>About</Link>
							<Link to='/tournament'>Tournament</Link>
							<Link to='/contact'>Contact</Link>
						</div>
					</div>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/tournament' element={<Tournament />} />
					</Routes>
				</div>
				<div className='ContentRight'></div>
			</div>
		</BrowserRouter>
	);
}

export default App;
