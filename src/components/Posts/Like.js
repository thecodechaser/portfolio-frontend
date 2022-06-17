import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createLikeApi } from '../../redux/blogs/likes';

const Like = (props) => {
  const [destroy, setDestroy] = useState(true);
  const { data, postId } = props;
  const dispatch = useDispatch();

  const submission = () => {
    
    dispatch(createLikeApi({ post_id: parseInt(postId, 10) }));
    setDestroy(!destroy)
  };

  return (
    <div className="mt-2 flex gap-1">
      <i onClick={submission} onKeyDown={submission} aria-hidden="true" className={`las la-thumbs-up text-3xl
      ${!destroy ? 'text-skyColor' : 'text-secondaryColor'}`} />
      <p className="mt-2 text-base">
        {data.length}
        {' '}
        Likes
      </p>
    </div>
  );
};

Like.propTypes = {
  data: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
  postId: PropTypes.string.isRequired,
};

export default Like;
