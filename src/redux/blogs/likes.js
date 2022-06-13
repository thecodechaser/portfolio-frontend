import Axios from 'axios';
import { API_TOKEN, LIKE_URL } from '../../helpers/api/endPoints';

// constants
const FETCH_LIKES = 'PORTFOLIO/BLOGS/LIKES';

// actions
const fetchLikes = (payload) => ({
  type: FETCH_LIKES,
  payload,
});


// initial-state
const initialState = [];

// reducer
const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default likesReducer;
