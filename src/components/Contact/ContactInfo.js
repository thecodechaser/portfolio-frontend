import React from 'react';

const ContactInfo = () => (
  <div className="flex flex-col mt-20 md:ml-1">
    <div className="flex w-full ml-5 md:ml-0">
      <div className="border-b-2 mb-3 w-32 mr-3 about-hr md:mr-5 border-secondaryColor" />
      <h3 className="text-2xl md:text-4xl">Get in touch</h3>
      <div className="border-b-2 mb-3 w-32 ml-3 about-hr md:ml-5 border-secondaryColor" />
    </div>

    <div className="ml-6 md:flex mt-5 md:gap-12 md:ml-1">
      <p className="md:w-1/3 text-base text-skyColor">
        {' '}
        If you have an application you are interested in developing, a feature that you need 
        to be built, or a project that needs coding. I’d love to help with it.<br></br><br></br>
        I love collaborating with other developers, if you are looking for a collaborator for your 
        project let's schedule a coffee and chat.
      </p>
      <div className="md:w-1/5">
        <h4 className="mb-4 text-2xl">Contacts</h4>
        <p className="text-skyColor text-base">contact@thecodechaser.com</p>
        <p className="text-skyColor mt-3 text-base">admin@thecodechaser.com</p>
      </div>
      <div className="md:w-1/5">
        <h4 className="mb-4 text-2xl">Social Media</h4>
        <p className="text-skyColor">Social<i class="lab la-github"></i></p>
        <p className="text-skyColor">Social</p>
        <p className="text-skyColor">Social</p>
      </div>
    </div>
  </div>
);

export default ContactInfo;
