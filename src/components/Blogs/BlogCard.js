/* eslint-disable eqeqeq */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

const BlogCard = (props) => {
  const { data } = props;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className={`md:flex project-card ${data.id == 1 ? 'mt-16' : 'mt-32'} mx-2 ml-4 md:ml-0 md:mx-0 p-3 rounded-md shadow shadow-lightBlueColor md:gap-5`}
    >
      <div className="w-11/12 post-img">
        <Link to={`/blog/${data.id}/${data.title.replace(/\s+/g, '-')}`}>
          <img
            src={data.photo_one}
            alt="project preview"
            className="ml-2 rounded-md md:ml-0 "
          />
        </Link>
      </div>
      <div>
        <Link to={`/blog/${data.id}/${data.title.replace(/\s+/g, '-')}`}><h3 className="text-skyColor mt-3 md:mt-0 mb-4 text-xl md:text-2xl ml-2 md:ml-0">{data.title}</h3></Link>
        <p className="bg-lightBlueColor text-skyColor text-base font-medium p-5 rounded mr-6 ml-2 md:ml-0 md:mr-0">
          {data.p_one.substring(0, 200)}
          ....
        </p>
        <div className="flex justify-between gap-2 text-skyColor mt-8 ml-2 md:ml-0">
          <div className="flex gap-3 ml-1 mt-2">
            <p>
              {data.likes_counter}
              {' '}
              Likes
            </p>
            <p>
              {data.comments_counter}
              {' '}
              Comments
            </p>
          </div>
          <Link to={`/blog/${data.id}/${data.title.replace(/\s+/g, '-')}`}>
            <button type="button" className="bg-lightBlueColor mr-8 md:mr-0 rounded px-3 py-2 text-md text-skyColor font-medium hover:bg-secondaryColor hover:text-primaryColor">
              Read More
              <ArrowRightIcon className="h-4 inline ml-1" />
            </button>
          </Link>
        </div>

      </div>
    </motion.section>
  );
};

BlogCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    h_one: PropTypes.string,
    p_one: PropTypes.string,
    likes_counter: PropTypes.number,
    comments_counter: PropTypes.number,
    photo_one: PropTypes.string,
  }).isRequired,
};

export default BlogCard;
