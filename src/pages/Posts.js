/* eslint-disable eqeqeq */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from '../components/Posts/Post';
import User from '../components/Posts/User';
import Like from '../components/Posts/Like';
import Comment from '../components/Posts/Comment';
import CommentForm from '../components/Posts/CommentForm';
import { fetchPostsApi } from '../redux/blogs/posts';
import { fetchUsersApi } from '../redux/blogs/users';
import { fetchLikesApi } from '../redux/blogs/likes';
import { fetchCommentsApi } from '../redux/blogs/comments';

const Posts = () => {
  const posts = useSelector((state) => state.postsReducer);
  const user = useSelector((state) => state.usersReducer);
  const likes = useSelector((state) => state.likesReducer);
  const comments = useSelector((state) => state.commentsReducer);
  const { id } = useParams();
  const post = posts.find((item) => item.id == id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsApi());
    dispatch(fetchUsersApi({ post_id: parseInt(id, 10) }));
    dispatch(fetchLikesApi({ post_id: parseInt(id, 10) }));
    dispatch(fetchCommentsApi({ post_id: parseInt(id, 10) }));
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
      {' '}
      {' '}
      {post.created_at.substring(0, 10)}
      {' '}
      by
    </p>
    ) }
      <div className="flex gap-12 md:gap-96">
        { user
    && <User data={user} />}
        { likes && <Like data={likes} postId={id} /> }
      </div>

      { comments && (
      <div className="mt-8 ml-4">
        <h2 className="text-lg">
          Comments (
          {comments.length}
          )
        </h2>

        {
          comments.map((item) => (
            <Comment key={item.id} data={item} />
          ))
        }

      </div>
      )}
      <CommentForm postId={id} />
    </div>

  );
};

export default Posts;
