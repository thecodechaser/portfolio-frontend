import Axios from 'axios';
import { API_TOKEN, REPLY_URL } from '../../helpers/api/endPoints';

// constants
const FETCH_REPLIES = 'PORTFOLIO/BLOGS/REPLIES/LOAD';

// actions
const fetchReplies = (payload) => ({
  type: FETCH_REPLIES,
  payload,
});

// initial-state
const initialState = [];

// reducer
const repliesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default repliesReducer;
