import { Link } from 'react-router-dom';
import LinkedinLogo from '../assets/LinkedIn-logo.png'
import TennisLogo from "../assets/tennis-logo.png"

const TopBar = () => {
    return (
        <div className="topbar-flex">

            <div className='topbar-h1'>Vincent Alfaro</div>

            <div className="topbar-links">
                <Link to="/media">Media</Link>
                <Link to="/Professional">Projects</Link>
                <Link to="/other">Professional</Link>
            </div>

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
