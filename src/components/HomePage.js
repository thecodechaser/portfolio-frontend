import React from 'react';
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/solid';
import profilePicture from '../assets/profilePicture.jpg';
import Footer from './Footer';

const stacks = [
  {
    name: 'Front end development', stack1: 'React JS', stack2: 'JavaScript', stack3: 'HTML & CSS', stack4: 'Tailwind',
  },
  {
    name: 'Back end development', stack1: 'Ruby On Rails', stack2: 'Ruby', stack3: 'Java', stack4: 'SQL',
  },
  {
    name: 'Tools', stack1: 'Wordpress', stack2: 'Netlify', stack3: 'Github & Git', stack4: 'VS Code',
  },
];
const fields = ['Full stack software developer', 'UI/UX designer', 'Remote work aficionado', 'Amateur astronomer'];

const HomePage = () => (
  <>
    <main className="mt-40">
      {/* hero-section */}
      <div className="flex flex-col items-center gap-20 md:flex-row md:justify-center md:gap-60 md:mx-20">
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
      {/* about-section */}
      <div className="mt-14 md:mt-24">
        <div className="flex justify-center gap-3">
          <h2 className="text-2xl md:text-4xl">Aboute Me</h2>
          <div className="border-b-2 w-3/5 mb-3 border-secondaryColor md:w-2/4" />
        </div>
        <div className="flex flex-col mt-5 ml-8 mr-5 gap-5 lg:ml-32 lg:mr-32 xl:ml-72 xl:mr-64 text-base text-skyColor">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsu
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsu
          </p>
        </div>
        <h3 className="text-lg text-secondaryColor mt-5 mx-8 font-bold md:mx-72">Here are few of my stacks I&apos;ve been working with recently:</h3>
        <div className="flex flex-col ml-8 gap-4 mt-2 md:flex-row md:gap-56 md:ml-6 md:justify-center">
          { stacks.map((stack) => (
            <div key={stack.name}>
              <h3 className="text-lg text-skyColor">{stack.name}</h3>
              <div className="flex text-base gap-2 text-skyColor mt-2">
                <ChevronRightIcon className="h-6" />
                <p>{stack.stack1}</p>
              </div>
              <div className="flex text-base gap-2 text-skyColor mt-2">
                <ChevronRightIcon className="h-6" />
                <p>{stack.stack2}</p>
              </div>
              <div className="flex text-base gap-2 text-skyColor mt-2">
                <ChevronRightIcon className="h-6" />
                <p>{stack.stack3}</p>
              </div>
              <div className="flex text-base gap-2 text-skyColor mt-2">
                <ChevronRightIcon className="h-6" />
                <p>{stack.stack4}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default HomePage;
