import React from 'react';

const Contact = () => (
  <div className="flex flex-col md:items-center mt-20">
    <div className="flex w-full justify-center">
      <div className="border-b-2 mb-3 w-32 mr-3 about-hr md:mr-5 border-secondaryColor " />
      <h3 className="text-2xl md:text-4xl">Get in touch</h3>
      <div className="border-b-2 mb-3 w-32  ml-3 about-hr md:ml-5 border-secondaryColor" />
    </div>

    <div className="ml-6 md:flex md:justify-center md:gap-8 md:ml-12">
      <p className="md:w-1/4">
        {' '}
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsu
      </p>
      <div className="md:w-1/5">
        <h4>Contacts</h4>
        <p>Email</p>
        <p>Email</p>
      </div>
      <div className="md:w-1/5">
        <p>Social</p>
        <p>Social</p>
        <p>Social</p>
      </div>
    </div>
  </div>
);

export default Contact;
