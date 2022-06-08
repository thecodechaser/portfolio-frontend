import Post from '../components/Posts/Post'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Posts = () => {
  const location = useLocation();

  const { state } = location;

  return (
    <div className="mt-40">
    <p>Below is my post{state.title}</p>
    <Post />
    </div>
    
  )
}

export default Posts;