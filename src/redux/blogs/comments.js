/* eslint-disable camelcase */

import Axios from 'axios';
import { API_TOKEN, COMMENT_URL } from '../../helpers/api/endPoints';

// constants
const FETCH_COMMENTS = 'PORTFOLIO/BLOGS/COMMENTS/LOAD';
const CREATE_COMMENTS = 'PORTFOLIO/BLOGS/COMMENTS/CREATE';
const avatars = [
  'https://thecodechaser.com/blogs/comments/avatar-one.png',
  'https://thecodechaser.com/blogs/comments/avatar-two.png',
  'https://thecodechaser.com/blogs/comments/avatar-three.png',
  'https://thecodechaser.com/blogs/comments/avatar-four.png',
  'https://thecodechaser.com/blogs/comments/avatar-five.png',
  'https://thecodechaser.com/blogs/comments/avatar-six.png',
  'https://thecodechaser.com/blogs/comments/avatar-seven.png',
  'https://thecodechaser.com/blogs/comments/avatar-eight.png',
];
// actions
const fetchComments = (payload) => ({
  type: FETCH_COMMENTS,
  payload,
});

const createComments = (payload) => ({
  type: CREATE_COMMENTS,
  payload,
});

// initial-state
const initialState = [];

// API-functions
export const fetchCommentsApi = (data) => async (dispatch) => {
  const returnValue = await Axios.post(`${COMMENT_URL}/load`, data, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  const { comments } = returnValue.data.data;
  dispatch(fetchComments(comments));
};

export const createCommentApi = (data) => async (dispatch) => {
  const random = Math.floor(Math.random() * avatars.length);
  const { post_id, text, author } = data;
  const commentData = {
    post_id, comment: text, avatar: avatars[random], author,
  };
  const returnValue = await Axios.post(`${COMMENT_URL}/create`, commentData, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  const { comment } = returnValue.data.data;
  dispatch(createComments(comment));
};

// reducer
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;
    case CREATE_COMMENTS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentsReducer;
