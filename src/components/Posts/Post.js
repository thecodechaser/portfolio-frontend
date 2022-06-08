const Post = (props) => {
  const {data} = props;
  return (
    <p>Hello{data.title}</p>
  )
}

export default Post;