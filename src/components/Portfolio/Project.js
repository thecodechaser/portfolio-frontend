import serverLogo from '../../assets/server-solid.svg';
import githubLogo from '../../assets/github-logo.svg';

const Project = () => {
  const even = false;
  return (
    <div className="md:flex project-card mt-24 mx-2 md:mx-0 p-3 shadow-md shadow-secondaryColor md:gap-5">
      <img
        src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=="
        alt="project preview"
        className={`w-11/12 ml-2 ${even ? 'md:order-1' : 'md:order-0'} md:w-2/4 md:ml-0`}
      />
      <div>
        <h3 className={`text-skyColor ${even ? 'md:text-left' : 'md:text-right'} mb-4 text-2xl ml-2 md:ml-0`}>Project name</h3>
        <p className="bg-secondaryColor text-primaryColor p-5 rounded mr-6 ml-2 md:ml-0 md:mr-0">
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <div className={`flex ${even ? 'md:justify-start' : 'md:justify-end'} gap-2 text-skyColor mt-4 ml-2 md:ml-0`}>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>Ruby</p>
        </div>
        <div className={`flex ${even ? 'md:justify-start' : 'md:justify-end'} gap-5 text-skyColor mt-4 ml-2 md:ml-0`}>
          <button type="button" className="bg-secondaryColor rounded px-5 py-2 text-md text-primaryColor">See Live 
          <img src={serverLogo} className="w-5 inline ml-2 mb-1"/></button>
          <button type="button" className="bg-secondaryColor rounded px-5 py-2 text-md text-primaryColor">See Source 
          <img src={githubLogo} className="w-5 inline ml-2 mb-1"/></button>
        </div>
      </div>
    </div>
  );
};

export default Project;
