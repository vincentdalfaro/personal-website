import TopBar from "../components/TopBar.jsx"
import TennisCover from "../assets/cover-photos/tennis-time.jpg"
import BirdsCover from "../assets/cover-photos/bird.jpg"
import FilmCover from "../assets/cover-photos/sky.jpg"
import PolaroidCover from "../assets/cover-photos/polaroid.jpg"
import PeopleCover from "../assets/cover-photos/people.jpg"
import BellaCover from "../assets/cover-photos/bella.jpg"
import VideoCover from "../assets/cover-photos/video.jpg"
import DigitalCover from "../assets/cover-photos/digital.jpg"
import '../styles/Media.css'

import { Link} from 'react-router-dom';

const MediaPage = () => {
    return (
        <div>
            <TopBar backgroundColor = {"black"} mobileBackground = {"#333333"} mobileBorder = {"2px solid #999999"}/>

            <div className="gallery-flex-full">
                <div style = {{fontSize: "70px", paddingBottom: "2vh"}}>
                    Galleries
                </div>

                <div className="gallery-item-flex">
                    <Link to="/media/tennis" className='gallery-item-image-box'>
                        <img src = {TennisCover} className='gallery-item-image'/>
                        Tennis
                    </Link>
        
                    <Link to="/media/birds" className='gallery-item-image-box'>
                        <img src = {BirdsCover} className='gallery-item-image'/>
                        Birds
                    </Link>
        
                    <Link to="/media/film" className='gallery-item-image-box'>
                        <img src = {FilmCover} className='gallery-item-image'/>
                        Film
                    </Link>
            
                    <Link to="/media/polaroids" className='gallery-item-image-box'>
                        <img src = {PolaroidCover} className='gallery-item-image'/>
                        Polaroids
                    </Link>
                    
                    <div className='gallery-item-image-box'>
                        <img src = {DigitalCover} className='gallery-item-image'/>
                        Digital
                    </div>

                    <div className='gallery-item-image-box'>
                        <img src = {PeopleCover} className='gallery-item-image'/>
                        People
                    </div>

                    <Link to="/media/bella" className='gallery-item-image-box'>
                        <img src = {BellaCover} className='gallery-item-image'/>
                        Bella
                    </Link>
                </div>  
            </div>

        </div>
    )

}

export default MediaPage