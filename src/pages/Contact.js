import { useEffect } from 'react';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="mt-32">
      {/* contact-form */}
      <ContactForm />
    </div>
  );
};

export default Contact;
