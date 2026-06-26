import { useState } from "react";
import TopBar from "../../components/TopBar.jsx";
import { useCloudinaryFolder, getCloudinaryUrl } from "../../hooks/useCloudinaryFolder.js";

const FOLDERS = [
  "personal_website/film/pre2025",
  "personal_website/film/2025",
  "personal_website/film/2026",
];

const FilmGallery = () => {
  const [selectedSet, setSelectedSet] = useState("pre2025");
  const [activeTab, setActiveTab] = useState("pre2025");
  const [switching, setSwitching] = useState(false);
  const { images, loading } = useCloudinaryFolder(FOLDERS);

  const currentImages = images[`personal_website/film/${selectedSet}`] ?? [];

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
            onClick={() => handleSetChange("pre2025")}
            style={{ cursor: "pointer", fontWeight: activeTab === "pre2025" ? "bold" : "normal" }}
          >
            Pre-2025
          </div>
          |
          <div
            onClick={() => handleSetChange("2025")}
            style={{ cursor: "pointer", fontWeight: activeTab === "2025" ? "bold" : "normal" }}
          >
            2025
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
          currentImages.map(({ publicId }, index) => (
          <img
            key={index}
            src={getCloudinaryUrl(publicId)}
            alt={`Film ${index}`}
            className="bella-photo"
          />
        ))
        )}
      </div>
    </div>
  );
};

export default FilmGallery;