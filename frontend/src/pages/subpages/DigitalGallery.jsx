import TopBar from "../../components/TopBar.jsx";

// const imageModules2024 = import.meta.glob('../../assets/collections/digital/2024/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG,heic,HEIC}');
// const images2024 = Object.values(imageModules2024).map(mod => mod.url || mod.default || mod);
// const imageModulespre2024 = import.meta.glob('../../assets/collections/digital/pre-2024/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG,heic,HEIC}');
// const imagespre2024 = Object.values(imageModulespre2024).map(mod => mod.url || mod.default || mod);

const DigitalGallery = () => {
    return (
        <div>
            {/* <TopBar backgroundColor={"black"} mobileBackground = {"#333333"} mobileBorder = {"2px solid #999999"}/>
            
            <div className="gallery-item-flex gallery-flex-subpage">
                {images2024.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Polaroid ${index}`} 
                        className="bella-photo"
                    />
                ))}

                {imagespre2024.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Polaroid ${index}`} 
                        className="bella-photo"
                    />
                ))}

            </div> */}

        </div>
    );
};

export default DigitalGallery;