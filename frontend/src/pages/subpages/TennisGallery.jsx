import { useState } from "react";
import TopBar from "../../components/TopBar.jsx";
import { useCloudinaryFolder, getCloudinaryUrl } from "../../hooks/useCloudinaryFolder.js";

const FOLDERS = [
  "personal_website/tennis/film",
  "personal_website/tennis/digital",
];

const TennisGallery = () => {
  const [selectedSet, setSelectedSet] = useState("film");
  const [activeTab, setActiveTab] = useState("film");
  const [switching, setSwitching] = useState(false);
  const { images, loading } = useCloudinaryFolder(FOLDERS);

  const currentImages = images[`personal_website/tennis/${selectedSet}`] ?? [];

  const handleSetChange = (set) => {
    if (set === activeTab) return;
    setActiveTab(set);
    setSwitching(true);
    setTimeout(() => {
      setSelectedSet(set);
      setSwitching(false);
    }, 300);
  };

  const isLoading = loading || switching;

  return (
    <div>
      <TopBar
        backgroundColor={"black"}
        mobileBackground={"#333333"}
        mobileBorder="#999999"
      />
      <div className="gallery-item-flex gallery-flex-subpage">
        <div className="gallery-collection-choice">
          <div
            onClick={() => handleSetChange("film")}
            style={{ cursor: "pointer", fontWeight: activeTab === "film" ? "bold" : "normal" }}
          >
            Film
          </div>
          |
          <div
            onClick={() => handleSetChange("digital")}
            style={{ cursor: "pointer", fontWeight: activeTab === "digital" ? "bold" : "normal" }}
          >
            Digital
          </div>
        </div>

        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner" />
          </div>
        ) : (
          currentImages.map(({ publicId }, index) => (
            <img
              key={index}
              src={getCloudinaryUrl(publicId)}
              alt={`Tennis ${index}`}
              className="bella-photo"
              loading="lazy"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TennisGallery;