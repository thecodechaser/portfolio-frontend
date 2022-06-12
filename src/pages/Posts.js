/* eslint-disable eqeqeq */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from '../components/Posts/Post';
import { fetchPostsApi } from '../redux/blogs/posts';
import { fetchUsersApi } from '../redux/blogs/users';

const Posts = () => {
 
  const posts = useSelector((state) => state.postsReducer);
  const users = useSelector((state) => state.usersReducer);
  const { id } = useParams();
  const post = posts.find((item) => item.id == id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsApi(), fetchUsersApi({post_id: parseInt(id)}));
    window.scrollTo({
      top: 0,
    });
  }, [dispatch]);


  return (
    <div className="mt-28 md:mt-40">
      { post
    && <Post data={post} />}
    </div>

  );
};

export default Posts;
