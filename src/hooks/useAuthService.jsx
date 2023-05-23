import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import { goToFeedPage } from "../routes/coordinator";

export const useAuthService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const authService = (body, path) => {
    setIsLoading(true);
    const data =  axios
      .post(`${BASE_URL}${path}`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToFeedPage(navigate);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
      return data
  };
  return [isLoading, authService];
};
