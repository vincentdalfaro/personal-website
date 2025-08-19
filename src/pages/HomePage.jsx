import '../styles/App.css';
import '../styles/Home.css'
import TopBar from '../components/TopBar.jsx';
import Tree from "../assets/cover-photos/tree.jpg";
import TennisTime from "../assets/cover-photos/tennis-time.jpg";
import Bird from "../assets/cover-photos/bird.jpg";
import Sky from "../assets/cover-photos/sky.jpg";
import { useState, useEffect, useRef } from 'react';

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dividerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!dividerRef.current) return;

      const rect = dividerRef.current.getBoundingClientRect();
      const dividerTop = rect.top;

      // When the black bar reaches (or passes) the top of the viewport
      if (dividerTop <= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount
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

      <div className="general-flex-full">
        <div className="general-flex-main-row">
          <div className='general-flex-side' />

          <div className="general-flex-left">
            <div className="general-flex-text">
              <div className='general-flex-header'>Digital Design</div>
              <div className="general-text-body">
                I am a San Francisco based full-stack developer with a passion for my community and work.
                I am always open to meaningful collaborative projects as well as any opportunity to talk.
              </div>
              <div className="general-button">Contact me</div>
            </div>
          </div>

          <div className="general-flex-topbar" />
          <div className="general-flex-side" />
        </div>

        <div className="general-flex-bottom" />
      </div>

      <div className='horizontal-bar-black' />

      <div className='gallery-flex-large'>
        <div className='gallery-item-flex' style={{ paddingTop: "15vh" }}>
          <div className='gallery-item-image-box'>
            <div style={{ fontSize: "60px", color: "black" }}>
              Collections
            </div>
            <img src={TennisTime} className='gallery-item-image' />
            Tennis
          </div>

          <div className='gallery-item-image-box'>
            <img src={Bird} className='gallery-item-image' />
            Birds
          </div>

          <div className='gallery-item-image-box'>
            <img src={Sky} className='gallery-item-image' />
            Film
          </div>
        </div>
      </div>

      <div className='horizontal-bar-black' />

      <div style={{ width: "100%", height: "100vh", backgroundColor: "white" }} />
    </div>
  );
};

export default HomePage;
