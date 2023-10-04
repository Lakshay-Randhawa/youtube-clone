import axios from "axios";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/home/",
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const useFetchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
        setVideos(response.data.contents);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchVideos();

    return () => {};
  }, []);

  return { videos, isLoading, error };
};