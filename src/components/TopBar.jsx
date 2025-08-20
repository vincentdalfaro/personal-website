import { Link } from 'react-router-dom';
import LinkedinLogo from '../assets/logos/LinkedIn-logo.png'
import TennisLogo from "../assets/logos/tennis-logo.png"
import UseResponsive from '../hooks/UseResponsive';
import { useState } from 'react';
import Hamburger from 'hamburger-react'


const TopBar = ({backgroundColor, color}) => {

    const isSmall = UseResponsive(650)
    const isMobile = UseResponsive(451)
    const [hamburgerOpen, setHamburgerOpen] = useState(false) 


    return (
        <div>
            <div className="topbar-flex" style = {{backgroundColor: backgroundColor, color: color}}>
                
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
                        <Hamburger toggled={hamburgerOpen} toggle={setHamburgerOpen}/>

                        {hamburgerOpen && (
                            <div className='dropdown-menu'>
                                <Link to="/">Home</Link>
                                <Link to="/media">Media</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/professional">Professional</Link>
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

        </div>
    );
};

export default TopBar;
