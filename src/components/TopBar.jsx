import { Link } from 'react-router-dom';
import LinkedinLogo from '../assets/LinkedIn-logo.png'
import TennisLogo from "../assets/tennis-logo.png"
import UseResponsive from '../hooks/UseResponsive';
import { useState } from 'react';


const TopBar = (backgroundColor) => {

    const isSmall = UseResponsive(650)
    const isMobile = UseResponsive(450)
    const [hamburgerOpen, setHamburgerOpen] = useState(false) 
    
    const hamburgerClick = () => {
        setHamburgerOpen(prev => !prev);
    };


    return (
        <div className="topbar-flex">

            <div className='topbar-h1'>
                {isMobile ? (
                    null
                    ) : isSmall ? (
                    <Link to="/">VA</Link>
                    ) : (
                    <Link to="/">Vincent Alfaro</Link>
                )}
            </div>

            {isMobile ? (
                <div className='topbar-links'>
                    <div className="hamburger-icon" onClick={hamburgerClick}>
                        <span/><span/><span/>
                    </div>

                    {hamburgerOpen && (
                        <div className="dropdown-menu">
                            <Link to="/media">Media</Link>
                            <Link to="/Professional">Projects</Link>
                            <Link to="/other">Professional</Link>
                        </div>
                    )}

                </div>
            ) : (
                <div className="topbar-links">
                    <Link to="/media">Media</Link>
                    <Link to="/Professional">Projects</Link>
                    <Link to="/other">Professional</Link>
                </div>
            )}


            <Link 
                to="https://www.linkedin.com/in/vincent-alfaro-64a31126a"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={LinkedinLogo} className='topbar-logo' />
            </Link>

            <Link 
                to="https://www.itstennistime.org"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={TennisLogo} className='topbar-logo' />
            </Link>

            
        </div>
    );
};

export default TopBar;
