import { useState } from "react";
import TopBar from "../../components/TopBar.jsx";
import { useCloudinaryFolder, getCloudinaryUrl } from "../../hooks/useCloudinaryFolder.js";

const FOLDERS = [
  "personal_website/tennis/film",
  "personal_website/tennis/digital",
];

const TennisGallery = () => {
  const [selectedSet, setSelectedSet] = useState("film");
  const { images, loading } = useCloudinaryFolder(FOLDERS);

  const currentImages = images[`personal_website/tennis/${selectedSet}`] ?? [];

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
            onClick={() => setSelectedSet("film")}
            style={{ cursor: "pointer", fontWeight: selectedSet === "film" ? "bold" : "normal" }}
          >
            Film
          </div>
          |
          <div
            onClick={() => setSelectedSet("digital")}
            style={{ cursor: "pointer", fontWeight: selectedSet === "digital" ? "bold" : "normal" }}
          >
            Digital
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          currentImages.map((publicId, index) => (
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