import './styles/App.css';
import Grid from './components/Grid';
import { NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className='App' style={{textAlign: 'center'}}>
    <header className='header'>
        <nav className='nav-links'>
        <NavLink to='/' className='nav-link'>
            Home
        </NavLink>
        <NavLink to='about' className='nav-link'>
            About
        </NavLink>
        </nav>
    </header>
    <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/about' element={<AboutPage />} />
    </Routes>
</div>
  );
}

export default App;
