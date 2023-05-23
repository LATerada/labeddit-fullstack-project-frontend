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
  console.log("chegou aqui")
  const response = await axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      console.log(response);
      console.log("setou o token")
      return response;
    })
    .catch((error) => {
      console.log("trouxe algum erro do back")
      console.log(error.response);
      return error.response;
    });
  return response;
};

const AuthService = { login, signup };

export default AuthService;
