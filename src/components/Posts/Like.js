

const Like = (props) =>{
  const { data } = props;
  return (
    <div className="mt-2 flex gap-1">
      <i class="las la-thumbs-up text-3xl text-skyColor hover:text-secondaryColor"></i>
      <p className="mt-2 text-base">{data.length} Likes</p>
    </div>
  )
};

export default Like;