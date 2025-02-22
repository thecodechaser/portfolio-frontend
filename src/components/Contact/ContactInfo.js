import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="flex flex-col mt-20 md:ml-1 contact-info"
  >
    <div className="flex w-full ml-3 md:ml-0">
      <div className="w-1/4 mb-3 mr-3 border-b-2 about-hr md:mr-5 border-secondaryColor" />
      <h3 className="text-2xl md:text-4xl">Get in touch</h3>
      <div className="w-1/4 mb-3 ml-3 border-b-2 about-hr md:ml-5 border-secondaryColor" />
    </div>
    <div className="mt-8 ml-4 md:flex md:gap-12 md:ml-1">
      <p className="text-base md:w-1/3 text-skyColor">
        {' '}
        If you have an app idea you&apos;d like to develop, a feature that
        needs building, or a project that requires coding, I&apos;m here to help.
        Let&apos;s bring your vision to life!
        <br />
        <br />
        I really enjoy collaborating with other developers. If you&apos;re seeking a
        project partner, let&apos;s grab a coffee and chat about what we can create together.
      </p>
      <div className="mt-4 md:w-1/5 md:mt-0">
        <h4 className="mb-4 text-2xl">Contacts</h4>
        <a href="mailto: contact@thecodechaser.com" className="text-base text-skyColor hover:text-secondaryColor">ranjeetbuk96@gmail.com</a>
        <a href="mailto: contact@thecodechaser.com" className="block mt-3 text-base text-skyColor hover:text-secondaryColor">contact@thecodechaser.com</a>
        <a href="mailto: contact@thecodechaser.com" className="block mt-3 text-base text-skyColor hover:text-secondaryColor">admin@thecodechaser.com</a>
      </div>
      <div className="mt-4 md:w-1/5 md:mt-0">
        <h4 className="mb-4 text-2xl">Social Media</h4>
        <div className="flex gap-5">
          <a aria-label="Save" target="_blank" href="https://github.com/thecodechaser" rel="noreferrer"><i className="text-3xl lab la-github text-skyColor hover:text-secondaryColor" /></a>
          <a aria-label="Save" target="_blank" href="https://twitter.com/thecodechaser" rel="noreferrer"><i className="text-3xl lab la-twitter text-skyColor hover:text-secondaryColor" /></a>
          <a aria-label="Save" target="_blank" href="https://www.linkedin.com/in/thecodechaser/" rel="noreferrer"><i className="text-3xl lab la-linkedin text-skyColor hover:text-secondaryColor" /></a>
        </div>
        <div className="flex gap-5 mt-4">
          <a aria-label="Save" target="_blank" href="https://medium.com/@thecodechaser" rel="noreferrer"><i className="text-3xl lab la-medium text-skyColor hover:text-secondaryColor" /></a>
          <a aria-label="Save" target="_blank" href="https://angel.co/u/thecodechaser" rel="noreferrer"><i className="text-3xl lab la-angellist text-skyColor hover:text-secondaryColor" /></a>
          <a aria-label="Save" target="_blank" href="https://www.instagram.com/the_code_chaser/" rel="noreferrer"><i className="text-3xl lab la-instagram text-skyColor hover:text-secondaryColor" /></a>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center md:mr-48">
      <Link to="/contact">
        {' '}
        <button
          type="button"
          className="px-6 py-3 mt-10 ml-4 text-lg border-2 rounded border-secondaryColor md:ml-0 text-secondaryColor hover:text-skyColor hover:border-skyColor"
        >
          Send Me Message
        </button>
      </Link>
    </div>
  </motion.div>
);

export default ContactInfo;
