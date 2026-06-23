import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from "../components/TopBar.jsx";
import TennisCover from "../assets/cover-photos/tennis-time.jpg";
import BirdsCover from "../assets/cover-photos/bird.jpg";
import FilmCover from "../assets/cover-photos/sky.jpg";
import ArrowRight from "../assets/logos/arrow-right.png"
import ArrowLeft from "../assets/logos/arrow-left.png"
import ArrowUp from "../assets/logos/arrow-up.png"
import ArrowDown from "../assets/logos/arrow-down.png"
import useResponsive from '../hooks/UseResponsive.jsx';

import '../styles/Media.css';

const sections = [
  {
    image: BirdsCover,
    title: "Birds",
    link: "/media/birds",
    description: `During the start of the COVID-19 pandemic in 2020, I moved 
    to a quiet San Francisco. The 
    birds continued to congregate, chirp, and chatter.`
  },
  {
    image: TennisCover,
    title: "Tennis Time",
    link: "/media/tennis",
    description: `An ode to tennis in San Francisco — and a real tool to find 
    a court.`
  },
  {
    image: FilmCover,
    title: "Film",
    link: "/media/film",
    description: ``
  },
];

const MediaPage = () => {

  const isSmallScreen = useResponsive(1000)
  const scrollRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        if (window.innerWidth <= 1000) {
          const slideHeight = scrollRef.current.firstElementChild.offsetHeight;
          scrollRef.current.scrollTo({ top: currentIndex * slideHeight, left: 0, behavior: 'instant' });
        } else {
          scrollRef.current.scrollTo({ left: currentIndex * window.innerWidth, top: 0, behavior: 'instant' });
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const scrollToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1));
    if (scrollRef.current) {
      if (isSmallScreen) {
        const slideHeight = scrollRef.current.firstElementChild.offsetHeight;
        scrollRef.current.scrollBy({ top: slideHeight, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    if (scrollRef.current) {
      if (isSmallScreen) {
        const slideHeight = scrollRef.current.firstElementChild.offsetHeight;
        scrollRef.current.scrollBy({ top: -slideHeight, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      <TopBar
        backgroundColor="black"
        mobileBackground="#333333"
        mobileBorder="2px solid #999999"
      />

      <div
        className="horizontal-scroll-container"
        ref={scrollRef}
        role="region"
      >
        {sections.map((section, index) => (
          <div className="gallery-flex-full" key={index}>

            {index > 0 && (
              <button className="next-button" onClick={scrollToPrev}>
                {isSmallScreen ? 
                    <img src={ArrowUp} style={{ width: "20px" }} alt="Scroll Up" /> 
                    : <img src={ArrowLeft} style={{ width: "20px" }} alt="Scroll Left" />
                }
              </button>
            )}

            <div className="gallery-left">
              <Link to={section.link}>
                <img
                  src={section.image}
                  className="gallery-cover"
                  alt={`${section.title} Cover`}
                />
              </Link>
            </div>

            <div className="gallery-right">
                <h1 className="media-header">{section.title}</h1>
                <p className="media-page-description">{section.description}</p>
            </div>

            {index < sections.length - 1 && (
              <button className="next-button" onClick={scrollToNext}>
                {isSmallScreen ? 
                    <img src={ArrowDown} style={{ width: "20px" }} alt="Scroll Down" /> 
                    : <img src={ArrowRight} style={{ width: "20px" }} alt="Scroll Right" />
                }
              </button>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;