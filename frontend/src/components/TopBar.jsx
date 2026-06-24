import { Link } from 'react-router-dom';
import LinkedinLogo from '../assets/logos/LinkedIn-logo.png'
import TennisLogo from "../assets/logos/tennis-logo.png"
import UseResponsive from '../hooks/UseResponsive';
import { useState } from 'react';
import Hamburger from 'hamburger-react'
import '../styles/TopBar.css';

const navLinks = [
  {
    label: 'Media',
    path: '/media',
    sublinks: [
      { label: 'Birds', path: '/media/birds' },
      { label: 'Tennis', path: '/media/tennis' },
      { label: 'Film', path: '/media/film' },
    ]
  },
  {
    label: 'Projects',
    path: '/projects',
    sublinks: [
       { label: 'Gender Equity', path: '/' },
      { label: 'Tennis Time', path: '/' },
    ]
  },
  {
    label: 'Professional',
    path: '/professional',
    sublinks: []
  },
];

const TopBar = ({backgroundColor, color, mobileBackground, mobileBorder}) => {
  const isSmall = UseResponsive(650)
  const isMobile = UseResponsive(451)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  

  return (
    <div>
      <div className="topbar-flex" style={{ background: backgroundColor, color: color }}>
        <div className='topbar-h1'>
          {isMobile ? null : isSmall ? (
            <Link to="/">VA</Link>
          ) : (
            <Link to="/">Vincent Alfaro</Link>
          )}
        </div>

        {isMobile ? (
          <div className='topbar-links'>
            <Hamburger toggled={hamburgerOpen} toggle={setHamburgerOpen} />
            {hamburgerOpen && (
              <div className='dropdown-menu' style={{ backgroundColor: mobileBackground, border: `2px solid ${mobileBorder}` }}>
                <Link to="/">Home</Link>
                <Link to="/media">Media</Link>
                <Link to="/media/birds">— Birds</Link>
                <Link to="/media/tennis">— Tennis</Link>
                <Link to="/media/film">— Film</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/professional">Professional</Link>
              </div>
            )}
          </div>
        ) : (
          <div className="topbar-links">
            {navLinks.map((nav) => (
              <div
                key={nav.label}
                className="topbar-nav-item"
                onMouseEnter={() => setActiveDropdown(nav.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={nav.path}>{nav.label}</Link>
                {nav.sublinks.length > 0 && activeDropdown === nav.label && (
                <div className="topbar-subdropdown" style={{ background: backgroundColor }}>
                    {nav.sublinks.map((sub, i) => (
                    <Link
                        key={sub.label}
                        to={sub.path}
                        style={{
                        border: `1px solid ${mobileBorder || 'white'}`,
                        borderTop: i === 0 ? `1px solid ${mobileBorder || 'white'}` : 'none'
                        }}
                    >
                        {sub.label}
                    </Link>
                    ))}
                </div>
                )}
              </div>
            ))}
          </div>
        )}

        <Link to="https://www.linkedin.com/in/vincent-alfaro-64a31126a" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinLogo} className='topbar-logo' />
        </Link>
        <Link to="https://www.itstennistime.org" target="_blank" rel="noopener noreferrer">
          <img src={TennisLogo} className='topbar-logo' />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;