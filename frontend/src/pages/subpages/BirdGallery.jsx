import { useState } from "react";
import TopBar from "../../components/TopBar.jsx";
import { useCloudinaryFolder, getCloudinaryUrl } from "../../hooks/useCloudinaryFolder.js";

const FOLDERS = [
  "personal_website/birds/pre2026",
  "personal_website/birds/2026",
];

const BirdGallery = () => {
  const [selectedSet, setSelectedSet] = useState("pre2026");
  const [activeTab, setActiveTab] = useState("pre2026");
  const [switching, setSwitching] = useState(false);
  const { images, loading } = useCloudinaryFolder(FOLDERS);

  const currentImages = images[
    selectedSet === "pre2026"
      ? "personal_website/birds/pre2026"
      : "personal_website/birds/2026"
  ] ?? [];

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
            onClick={() => handleSetChange("pre2026")}
            style={{ cursor: "pointer", fontWeight: activeTab === "pre2026" ? "bold" : "normal" }}
          >
            Pre-2026
          </div>
          |
          <div
            onClick={() => handleSetChange("2026")}
            style={{ cursor: "pointer", fontWeight: activeTab === "2026" ? "bold" : "normal" }}
          >
            2026
          </div>
        </div>

        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner" />
          </div>
        ) : (
          currentImages.map(({ publicId, displayName }, index) => {
            const caption = displayName
              .split('_')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (
              <div className="caption-overlay-wrapper" key={index}>
                <img src={getCloudinaryUrl(publicId)} alt={caption} className="bird-photo" />
                <div className="caption-overlay">{caption}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BirdGallery;