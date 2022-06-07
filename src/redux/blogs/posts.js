import { API_TOKEN, POST_URL } from "../../helpers/api/endPoints";

// actions
const FETCH_POST = 'PORTFOLIO/BLOGS/POSTS'

// initial-state
const initialState = []

// reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;