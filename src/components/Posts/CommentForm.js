const CommentForm = () => {
  return (
    <div>
       <input
          type="text"
          name="user_name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="30"
          placeholder="Name"
          className="w-72 md:w-80 p-2 rounded text-primaryColor
      focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
         <textarea
          rows="10"
          name="user_msg"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength="500"
          placeholder="Write your message here"
          className="w-72 md:w-80 p-2 rounded text-primaryColor
          focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
    </div>
  )
};

export default CommentForm;