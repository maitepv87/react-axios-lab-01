import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const searchImages = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: {
        query: term,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
