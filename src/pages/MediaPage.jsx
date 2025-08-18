import TopBar from "../components/TopBar.jsx"
import TennisTime from "../assets/tennis-time.jpg"
import Bird from "../assets/bird.jpg"
import Sky from "../assets/sky.jpg"


const MediaPage = () => {
    return (
        <div>
            <TopBar/>

            <div style={{
                display: "flex",
                color: "black",
                width: "100%",
                height: "100vh", // take full viewport height
                flexDirection: "column",
                paddingTop: "10vh",
                alignItems: "center",     // horizontal centering
                backgroundColor: "#dfddd7",
            }}>
                <div style = {{fontSize: "70px"}}>
                    Galleries
                </div>

                <div className="gallery-item-flex">
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
        </div>
    )

}

export default MediaPage