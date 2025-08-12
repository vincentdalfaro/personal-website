import '../App.css';
import TopBar from '../components/TopBar.jsx';
import Tree from "../assets/tree.jpg";
import TennisTime from "../assets/tennis-time.jpg"
import Bird from "../assets/bird.jpg"
import Sky from "../assets/sky.jpg"
import { useState } from 'react';

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <div className="photo-container">
        <TopBar />
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

      {/* Divider */}
      <div className="horizontal-bar-black" />

      <div className="general-flex-full">
        <div className="general-flex-main-row">
          
          <div className="general-flex-left">
            <div className="general-flex-text">
              <div style={{ fontSize: "60px" }}>Digital Design</div>

              <div className="general-text-body">
                I am a San Francisco based full-stack developer with a passion for my community and work.
                I am always open to meaningful collaborative projects as well as any opportunity to talk.
              </div>

              <div className="general-button">Contact me</div>
            </div>
          </div>

          <div className="general-flex-topbar" />
          <div className="general-flex-right" />
        </div>

        <div className="general-flex-bottom" />
      </div>

      <div className='horizontal-bar-black'/>

      <div className='gallery-flex-large'>
        <div style = {{fontSize: "60px", marginTop: "3%", marginLeft: "5%", color: "black"}}>
            Galleries
        </div>
        
        <div style = {{flexDirection: "row", columnGap: "3%", display: "flex", marginTop: "20px", marginLeft: "5%", marginBottom: "5%"}}>
          <div className='gallery-item-image-box'>
            <img src = {TennisTime} className='gallery-item-image'/>
            Tennis
          </div>

          <div className='gallery-item-image-box'>
            <img src = {Bird} className='gallery-item-image'/>
            Birds
          </div>

          <div className='gallery-item-image-box'>
            <img src = {Sky} className='gallery-item-image'/>
            Film
          </div>

        </div>  

      </div>

      <div className='horizontal-bar-black'/>

      <div style = {{width: "100%", height: "100vh", backgroundColor: "#c1b580"}}>

      </div>


    </div>
  );
};

export default HomePage;
