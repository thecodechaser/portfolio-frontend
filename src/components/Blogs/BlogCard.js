/* eslint-disable eqeqeq */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowRightIcon, HeartIcon, ChatAltIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

const BlogCard = ({ data }) => {
  const slug = data.title.replace(/\s+/g, '-');
  const href = `/blog/${data.id}/${slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group border border-border bg-surface overflow-hidden hover:border-accent-ring transition-colors shadow-card"
    >
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-0">
        <Link to={href} className="block aspect-[16/10] md:aspect-auto md:h-full overflow-hidden bg-elevated">
          <img
            src={data.photo_one}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </Link>

        <div className="flex flex-col p-6 gap-4">
          <Link to={href} className="block">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-fg group-hover:text-accent transition-colors">
              {data.title}
            </h3>
          </Link>
          <p className="text-sm text-subtle leading-relaxed line-clamp-4">
            {data.p_one.substring(0, 220)}
            …
          </p>

          <div className="mt-auto flex items-center justify-between pt-3 border-t border-hairline">
            <div className="flex items-center gap-4 mono text-xs text-faint">
              <span className="inline-flex items-center gap-1.5">
                <HeartIcon className="h-3.5 w-3.5" />
                {data.likes_counter}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ChatAltIcon className="h-3.5 w-3.5" />
                {data.comments_counter}
              </span>
            </div>
            <Link
              to={href}
              className="inline-flex items-center gap-1.5 text-sm text-fg hover:text-accent transition-colors"
            >
              Read more
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
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
