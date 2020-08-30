import {
  FETCH_POSTS,
  NEW_POST,
  DELETE_POST,
  RESET_POSTS,
  SEARCH_POSTS,
} from './types';
import axios from 'axios';

const url = 'http://dev.api.droov.io/play/posts';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const fetchPosts = () => async (dispatch) => {
  const posts = await axios.get(url, config).then((response) => response.data);

  dispatch({
    type: FETCH_POSTS,
    payload: posts,
  });
};

export const resetPosts = () => async (dispatch) => {
  const posts = await axios
    .get(`${url}/reset`, config)
    .then((response) => response.data);

  dispatch({
    type: RESET_POSTS,
    payload: posts,
  });
};

export const deletePost = (id) => async (dispatch) => {
  const posts = await axios
    .delete(`${url}/${id}`, config)
    .then((response) => response.data);

  dispatch({
    type: DELETE_POST,
    payload: posts,
  });
};

export const createPost = (postData) => async (dispatch) => {
  const post = await axios
    .post(`${url}/add`, postData, config)
    .then((response) => response.data);

  dispatch({
    type: NEW_POST,
    payload: post,
  });
};

export const searchPosts = (string) => async (dispatch) => {
  const posts = await axios.get(url, config).then((response) => response.data);

  dispatch({
    type: SEARCH_POSTS,
    payload: posts,
    search: string,
  });
};
