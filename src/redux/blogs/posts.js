import Axios from 'axios';
import { API_TOKEN, POST_URL } from '../../helpers/api/endPoints';

// constants
const FETCH_POSTS = 'PORTFOLIO/BLOGS/POSTS';

// actions
const fetchPosts = (payload) => ({
  type: FETCH_POSTS,
  payload,
});

// initial-state
const initialState = [];

// API-functions
export const fetchPostsApi = () => async (dispatch) => {
  const returnValue = await Axios.get(`${POST_URL}/load`, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  const { posts } = returnValue.data.data;
  dispatch(fetchPosts(posts));
};

// reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
