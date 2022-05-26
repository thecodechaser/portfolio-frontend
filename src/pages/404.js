import { Link } from 'react-router-dom';

const NotFound = () =>{
  return (
    <section className="not-found mt-32 md:mt-40">
    <div>
      <p>Lost your way?</p>
      <span>
        Sorry, we can&apos;t find that page. You can find doctors in the
        homepage and start booking appointments
      </span>
    </div>
    <div>
      <Link to="/">Go Home</Link>
    </div>
  </section>
  )
}

export default NotFound;