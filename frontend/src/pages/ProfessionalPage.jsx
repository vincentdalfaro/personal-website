import TopBar from "../components/TopBar"
import '../styles/Professional.css'

const ProfessionalPage = () => {
    
    return (
        <div>
            <TopBar backgroundColor="black" mobileBackground = {"#333333"} mobileBorder = {"2px solid #999999"}/>
            
            <div className="professional-flex-full">
                <div className="professional-flex-intro">
                    <div style = {{fontSize: "30px", fontWeight: "bold"}}>Professional</div>
                    <div>Learn about me.</div>
                </div>

                <div style = {{width: "100%", height: "1px", backgroundColor: "black"}}/>

            </div>
        </div>
    )
}

export default ProfessionalPage