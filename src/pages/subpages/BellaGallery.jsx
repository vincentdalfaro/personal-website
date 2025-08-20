import TopBar from "../../components/TopBar.jsx";


const imageModules = import.meta.glob('../../assets/bella/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG,heic,HEIC}', { eager: true });
const images = Object.values(imageModules).map(mod => mod.url || mod.default || mod);

const BellaGallery = () => {
    return (
        <div>
            <TopBar backgroundColor={"black"} />
            <div className="gallery-item-flex gallery-flex-subpage">
                {images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Polaroud ${index}`} 
                        className="bella-photo"
                    />
                ))}
            </div>
        </div>
    );
};

export default BellaGallery;