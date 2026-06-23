export default async function handler(req, res) {
  const { folder } = req.query;

  if (!folder) {
    return res.status(400).json({ error: "folder param required" });
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?asset_folder=${folder}&max_results=500`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: "Cloudinary request failed", details: data });
    }

    const publicIds = data.resources
    .filter((resource) => resource.asset_folder === folder)
    .map((resource) => resource.public_id);

    return res.status(200).json(publicIds);

  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    return res.status(500).json({ error: "Server error", details: error.message });
  }
}