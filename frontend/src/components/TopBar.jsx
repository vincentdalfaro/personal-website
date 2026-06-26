import { Link } from 'react-router-dom';
import LinkedinLogo from '../assets/logos/LinkedIn-logo.png'
import TennisLogo from "../assets/logos/tennis-logo.png"
import UseResponsive from '../hooks/UseResponsive';
import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
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

const isTransparent = (bg) => !bg || bg === 'transparent' || bg?.includes('rgba');

const TopBar = ({backgroundColor, color, mobileBackground, mobileBorder}) => {
  const isSmall = UseResponsive(650)
  const isMobile = UseResponsive(451)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 })
  const navItemRefs = useRef({})

  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
    const el = navItemRefs.current[label];
    if (el) {
      const rect = el.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 10,
        left: rect.left + rect.width / 2,
      });
    }
  };

  const activeNav = navLinks.find(n => n.label === activeDropdown);

  return (
    <div>
      <div className="topbar-flex" style={{ background: backgroundColor, color: color, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
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
          </div>
        ) : (
          <div className="topbar-links">
            {navLinks.map((nav) => (
              <div
                key={nav.label}
                ref={el => navItemRefs.current[nav.label] = el}
                className="topbar-nav-item"
                onMouseEnter={() => handleMouseEnter(nav.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={nav.path}>{nav.label}</Link>
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

      {isMobile && hamburgerOpen && createPortal(
        <div
          className='dropdown-menu'
          style={{
            background: backgroundColor,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/media">Media</Link>
          <Link to="/media/birds">— Birds</Link>
          <Link to="/media/tennis">— Tennis</Link>
          <Link to="/media/film">— Film</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/professional">Professional</Link>
        </div>,
        document.body
      )}

      {activeDropdown && activeNav?.sublinks.length > 0 && createPortal(
        <div
          className="topbar-subdropdown"
          style={{
            position: 'fixed',
            top: dropdownPos.top,
            left: dropdownPos.left,
            transform: 'translateX(-50%)',
            background: backgroundColor,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 99999,
          }}
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {activeNav.sublinks.map((sub, i) => (
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
        </div>,
        document.body
      )}
    </div>
  );
};

export default TopBar;