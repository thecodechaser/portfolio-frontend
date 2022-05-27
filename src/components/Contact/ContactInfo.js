import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = () => (
  <div className="flex flex-col mt-20 md:ml-1 contact-info">
    <div className="flex w-full ml-5 md:ml-0">
      <div className="border-b-2 mb-3 w-32 mr-3 about-hr md:mr-5 border-secondaryColor" />
      <h3 className="text-2xl md:text-4xl">Get in touch</h3>
      <div className="border-b-2 mb-3 w-32 ml-3 about-hr md:ml-5 border-secondaryColor" />
    </div>
    <div className="ml-6 md:flex mt-8 md:gap-12 md:ml-1">
      <p className="md:w-1/3 text-base text-skyColor">
        {' '}
        If you have an application you are interested in developing, a feature that you need
        to be built, or a project that needs coding. I’d love to help with it.
        <br />
        <br />
        I love collaborating with other developers, if you are looking for a collaborator for your
        project let&apos;s schedule a coffee and chat.
      </p>
      <div className="md:w-1/5 mt-4 md:mt-0">
        <h4 className="mb-4 text-2xl">Contacts</h4>
        <p className="text-skyColor text-base">contact@thecodechaser.com</p>
        <p className="text-skyColor mt-3 text-base">admin@thecodechaser.com</p>
      </div>
      <div className="md:w-1/5 mt-4 md:mt-0">
        <h4 className="mb-4 text-2xl">Social Media</h4>
        <div className="flex gap-5">
          <i className="lab la-github text-3xl text-skyColor" />
          <i className="lab la-twitter text-3xl text-skyColor" />
          <i className="lab la-linkedin text-3xl text-skyColor" />
        </div>
        <div className="flex gap-5 mt-4">
          <i className="lab la-medium text-3xl text-skyColor" />
          <i className="lab la-angellist text-3xl text-skyColor" />
          <i className="lab la-instagram text-3xl text-skyColor" />
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center md:mr-48">
      <Link to="/contact">
        {' '}
        <button
          type="button"
          className="border-2 border-secondaryColor ml-4 md:ml-0 mt-10 rounded px-6 py-3
      text-lg text-secondaryColor"
        >
          Send Me Message
        </button>
      </Link>
    </div>
  </div>
);

export default ContactInfo;
