import microverseLogo from '../../assets/microverse_logo.png';
import { ChevronRightIcon } from '@heroicons/react/solid';

const Experience = () => {
  return (
    <div className="mt-14 md:mt-24">
    <div className="flex gap-3 ml-5 md:ml-0">
      <h2 className="text-2xl md:text-4xl">Experience</h2>
      <div className="border-b-2 w-3/5 mb-3 border-secondaryColor hr-about" />
    </div>

    <div>
      <div className="flex mt-4 text-lg text-secondaryColor ml-5 gap-16 md:gap-96 md:ml-0">
      <h3>Technical Support Enginner <span className="block text-sm ml-1 text-skyColor">January 2022 – Present</span></h3>
      <p><img src={microverseLogo} alt="microverse-logo" className="inline w-8"/> Microverse</p>
      </div>
      <ul className="ml-4 md:ml-0">
      <li className="flex text-base gap-2 text-skyColor mt-4">
                <ChevronRightIcon className="h-6" />
                <p>Reviewed technical projects of junior web developers to make sure projects pass requirements.</p>
              </li>
              <li className="flex text-base gap-2 text-skyColor mt-2">
                <ChevronRightIcon className="h-6" />
                <p>Proposed improvements for the projects to improve code quality and overall performance.</p>
              </li>
      </ul>
    </div>

    </div>
  )
}

export default Experience;