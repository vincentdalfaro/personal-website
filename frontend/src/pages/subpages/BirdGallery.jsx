import { birdCaptions } from "../../data/BirdCaptions.jsx";
import { useState, useEffect } from "react";
import TopBar from "../../components/TopBar.jsx";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

async function fetchFolder(folder) {
  const res = await fetch(`/api/cloudinary?folder=${folder}`);
  const data = await res.json();
  return data;
}

function getCloudinaryUrl(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${publicId}`;
}

function renderBirdImage(publicId, index, birdCaptions) {
  const filename = publicId.split("/").pop() + ".jpg";
  const caption = birdCaptions[filename] || "Unknown Bird";

  return (
    <div className="caption-overlay-wrapper" key={index}>
      <img src={getCloudinaryUrl(publicId)} alt={caption} className="bird-photo" />
      <div className="caption-overlay">{caption}</div>
    </div>
  );
}

const BirdGallery = () => {
  const [selectedSet, setSelectedSet] = useState("pre2026");
  const [pre2026Images, setPre2026Images] = useState([]);
  const [_2026Images, set2026Images] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [pre, cur] = await Promise.all([
        fetchFolder("personal_website/birds/pre2026"),
        fetchFolder("personal_website/birds/2026"),
      ]);
      setPre2026Images(pre);
      set2026Images(cur);
      setLoading(false);
    }
    load();
  }, []);

  const images = selectedSet === "pre2026" ? pre2026Images : _2026Images;

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
          images.map((id, index) => renderBirdImage(id, index, birdCaptions))
        )}
      </div>
    </div>
  );
};

export default BirdGallery;