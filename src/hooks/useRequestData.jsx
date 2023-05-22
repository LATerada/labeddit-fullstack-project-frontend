import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";

export const useRequestData = (initialState, path) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${path}`)
      .then((response) => {
        setIsLoading(false);
        path === "/?limit=30"
          ? setData(response.data.results)
          : setData(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        console.log(error.response.data);
      });
  }, [path]);

  return [data, isLoading, isLoaded, error];
};
