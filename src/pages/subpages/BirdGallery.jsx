import TopBar from "../../components/TopBar.jsx";


const imageModules = import.meta.glob('../../assets/birds/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}', { eager: true });
const images = Object.values(imageModules).map(mod => mod.url || mod.default || mod);
console.log(images);

const BirdGallery = () => {
    return (
        <div>
            <TopBar backgroundColor={"black"} />
            <div className="gallery-item-flex gallery-flex-subpage">
                {images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Bird ${index}`} 
                        className="bird-photo"
                    />
                ))}
            </div>
        </div>
    );
};

export default BirdGallery;