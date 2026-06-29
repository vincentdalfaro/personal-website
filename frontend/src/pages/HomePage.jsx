import '../styles/Media.css';
import '../styles/Home.css'
import TopBar from '../components/TopBar.jsx';
import Tree from "../assets/cover-photos/tree.webp";
import TennisTime from "../assets/cover-photos/tennis-time.jpg";
import Bird from "../assets/cover-photos/bird.jpg";
import Sky from "../assets/cover-photos/sky.jpg";
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TennisCourt from "../assets/cover-photos/bee.jpg";
import Polaroid from "../assets/cover-photos/polaroid.jpg"
import Digital from "../assets/cover-photos/digital.jpg"

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledBackground, setScrolledBackground] = useState(false);
  const dividerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!dividerRef.current || !headerRef.current) return;
      const dividerTop = dividerRef.current.getBoundingClientRect().top;
      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      const showBackground = dividerTop <= 0;
      const hideBackground = headerBottom <= window.innerHeight;
      setScrolled(dividerTop <= 70);
      if (showBackground && !hideBackground) {
        setScrolledBackground(true);
      } else {
        setScrolledBackground(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="home-hero">
        <TopBar backgroundColor={scrolled ? "black" : "transparent"} />
        <img src={Tree} className="home-hero-photo" alt="Tree" />
        <div
          className="home-hero-overlay"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Explore Projects
          {isHovered && (
            <div>
              <div className="divider-white" style={{ marginTop: "5px" }} />
              <div style={{ marginTop: "10px", cursor: "grab" }}>ItsTennisTime</div>
              <div style={{ marginTop: "10px", cursor: "grab" }}>Film Development</div>
            </div>
          )}
        </div>
      </div>

      <div className="divider-black" ref={dividerRef} />

      <div className={scrolledBackground ? "general-flex-full-mobile" : "home-about"} ref={headerRef}>
        <div className="home-about-row">

          <div className="home-about-left">
            <div className="home-about-text">
              <div className='home-about-heading'>Digital Design</div>
              <div className="home-about-body">
                I am a San Francisco–based full-stack developer and photographer with a passion for nonprofit work.
              </div>
              <div className="home-about-button">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vdalfaro20@gmail.com" target="_blank">
                  Contact me
                </a>
              </div>
            </div>
          </div>

          <div className="home-about-right-wrapper">
            <div className="home-frame-top" />
            <div className="home-frame-middle">
                <div className="home-frame-side-left" />
                <div className="home-frame-inner">
                    <img src={TennisCourt} className="home-frame-img" />
                </div>
                <div className="home-frame-side-right" />
            </div>
            <div className="home-frame-bottom" />
          </div>

        </div>
      </div>

      <div className='divider-black' />

      <div className='home-collections'>
        <img src={Sky} className='collections-bg-image' />
        <div className='collections-item-flex'>
          <div className='collections-header'>Collections</div>

          <Link to="/collections/polaroids" className='collections-image-box'>
            <img src={Polaroid} className='collection-item-image' />
            <div className='collections-subheader'> Polaroids </div>
          </Link>

          <Link to="/collections/digital" className='collections-image-box'>
            <img src={Digital} className='collection-item-image' />
            <div className='collections-subheader'> Digital </div>
          </Link>
        </div>
      </div>

      <div className='divider-black' />
    </div>
  );
};

export default HomePage;
