import TopBar from "../../components/TopBar.jsx";
import { useCloudinaryFolder, getCloudinaryUrl } from "../../hooks/useCloudinaryFolder.js";

const Collections = ({ folder, altPrefix, photoClass = "polaroid-photo" }) => {
  const { images, loading } = useCloudinaryFolder([folder]);
  const currentImages = images[folder] ?? [];

  return (
    <div>
      <TopBar
        backgroundColor={"black"}
        mobileBackground={"#333333"}
        mobileBorder="#999999"
      />
      <div className="gallery-item-flex polaroid-flex">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner" />
          </div>
        ) : (
          currentImages.map(({ publicId }, index) => (
            <img
              key={index}
              src={getCloudinaryUrl(publicId)}
              alt={`${altPrefix} ${index}`}
              className={photoClass}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Collections;