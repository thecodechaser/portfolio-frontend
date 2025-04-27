import { ChevronRightIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import microverseLogo from '../../assets/images/microverse_logo.png';
import freelanceLogo from '../../assets/images/freelance-logo.jpg';
import kwanzooLogo from '../../assets/images/kwanzoo-logo.jpg';

const Experience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="mt-14 md:mt-24 md:ml-1"
  >
    <div className="flex gap-3 ml-3 md:ml-0">
      <h2 className="text-2xl md:text-4xl">Experience</h2>
      <div className="w-3/5 mb-3 border-b-2 border-secondaryColor hr-exprience" />
    </div>

    <div className="mt-8 md:ml-1">
      <div className="flex flex-col gap-5 mt-4 ml-4 text-lg md:flex-row text-secondaryColor md:gap-[445px] md:ml-0">
        <h3>
          Front-End Developer
          <span className="block ml-1 text-sm text-skyColor">February 2025 – Present</span>
        </h3>
        <p className="md:mr-3">
          <img src={freelanceLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Novel Aquatech
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex gap-2 mt-4 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Enhanced and maintained a client portal, adding features, bug fixes, and testing.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Built an admin portal from scratch for efficient user, device, and configuration
            management.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Collaborated with the team to optimize UI/UX, performance, and deliver features under
            tight deadlines.
          </p>
        </li>
      </ul>
    </div>
    <div className="mt-8 md:ml-1">
      <div className="flex flex-col gap-5 mt-4 ml-4 text-lg md:flex-row text-secondaryColor md:gap-[418px] md:ml-0">
        <h3>
          Full-Stack Developer
          <span className="block ml-1 text-sm text-skyColor">October 2022 – February 2025</span>
        </h3>
        <p className="md:mr-3">
          <img src={kwanzooLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Kwanzoo INC
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex gap-2 mt-4 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Revamped the Kwanzoo dashboard with a modern UI, migrating to a new front-end project.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Optimized API performance by creating ElasticSearch snapshots, improving response times.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Developed new features & fixed critical issues used by 20+ B2B clients.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Led end-to-end implementation – from development to testing & AWS deployment.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-8 md:ml-1">
      <div className="flex flex-col gap-5 mt-4 ml-4 text-lg md:flex-row text-secondaryColor md:gap-[390px] md:ml-0">
        <h3>
          Technical Support Engineer
          <span className="block ml-1 text-sm text-skyColor">January 2022 – March 2024</span>
        </h3>
        <p className="md:mr-3">
          <img src={microverseLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Microverse
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-0">
        <li className="flex gap-2 mt-4 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Reviewed 100+ projects from junior developers, ensuring they met technical requirements.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Provided code quality improvements and best practices for performance optimization.
          </p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Assisted developers in debugging, refactoring, and writing clean, maintainable code.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-8 ml-1 md:ml-0">
      <div className="flex flex-col gap-5 mt-4 ml-3 text-lg md:flex-row text-secondaryColor md:gap-[395px] md:ml-2">
        <h3>
          Freelance Developer
          <span className="block ml-1 text-sm text-skyColor">January 2020 – September 2021 &#160; &#160;</span>
        </h3>
        <p>
          <img src={freelanceLogo} alt="microverse-logo" className="inline w-8" />
          {' '}
          Freelance
          {' '}
          <span className="block text-sm text-skyColor">Remote</span>
        </p>
      </div>
      <ul className="ml-4 md:ml-2">
        <li className="flex gap-2 mt-4 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>Built desktop applications using Java, JavaFX, and other frameworks.</p>
        </li>
        <li className="flex gap-2 mt-2 text-base text-skyColor">
          <ChevronRightIcon className="h-6" />
          <p>
            Build websiite using Wordpress and Shopify for my clients.
          </p>
        </li>
      </ul>
    </div>

  </motion.div>
);

export default Experience;
