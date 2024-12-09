import dotenv from "dotenv";

dotenv.config();

export const uploadFileToBackend = async (file) => {
  const NGROK_URL = process.env.NGROK_PUBLIC_URL;
  const formData = new FormData();
  formData.append("file", file);

  try {
    console.log("Sending request to backend...");
    const response = await fetch(`${NGROK_URL}/upload/`, {
      method: "POST",
      body: formData,
    });

    console.log("Response received:", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Upload failed:", errorData);
      throw new Error("File upload failed: " + response.statusText);
    }

    const data = await response.json();
    console.log("Upload successful:", data);
    return data; // Return backend response
  } catch (error) {
    console.error("Error uploading file:", error.message);
    throw error;
  }
};
