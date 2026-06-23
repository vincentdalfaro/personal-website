import { birdCaptions } from "../../data/BirdCaptions.jsx";
import { useState } from "react";
import TopBar from "../../components/TopBar.jsx";
import { useCloudinaryFolder, getCloudinaryUrl } from "../../hooks/useCloudinaryFolder.js";

const FOLDERS = [
  "personal_website/birds/pre2026",
  "personal_website/birds/2026",
];

const BirdGallery = () => {
  const [selectedSet, setSelectedSet] = useState("pre2026");
  const { images, loading } = useCloudinaryFolder(FOLDERS);

  const currentImages = images[
    selectedSet === "pre2026"
      ? "personal_website/birds/pre2026"
      : "personal_website/birds/2026"
  ] ?? [];

  return (
    <div>
      <TopBar
        backgroundColor={"black"}
        mobileBackground={"#333333"}
        mobileBorder={"2px solid #999999"}
      />
      <div className="gallery-item-flex gallery-flex-subpage">
        <div className="gallery-collection-choice">
          <div
            onClick={() => setSelectedSet("pre2026")}
            style={{ cursor: "pointer", fontWeight: selectedSet === "pre2026" ? "bold" : "normal" }}
          >
            Pre-2026
          </div>
          |
          <div
            onClick={() => setSelectedSet("2026")}
            style={{ cursor: "pointer", fontWeight: selectedSet === "2026" ? "bold" : "normal" }}
          >
            2026
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          currentImages.map((publicId, index) => {
            const filename = publicId.split("/").pop() + ".jpg";
            const caption = birdCaptions[filename] || "Unknown Bird";
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