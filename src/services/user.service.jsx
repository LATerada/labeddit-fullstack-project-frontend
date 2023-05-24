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

const createPost = async (headers, body) => {
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

const likeOrDislikePost = async (headers, body, id) => {
  const response = await axios
    .put(`${BASE_URL}/posts/${id}/like`, body, headers)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
  return response;
};

const getCommentsByPostId = async (headers, id) => {
  const response = await axios
    .get(`${BASE_URL}/comments/${id}`, headers)
    .then((response) => {
      console.log(response);
      return response.data.comments;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
  return response;
};

const createComment = async (headers, body, id) => {
  const response = await axios
    .post(`${BASE_URL}/comments/${id}`, body, headers)
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

const likeOrDislikeComment = async (headers, body, id) => {
  const response = await axios
    .put(`${BASE_URL}/comments/${id}/like`, body, headers)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
  return response;
};

const UserService = {
  getPosts,
  createPost,
  likeOrDislikePost,
  getCommentsByPostId,
  createComment,
  likeOrDislikeComment,
};

export default UserService;
