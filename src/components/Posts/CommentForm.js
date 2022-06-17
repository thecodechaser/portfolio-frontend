import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createCommentApi } from '../../redux/blogs/comments';

const CommentForm = (props) => {
  const { postId } = props;

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [fieldsNotice, setFieldsNotice] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  const dispatch = useDispatch();

  const submission = () => {
    if (name === '' || text === '') {
      setFieldsNotice(true);
      return;
    }
    setFieldsNotice(false);
    dispatch(createCommentApi({ post_id: parseInt(postId, 10), author: name, text }));

    setName('');
    setText('');
    setSuccessNotice(true);

    setTimeout(() => {
      setSuccessNotice(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col gap-4 ml-4 mt-10">
      <h3 className="text-lg">Drop your comment</h3>
      <input
        type="text"
        name="user_name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength="30"
        placeholder="Name"
        className="w-64 md:w-72 p-2 rounded text-primaryColor
      focus:border-2 focus:border-secondaryColor focus:outline-none"
      />
      <textarea
        rows="5"
        name="user_cmnt"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength="500"
        placeholder="Write your comment here"
        className="w-64 md:w-72 p-2 rounded text-primaryColor
          focus:border-2 focus:border-secondaryColor focus:outline-none"
      />
      {
        fieldsNotice && (
          <span className="text-skyColor ml-16 text-base">Please fill all fields</span>
        )
      }
      {
        successNotice && (
          <span className="text-skyColor ml-10 text-base">Thanks for your comment!</span>
        )
      }
      <button onClick={submission} type="button" className="bg-lightBlueColor ml-20 mt-6 rounded w-28 px-4 py-2 text-base text-skyColor font-medium">Submit</button>
    </div>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentForm;
