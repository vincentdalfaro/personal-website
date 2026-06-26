import { useState, useEffect } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export function getCloudinaryUrl(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${publicId}`;
}

export function useCloudinaryFolder(folders) {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const results = await Promise.all(
        folders.map((folder) =>
          fetch(`/api/cloudinary?folder=${folder}`).then((r) => r.json())
        )
      );
      const mapped = {};
      folders.forEach((folder, i) => {
        mapped[folder] = Array.isArray(results[i]) ? results[i] : [];
      });
      setImages(mapped);
      setLoading(false);
    }
    load();
  }, [JSON.stringify(folders)]);

  return { images, loading };
}