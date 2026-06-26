import { useState } from "react";
import TopBar from "../../components/TopBar.jsx";
import { useCloudinaryFolder, getCloudinaryUrl } from "../../hooks/useCloudinaryFolder.js";
import React from "react";

const Media = ({ basePath, tabs, photoClass = "bella-photo", showCaptions = false }) => {
  const folders = tabs.map(tab => `${basePath}/${tab.key}`);
  const [selectedSet, setSelectedSet] = useState(tabs[0].key);
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const [switching, setSwitching] = useState(false);
  const { images, loading } = useCloudinaryFolder(folders);

  const currentImages = images[`${basePath}/${selectedSet}`] ?? [];

  const handleSetChange = (key) => {
    if (key === activeTab) return;
    setActiveTab(key);
    setSwitching(true);
    setTimeout(() => {
      setSelectedSet(key);
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
          {tabs.map((tab, i) => (
            <React.Fragment key={tab.key}>
                {i > 0 && <span>|</span>}
                <div
                onClick={() => handleSetChange(tab.key)}
                style={{ cursor: "pointer", fontWeight: activeTab === tab.key ? "bold" : "normal" }}
                >
                {tab.label}
                </div>
            </React.Fragment>
            ))}
        </div>

        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner" />
          </div>
        ) : (
          currentImages.map(({ publicId, displayName }, index) => {
            if (showCaptions) {
              const caption = displayName
                .split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
              return (
                <div className="caption-overlay-wrapper" key={index}>
                  <img src={getCloudinaryUrl(publicId)} alt={caption} className={photoClass} />
                  <div className="caption-overlay">{caption}</div>
                </div>
              );
            }

            return (
              <img
                key={index}
                src={getCloudinaryUrl(publicId)}
                alt={`Photo ${index}`}
                className={photoClass}
                loading="lazy"
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Media;