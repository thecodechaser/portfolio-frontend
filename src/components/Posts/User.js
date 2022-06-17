import PropTypes from 'prop-types';

const User = (props) => {
  const { data } = props;
  return (
    <div className="mt-5 ml-4">
      <div className="flex">
        <img src={data.photo_link} alt="author" className="w-20 h-20 rounded-full" />
        <div className="ml-5">
          <h3 className="text-lg">{data.name}</h3>
          <p className="mt-3 mb-1 text-skyColor">{data.bio}</p>
          <a href={data.portfolio_link} className="text-skyColor">Website</a>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    photo_link: PropTypes.string,
    portfolio_link: PropTypes.string,
  }).isRequired,
};

export default User;
