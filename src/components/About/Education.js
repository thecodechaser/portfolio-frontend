import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import microverseLogo from '../../assets/images/microverse_logo.png';
import tmuLogo from '../../assets/images/tmu-logo.png';
import kalingaLogo from '../../assets/images/kalinga-logo.png';

const Education = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="mt-14 md:mt-24 md:ml-3"
  >
    <div className="flex gap-3 ml-3 md:ml-0">
      <h2 className="text-2xl md:text-4xl">Education</h2>
      <div className="w-3/5 mb-3 border-b-2 border-secondaryColor hr-exprience" />
    </div>

    <div className="mt-8 ml-2 md:ml-2">
      <div className="flex flex-col gap-5 mt-4 ml-3 text-lg text-secondaryColor edu-bhag md:flex-row md:ml-0">
        <h3>
          Bachlor of computer science
          <span className="block ml-1 text-sm text-skyColor">July 2019 – June 2022</span>
        </h3>
        <p>
          <img src={kalingaLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Kalinga University
          <span className="block text-sm text-skyColor">Regular</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex gap-2 mt-4 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Developed a BloodBank application using Java,
            JavaScript, and MySQL as a capstone project.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Gained expertise in software development,
            database management, and system design.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-8 md:ml-2">
      <div className="flex flex-col gap-5 mt-4 ml-4 text-lg md:flex-row text-secondaryColor edu-microverse md:ml-0">
        <h3>
          Full-stack Web Development Program
          <span className="block ml-1 text-sm text-skyColor">October 2021 – May 2022</span>
        </h3>
        <p>
          <img src={microverseLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Microverse
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex gap-2 mt-4 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Completed 1,300+ hours mastering React, Redux, Rails,
            and JavaScript through hands-on coding.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Built real-world projects in a remote,
            collaborative environment using GitHub & Agile.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-8 ml-1 md:ml-3">
      <div className="flex flex-col gap-5 mt-4 ml-3 text-lg md:flex-row text-secondaryColor edu-tmu md:ml-0">
        <h3>
          Diploma in Computer Science
          <span className="block ml-1 text-sm text-skyColor">July 2016 – June 2019</span>
        </h3>
        <p>
          <img src={tmuLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Teerthanker Mahaveer University
          <span className="block text-sm text-skyColor">Regular</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex gap-2 mt-4 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Completed a Java-based CMS software during a 3-month university internship.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor md:w-9/12">
          <ChevronRightIcon className="h-6" />
          <p>
            Studied computer fundamentals, software development, and algorithms.
          </p>
        </li>
      </ul>
    </div>

  </motion.div>
);

export default Education;
