import '../styles/App.css';
import '../styles/Home.css'
import TopBar from '../components/TopBar.jsx';
import Tree from "../assets/cover-photos/tree.webp";
import TennisTime from "../assets/cover-photos/tennis-time.jpg";
import Bird from "../assets/cover-photos/bird.jpg";
import Sky from "../assets/cover-photos/sky.jpg";
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledBackground, setScrolledBackground] = useState(false)
  const dividerRef = useRef(null);
  const headerRef = useRef(null);


  useEffect(() => {
  const handleScroll = () => {
    if (!dividerRef.current || !headerRef.current) return;

    const dividerTop = dividerRef.current.getBoundingClientRect().top;
    const headerBottom = headerRef.current.getBoundingClientRect().bottom;

    const showBackground = dividerTop <= 0;
    const hideBackground = headerBottom <= window.innerHeight;

    // Original setScrolled logic
    if (dividerTop <= 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Background toggle logic
    if (showBackground && !hideBackground) {
      setScrolledBackground(prev => {
        if (!prev) console.log("✅ Background ON");
        return true;
      });
    } else {
      setScrolledBackground(prev => {
        if (prev) console.log("❌ Background OFF");
        return false;
      });
    }
  };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      <div className="home-one-container">
        <TopBar
          backgroundColor={scrolled ? "black" : "transparent"}
        />
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

      {/* Divider — tracked via ref */}
      <div className="horizontal-bar-black" ref={dividerRef} />

      <div className= {scrolledBackground ? "general-flex-full-mobile" : "general-flex-full"}>
        
        <div className="general-flex-main-row">
          <div className='general-flex-side' />
          <div className="general-flex-left">
            <div className="general-flex-text">
              <div className='general-flex-header'>Digital Design</div>
              <div className="general-text-body">
                I am a San Francisco based full-stack developer with a passion for my community and work.
                I am always open to meaningful collaborative projects as well as any opportunity to talk.
              </div>
              <div className="general-button" >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vdalfaro20@gmail.com" target="_blank">
                  Contact me
                </a>
              </div>
            </div>
          </div>

          <div className="general-flex-topbar" />
          <div className="general-flex-side" />
        </div>

        <div className="general-flex-bottom" />
      </div>

      <div className='horizontal-bar-black' />

      <div className='gallery-flex-large'>
        <div className='gallery-item-flex'>

          <div style={{ fontSize: "60px", color: "black" }}>
            Collections
          </div>

          <div style = {{display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "space-around"}}>
            <Link to = "/media/tennis" className='gallery-item-image-box'>
              <img src={TennisTime} className='gallery-item-image' />
              Tennis
            </Link>

            <Link to = "/media/birds" className='gallery-item-image-box'>
              <img src={Bird} className='gallery-item-image' />
              Birds
            </Link>

            <Link to = "/media/film" className='gallery-item-image-box'>
              <img src={Sky} className='gallery-item-image' />
              Film
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
