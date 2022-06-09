const Post = (props) => {
  const {data} = props;
  return (
    <article className="about-text">
    <h1 className="ml-2 md:ml-0 text-xl md:text-3xl">{data.title}</h1>
    <img src={data.photo_one} alt="first" className="mt-10 ml-2 pr-10 md:mr-0 md:ml-10"/>
    <h3 className="mt-6 text-lg ml-2">{data.h_one}</h3>
    <p className="mt-6 text-lg ml-2 text-skyColor">{data.p_one}</p>
    <h3 className="mt-6 text-lg ml-2">{data.h_two}</h3>
    <p className="mt-6 text-lg ml-2 text-skyColor">{data.p_two}</p>
    <h3 className="mt-6 text-lg ml-2">{data.h_three}</h3>
    <img src={data.photo_two} alt="first" className="mt-10 ml-2 pr-10 md:mr-0 md:ml-10"/>
    <p className="mt-6 text-lg ml-2 text-skyColor">{data.p_three}</p>
    <p className="mt-6 text-lg ml-2 text-skyColor">{data.conclusion}</p>
    <p className="mt-6 text-lg ml-2 text-skyColor">If you like this article please drop some likes and comments.</p>
    </article>
  )
}

export default Post;