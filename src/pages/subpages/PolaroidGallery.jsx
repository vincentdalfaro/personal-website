import TopBar from "../../components/TopBar.jsx";


const imageModules = import.meta.glob('../../assets/polaroids/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG,heic,HEIC}', { eager: true });
const images = Object.values(imageModules).map(mod => mod.url || mod.default || mod);

const BirdGallery = () => {
    return (
        <div>
            <TopBar backgroundColor={"black"} />
            <div className="gallery-item-flex" style = {{gap: "0", paddingTop: "8vh"}}>
                {images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Polaroid ${index}`} 
                        className="polaroid-photo"
                    />
                ))}
            </div>
        </div>
    );
};

export default BirdGallery;