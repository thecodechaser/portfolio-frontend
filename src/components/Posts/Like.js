import { createLikeApi } from "../../redux/blogs/likes";
import { useDispatch } from "react-redux";

const Like = (props) =>{
  const { data, postId } = props;
  const dispatch = useDispatch();

  const createLike = () =>{
    dispatch(createLikeApi({ post_id: parseInt(postId, 10) }))
  }

  return (
    <div className="mt-2 flex gap-1">
      <i onClick={createLike} class="las la-thumbs-up text-3xl text-skyColor hover:text-secondaryColor"></i>
      <p className="mt-2 text-base">{data.length} Likes</p>
    </div>
  )
};

export default Like;