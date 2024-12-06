export const uploadFileToBackend = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    console.log("Sending request to backend...");
    const response = await fetch("https://676b-14-169-4-187.ngrok-free.app/upload/", {
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
