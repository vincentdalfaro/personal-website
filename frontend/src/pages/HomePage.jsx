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
      <div className="home-one-container">
        <TopBar backgroundColor={scrolled ? "black" : "transparent"} />
        <img src={Tree} className="my-photo" alt="Tree" />
        <div
          className="overlay-text"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Explore Projects
          {isHovered && (
            <div>
              <div className="horizontal-bar-white" style={{ marginTop: "5px" }} />
              <div style={{ marginTop: "10px", cursor: "grab" }}>ItsTennisTime</div>
              <div style={{ marginTop: "10px", cursor: "grab" }}>Film Development</div>
            </div>
          )}
        </div>
      </div>

      <div className="horizontal-bar-black" ref={dividerRef} />

      <div className={scrolledBackground ? "general-flex-full-mobile" : "general-flex-full"} ref={headerRef}>
        <div className="general-flex-main-row">

          <div className="general-flex-left">
            <div className="general-flex-text">
              <div className='general-flex-header'>Digital Design</div>
              <div className="general-text-body">
                I am a San Francisco–based full-stack developer and photographer with a passion for nonprofit work.
              </div>
              <div className="general-button">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vdalfaro20@gmail.com" target="_blank">
                  Contact me
                </a>
              </div>
            </div>
          </div>

          <div className="general-flex-right-wrapper">
            <div className="general-frame-top" />
            <div className="general-frame-middle">
                <div className="general-frame-side-left" />
                <div className="general-flex-right">
                    <img src={TennisCourt} className="general-frame-img" />
                </div>
                <div className="general-frame-side-right" />
            </div>
            <div className="general-frame-bottom" />
          </div>

        </div>
      </div>

      <div className='horizontal-bar-black' />

      <div className='gallery-flex-large'>
        <img src={Sky} className='gallery-bg-image' />
        <div className='gallery-item-flex'>
          <div>
            <Link to="/collections/polaroids" className='gallery-item-image-box'>
              <img src={Polaroid} className='gallery-item-image' />
              Polaroids
            </Link>
          </div>

          <div>
            <Link to="/collections/digital" className='gallery-item-image-box'>
              <img src={Polaroid} className='gallery-item-image' />
              Digtial
            </Link>
          </div>

        </div>
      </div>

      <div className='horizontal-bar-black' />
      <div style={{ width: "100%", height: "100vh", backgroundColor: "white" }} />
    </div>
  );
};

export default HomePage;