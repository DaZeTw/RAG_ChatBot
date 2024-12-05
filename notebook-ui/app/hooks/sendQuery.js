export const sendQueryToBackend = async (query) => {
  const formData = new FormData();
  formData.append("query", query);

  try {
    console.log("Sending query to backend...");
    const response = await fetch("http://localhost:8000/query/", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Query failed:", errorData);
      throw new Error("Query failed: " + response.statusText);
    }

    const data = await response.json();
    console.log("Query result:", data);
    return data; // Backend response
  } catch (error) {
    console.error("Error sending query:", error);
    throw error;
  }
};
