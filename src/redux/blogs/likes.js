import Axios from 'axios';
import { API_TOKEN, LIKE_URL } from '../../helpers/api/endPoints';

// constants
const FETCH_LIKES = 'PORTFOLIO/BLOGS/LIKES/LOAD';
const CREATE_LIKES = 'PORTFOLIO/BLOGS/LIKES/CREATE';
const DELETE_LIKES = 'PORTFOLIO/BLOGS/LIKES/DELETE';

// actions
const fetchLikes = (payload) => ({
  type: FETCH_LIKES,
  payload,
});

const createLikes = (payload) => ({
  type: CREATE_LIKES,
  payload,
});

const deleteLikes = (payload) => ({
  type: DELETE_LIKES,
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
  dispatch(createLikes(like));
};

export const deleteLikeApi = (data) => async (dispatch) => {
  const returnValue = await Axios.delete(`${LIKE_URL}/delete`, {
    headers: {
      Authorization: API_TOKEN,
    },
    data,
  });
  const { like } = returnValue.data.data;
  dispatch(deleteLikes(like.id));
};

// reducer
const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIKES:
      return action.payload;
    case CREATE_LIKES:
      return [...state, action.payload];
    case DELETE_LIKES:
      return state.filter((like) => like.id !== action.payload);
    default:
      return state;
  }
};

export default likesReducer;
