import { useEffect } from 'react';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return <ContactForm />;
};

export default Contact;
