import { Link } from 'react-router-dom';

const NotFound = () =>{
  return (
    <section className="flex flex-col items-center mt-32 md:mt-40">
      <p className="text-3xl md:text-5xl">Lost your way?</p>
      <p className="text-lg mt-5">
        Sorry, we can&apos;t find that page.
      </p>
      <Link to="/">Go Home</Link>
  </section>
  )
}

export default NotFound;