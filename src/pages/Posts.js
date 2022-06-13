/* eslint-disable eqeqeq */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from '../components/Posts/Post';
import User from '../components/Posts/User';
import { fetchPostsApi } from '../redux/blogs/posts';
import { fetchUsersApi } from '../redux/blogs/users';

const Posts = () => {
  const posts = useSelector((state) => state.postsReducer);
  const user = useSelector((state) => state.usersReducer);
  const { id } = useParams();
  const post = posts.find((item) => item.id == id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsApi());
    dispatch(fetchUsersApi({ post_id: parseInt(id, 10) }));
    window.scrollTo({
      top: 0,
    });
  }, [dispatch]);

  return (
    <div className="mt-28 md:mt-40">
      { post
    && <Post data={post} />}
      { post
    && (
    <p className="mt-10 ml-4 text-skyColor text-base">
      Posted on
      {post.created_at.substring(0, 10)}
      {' '}
      by
    </p>
    ) }
      { user
    && <User data={user} />}
    </div>

  );
};

export default Posts;
