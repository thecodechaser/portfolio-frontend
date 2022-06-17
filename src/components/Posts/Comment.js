import PropTypes from 'prop-types';

const Comment = (props) => {
  const { data } = props;
  return (
    <div className="flex mt-8 w-96">
      <img src={data.avatar} alt="author" className="w-12 h-12 rounded-full" />
      <div className="ml-5">
        <h3 className="text-base">{data.author}</h3>
        <p className="text-xs text-skyColor">{data.created_at.substring(0, 10)}</p>
        <p className="mt-2 text-sm text-skyColor">{data.comment}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    author: PropTypes.string,
    created_at: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};

export default Comment;
