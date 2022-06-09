const Post = (props) => {
  const {data} = props;
  return (
    <article className="about-text ml-4 mr-3 md:mr-0">
    <h1 className=" text-2xl md:text-3xl">{data.title}</h1>
    <div className="border-b-2 mb-3 mt-4 border-secondaryColor mr-2  md:mr-0" />
    <img src={data.photo_one} alt="first" className="mt-10 pr-10 md:mr-0 md:ml-10"/>
    <h3 className="mt-6 text-lg md:text-xl">{data.h_one}</h3>
    <p className="mt-6 text-base text-skyColor">{data.p_one}</p>
    <h3 className="mt-6 text-lg md:text-xl">{data.h_two}</h3>
    <p className="mt-6 text-base  text-skyColor">{data.p_two}</p>
    <h3 className="mt-6 text-lg md:text-xl">{data.h_three}</h3>
    <img src={data.photo_two} alt="first" className="mt-10  pr-10 md:mr-0 md:ml-10"/>
    <p className="mt-6 text-base text-skyColor">{data.p_three}</p>
    <p className="mt-6 text-base text-skyColor">{data.conclusion}</p>
    <p className="mt-6 text-base text-skyColor">If you like this article please drop some likes and comments.</p>
    </article>
  )
}

export default Post;