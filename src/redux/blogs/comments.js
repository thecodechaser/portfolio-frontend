/* eslint-disable camelcase */

import Axios from 'axios';
import { API_TOKEN, COMMENT_URL } from '../../helpers/api/endPoints';

// constants
const FETCH_COMMENTS = 'PORTFOLIO/BLOGS/COMMENTS/LOAD';
const CREATE_COMMENTS = 'PORTFOLIO/BLOGS/COMMENTS/CREATE';
const avatar = 'https://thecodechaser.com/blogs/users/user1-photo.jpg';

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
  const { post_id, text, author } = data;
  const commentData = {
    post_id, comment: text, avatar, author,
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
