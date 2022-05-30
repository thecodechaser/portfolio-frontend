import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successNotice, setSuccessNotice] = useState(false);

  const submission = () => {
    const pattern = /\S+@\S+\.\S+/;

    if (name === '' || email === '' || message === '') {
      return;
    }

    if (!pattern.test(email)) {
      return;
    }

    setSuccessNotice(true);
    setTimeout(() => {
      setEmail('');
      setMessage('');
      setName('');
    }, 1000);
  };

  return (
    <motion.div 
    initial={{ x: '-100vw' }}
    animate={{ x: -0 }}
    transition={{ duration: 1 }}
    className="flex flex-col mt-10 items-center md:mr-52">
      <h3 className="text-xl font-bold text-skyColor  mb-4">Let&apos;s Chat</h3>
      <form className="flex flex-col gap-4" action="https://formspree.io/f/meqnnlpy" method="post">
        <input
          type="text"
          name="user_name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="30"
          placeholder="Name"
          className="w-72 md:w-80 p-2 rounded text-primaryColor
      focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-72 md:w-80 p-2 rounded text-primaryColor
        focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
        <textarea
          rows="10"
          name="user_msg"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength="500"
          placeholder="Write your message here"
          className="w-72 md:w-80 p-2 rounded text-primaryColor
          focus:border-2 focus:border-secondaryColor focus:outline-none"
        />
        {
        successNotice && (
          <span className="text-skyColor">Thank you for your message, I will get back to you soon!</span>
        )
      }
        <button onClick={submission} type="submit" className="bg-lightBlueColor ml-24 mt-6 rounded w-28 px-4 py-2 text-base text-skyColor font-medium">Submit</button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
