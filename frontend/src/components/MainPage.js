import {NavLink} from 'react-router-dom'
import React, { useRef } from 'react';
import '../styles/components/MainPage.css'; // import styles
import Grid from './Grid';
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

const MainPage = () => {
    const nextComponentRef = useRef(null);

    const scrollToNextComponent = () => {
        // Scrolls to the next component
        nextComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div>
        <div className="main-page-container">
            {/* <header className='header'>
        <nav className='nav-links'>
        <NavLink to='/' className='nav-link'>
            Home
        </NavLink>
        <NavLink to='about' className='nav-link'>
            About
        </NavLink>
        </nav>
    </header> */}
        <div className="main-page">
            <h1 className="company-name">Data Sovereignty Index</h1>
            <p  className="app-description">Our Data Sovereignty app is designed to help users understand and visualize data privacy concerns in the Top 20 Tech Companies.</p>
            <h2 className="team-title">Our Team</h2>
            <ul className="team-list">
            <li className="team-member">Sunveer Khunkhun - Developer</li>
            <li className="team-member">Thulasi Jothiravi - Developer</li>
            <li className="team-member">Harikrishan Singh - Developer</li>
            <li className="team-member">Yousif Jamal - Product Owner</li>
            </ul>
            <div className="arrow-down" onClick={scrollToNextComponent}>
                <BsFillArrowDownCircleFill size={35} color='#1A2B41'/>
                <i className="fas fa-chevron-down"></i>
            </div>
        </div>
        </div>
        <div ref={nextComponentRef} id="next-component">
            <Grid />
        </div>
    </div>
  );
};

export default MainPage;