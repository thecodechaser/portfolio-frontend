import { useEffect } from 'react';
import Post from '../components/Posts/Post'
import { useSelector, useDispatch } from 'react-redux';
import {useParams } from 'react-router-dom';
import { fetchPostsApi } from '../redux/blogs/posts';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsApi());
    window.scrollTo({
      top: 0,
    });
  }, [dispatch]);

  const posts = useSelector((state) => state.postsReducer);
  const { id } = useParams();
  const post = posts.find((item) => item.id == id);
 
  return (
    <div className="mt-40">
    { post &&
    <Post data={post}/>
}
    </div>
    
  )
}

export default Posts;