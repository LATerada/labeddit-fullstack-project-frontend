import axios from "axios";
import { BASE_URL } from "../constants/url";

const getPosts = async (headers) => {
  const response = await axios
    .get(`${BASE_URL}/posts`, headers)
    .then((response) => {
      console.log(response);
      return response.data.posts;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
  return response;
};

const createPost = async (headers,body) => {
  const response = await axios
    .post(`${BASE_URL}/posts`, body, headers)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
  return response;
};

const UserService = {
  getPosts,
  createPost
};

export default UserService;