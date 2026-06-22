import { useState, useEffect } from "react";
import TopBar from "../../components/TopBar.jsx";

// const imageModulesBW = import.meta.glob('../../assets/collections/tennis/parks_black_white/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}');
// const imageModulesColor = import.meta.glob('../../assets/collections/tennis/parks_hazy_color/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}');
// const imageModulesSharp = import.meta.glob('../../assets/collections/tennis/parks_color_sharp/*.{jpg,JPG,jpeg,JPEG,png,PNG,svg,SVG}');

// const loadImages = async (modules) => {
//   const entries = await Promise.all(
//     Object.values(modules).map(fn => fn())
//   );
//   return entries.map(mod => mod.default);
// };

const TennisGallery = () => {
  // const [selectedSet, setSelectedSet] = useState('bw');
  // const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   setImages([]);
  //   const moduleMap = {
  //     bw: imageModulesBW,
  //     hazy: imageModulesColor,
  //     sharp: imageModulesSharp,
  //   };
  //   loadImages(moduleMap[selectedSet]).then(imgs => {
  //     setImages(imgs);
  //     setLoading(false);
  //   });
  // }, [selectedSet]);

  return (
    <div>
      {/* <TopBar backgroundColor={"black"} mobileBackground={"#333333"} mobileBorder={"2px solid #999999"} />
      <div className="gallery-item-flex gallery-flex-subpage">
        <div className="gallery-collection-choice">
          <div onClick={() => setSelectedSet('bw')} style={{ cursor: 'pointer', fontWeight: selectedSet === 'bw' ? 'bold' : 'normal' }}>
            Kodak TMax 400 B&W |
          </div>
          <div onClick={() => setSelectedSet('hazy')} style={{ cursor: 'pointer', fontWeight: selectedSet === 'hazy' ? 'bold' : 'normal' }}>
            Kodak Gold 100 |
          </div>
          <div onClick={() => setSelectedSet('sharp')} style={{ cursor: 'pointer', fontWeight: selectedSet === 'sharp' ? 'bold' : 'normal' }}>
            Kodak Gold 400
          </div>
        </div>

        {loading && <div>Loading...</div>}

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Photo ${index}`}
            className="bella-photo"
            loading="lazy"
          />
        ))}
      </div> */}
    </div>
  );
};

export default TennisGallery;
