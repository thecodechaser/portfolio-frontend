import { Link } from 'react-router-dom';
import rocketGif from '../../assets/rocket.gif';

const Blog = () => (
  <section className="flex flex-col items-center mt-10 md:mr-52">
    <p className="text-xl ml-4 md:ml-0">I&apos;m a very intresting feature and currenty under development.</p>
    <p className="text-lg ml-4 mt-4 md:ml-0">Next time you come back I will be live here.</p>
    <img src={rocketGif} alt="rocket-gif" />
    <Link to="/">
    <button
          type="button"
          className="bg-lightBlueColor mt-10 rounded px-6 py-2 w-50
      text-lg text-skyColor font-medium"
        >
        Go Home
      </button>
    </Link>
  </section>
);

export default Blog;
