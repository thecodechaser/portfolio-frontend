import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="flex flex-col items-center mt-60 md:mr-52">
    <p className="text-3xl md:text-5xl">Lost your way?</p>
    <p className="text-lg mt-5">
      Sorry, we can&apos;t find that page.
    </p>
    <Link to="/">
      <button
        type="submit"
        className="bg-secondaryColor mt-5 ml-2 rounded px-4 py-3 text-base
      text-primaryColor"
      >
        Go Home
      </button>
    </Link>
  </section>
);

export default NotFound;
