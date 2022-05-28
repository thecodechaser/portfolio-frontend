import PropTypes from 'prop-types';
import serverLogo from '../../assets/images/server-solid.svg';
import githubLogo from '../../assets/images/github-logo.svg';

const Project = (props) => {
  const {
    data: {
      id, image, title, details, tech, live, github,
    },
  } = props;
  let odd;
  if (id === 0 || id % 2 === 0) {
    odd = false;
  } else {
    odd = true;
  }
  return (
    <div className={`md:flex project-card ${id === 0 ? 'mt-16' : 'mt-32'} mx-2 md:mx-0 p-3 shadow shadow-lightBlueColor md:gap-5`}>
      <img
        src={image}
        alt="project preview"
        className={`w-11/12 ml-2 ${odd ? 'md:order-1' : 'md:order-0'} card-img md:ml-0 `}
      />
      <div>
        <h3 className={`text-skyColor ${odd ? 'md:text-left' : 'md:text-right'} mb-4 text-2xl ml-2 md:ml-0`}>{title}</h3>
        <p className="bg-lightBlueColor text-skyColor text-base font-medium p-5 rounded mr-6 ml-2 md:ml-0 md:mr-0">
          {details}
        </p>
        <div className={`flex ${odd ? 'md:justify-start' : 'md:justify-end'} gap-2 text-skyColor mt-5 ml-2 md:ml-0`}>
          {tech.map((item) => (
            <p key={item} className="border border-lightBlueColor py-1 px-2 rounded text-skyColor">{item}</p>
          ))}
        </div>
        <div className={`flex ${odd ? 'md:justify-start' : 'md:justify-end'} gap-5 text-skyColor mt-5 ml-2 md:ml-0`}>
          <a target="_blank" href={live} className="bg-lightBlueColor rounded px-5 py-2 text-md text-skyColor font-medium hover:bg-secondaryColor hover:text-primaryColor" rel="noreferrer">
            See Live
            <img src={serverLogo} className="w-5 inline ml-2 mb-1" alt="server-icon" />
          </a>
          <a target="_blank" href={github} className="bg-lightBlueColor rounded px-5 py-2 text-md text-skyColor font-medium hover:bg-secondaryColor hover:text-primaryColor" rel="noreferrer">
            See Source
            <img src={githubLogo} className="w-5 inline ml-2 mb-1" alt="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    details: PropTypes.string,
    live: PropTypes.string,
    github: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }).isRequired,
};

export default Project;
