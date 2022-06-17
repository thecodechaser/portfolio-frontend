const BASE_URL = 'https://thecodechaser-backend.herokuapp.com/api/v1';
const POST_URL = `${BASE_URL}/posts`;
const USER_URL = `${BASE_URL}/users`;
const COMMENT_URL = `${BASE_URL}/comments`;
const REPLY_URL = `${BASE_URL}/replies`;
const LIKE_URL = `${BASE_URL}/likes`;

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export {
  API_TOKEN, POST_URL, COMMENT_URL, REPLY_URL, LIKE_URL, USER_URL,
};
