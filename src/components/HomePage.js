import React from 'react';
import profilePicture from '../assets/profilePicture.jpg'
import { CheckCircleIcon } from '@heroicons/react/solid';

const HomePage = () => (
  <main className="mt-40">
      <div className="flex flex-col items-center gap-20 md:flex-row md:justify-center md:gap-60">
          <div className="md:order-1">
              <img src={profilePicture} alt="profile-picture" className="h-80 rounded-full"/>
          </div>
          <div className="text-skyColor">
              <p className="text-secondaryColor">Hello!</p>
              <h1 className="text-secondaryColor text-5xl">I'm Ranjeet Singh</h1>
              <div className="flex gap-4 mt-3">
                  <CheckCircleIcon className="h-7"/>
                  <p className="m-px text-base">Full stack software developer</p>
              </div>
              <div className="flex gap-4 mt-3">
                  <CheckCircleIcon className="h-7"/>
                  <p className="m-px text-base">UI/UX designer</p>
              </div>
              <div className="flex gap-4 mt-3">
                  <CheckCircleIcon className="h-7"/>
                  <p className="m-px text-base">Remote work aficionado</p>
              </div>
              <div className="flex gap-4 mt-3">
                  <CheckCircleIcon className="h-7"/>
                  <p className="m-px text-base">Amateur astronomer</p>
              </div>
              <button type="button" className="bg-secondaryColor mt-10 rounded px-6 py-2 w-50 text-lg text-primaryColor">Get in Touch</button>
          </div>

      </div>
  </main>
);

export default HomePage;
