import { CheckCircleIcon } from '@heroicons/react/solid';
import profilePicture from '../../assets/profilePicture.jpg';

const fields = ['Full stack software developer', 'UI/UX designer', 'Remote work aficionado', 'Amateur astronomer'];

const HeroSection = () => (
  <div className="flex flex-col items-center gap-20 md:flex-row md:gap-60">
    <div className="md:order-1">
      <img src={profilePicture} alt="profile" className="h-80 rounded-full" />
    </div>
    <div className="text-skyColor">
      <p className="text-secondaryColor">Hello!</p>
      <h1 className="text-secondaryColor text-4xl md:text-5xl">I&apos;m Ranjeet Singh</h1>
      {
          fields.map((field) => (
            <div key={field} className="flex gap-4 mt-3">
              <CheckCircleIcon className="h-7" />
              <p className="m-px text-base">{field}</p>
            </div>
          ))
        }
      <button type="button" className="bg-secondaryColor mt-10 rounded px-6 py-2 w-50 text-lg text-primaryColor">Get in Touch</button>
    </div>
  </div>
);

export default HeroSection;
