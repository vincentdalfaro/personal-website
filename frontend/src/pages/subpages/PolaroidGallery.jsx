import TopBar from "../../components/TopBar.jsx";
import { useCloudinaryFolder, getCloudinaryUrl } from "../../hooks/useCloudinaryFolder.js";

const FOLDERS = ["personal_website/polaroids"];

const PolaroidGallery = () => {
  const { images, loading } = useCloudinaryFolder(FOLDERS);
  const currentImages = images["personal_website/polaroids"] ?? [];

  return (
    <div>
      <TopBar
        backgroundColor={"black"}
        mobileBackground={"#333333"}
        mobileBorder="#999999"
      />
      <div className="gallery-item-flex">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner" />
          </div>
        ) : (
          currentImages.map(({ publicId }, index) => (
            <img
              key={index}
              src={getCloudinaryUrl(publicId)}
              alt={`Polaroid ${index}`}
              className="polaroid-photo"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PolaroidGallery;