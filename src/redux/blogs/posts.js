import { API_TOKEN, POST_URL } from "../../helpers/api/endPoints";

// constants
const FETCH_POSTS = 'PORTFOLIO/BLOGS/POSTS'

// actions
const fetchPosts = (payload) => ({
  type: FETCH_POSTS,
  payload,
});

// initial-state
const initialState = []

// API-functions
const 

// reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;