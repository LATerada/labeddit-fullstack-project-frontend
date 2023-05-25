import axios from "axios";
import { BASE_URL } from "../constants/url";

const login = async (body) => {
  const response = await axios
    .post(`${BASE_URL}/users/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
  return response;
};

const signup = async (body) => {
  const response = await axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
  return response;
};

const logout = () => {
  localStorage.removeItem("token")
  return "user logged out"
}

const AuthService = { login, signup, logout };

export default AuthService;
