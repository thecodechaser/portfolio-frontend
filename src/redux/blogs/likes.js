import Axios from 'axios';
import { API_TOKEN, LIKE_URL } from '../../helpers/api/endPoints';

// constants
const FETCH_LIKES = 'PORTFOLIO/BLOGS/LIKES/LOAD';
const CREATE_LIKES = 'PORTFOLIO/BLOGS/LIKES/CREATE';

// actions
const fetchLikes = (payload) => ({
  type: FETCH_LIKES,
  payload,
});

const createLikes = (payload) => ({
  type: CREATE_LIKES,
  payload,
});


// initial-state
const initialState = [];

// API-functions
export const fetchLikesApi = (data) => async (dispatch) => {
  const returnValue = await Axios.post(`${LIKE_URL}/load`, data, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  const { likes } = returnValue.data.data;
  dispatch(fetchLikes(likes));
};

export const createLikeApi = (data) => async (dispatch) => {
  const returnValue = await Axios.post(`${LIKE_URL}/create`, data, {
    headers: {
      Authorization: API_TOKEN,
    },
  });
  const { like } = returnValue.data.data;
  dispatch(fetchLikes(like));
}

// reducer
const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIKES:
      return action.payload;
    default:
      return state;
  }
};

export default likesReducer;
