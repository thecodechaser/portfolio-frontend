import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/solid';
import emailjs from 'emailjs-com';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const userId = process.env.REACT_APP_USER_ID;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fieldsNotice, setFieldsNotice] = useState(false);
  const [emailNotice, setEmailNotice] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  const navigate = useNavigate();

  const submission = () => {
    const pattern = /\S+@\S+\.\S+/;

    if (name === '' || email === '' || message === '') {
      setFieldsNotice(true);
      return;
    }
    setFieldsNotice(false);

    if (!pattern.test(email)) {
      setEmailNotice(true);
      return;
    }
    setEmailNotice(false);

    emailjs.send(serviceId, templateId, { name, email, message }, userId);
    setSuccessNotice(true);
    setTimeout(() => navigate('../messageSent'), 2000);
  };

  const inputCls = 'w-full px-4 py-3 bg-surface border border-border text-fg placeholder:text-faint focus:outline-none focus:border-accent-ring focus:ring-2 focus:ring-accent-ring/30 transition-colors';

  return (
    <section className="pt-12 md:pt-16">
      <div className="flex items-center gap-3">
        <span className="mono text-xs text-faint">/contact</span>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Let&apos;s chat</h1>
      </div>
      <div className="mt-3 h-px bg-hairline" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start"
      >
        <div>
          <p className="text-base text-subtle leading-relaxed">
            Have a project in mind, a feature that needs building, or just want
            to talk shop? Drop a note — I read everything and reply quickly.
          </p>
          <div className="mt-6 mono text-xs text-faint space-y-1.5">
            <p>
              <span className="text-mute">$ </span>
              email
              {' → '}
              <a className="text-fg hover:text-accent" href="mailto:ranjeetbuk96@gmail.com">ranjeetbuk96@gmail.com</a>
            </p>
            <p>
              <span className="text-mute">$ </span>
              response time
              {' → '}
              <span className="text-fg">~24 hours</span>
            </p>
          </div>
        </div>

        <div className="border border-border bg-surface p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <label htmlFor="cf-name" className="block">
              <span className="mono text-xs text-faint block">name</span>
              <input
                id="cf-name"
                type="text"
                name="user_name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="30"
                placeholder="Your name"
                className={`mt-1.5 ${inputCls}`}
              />
            </label>
            <label htmlFor="cf-email" className="block">
              <span className="mono text-xs text-faint block">email</span>
              <input
                id="cf-email"
                type="email"
                name="user_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`mt-1.5 ${inputCls}`}
              />
            </label>
            <label htmlFor="cf-message" className="block">
              <span className="mono text-xs text-faint block">message</span>
              <textarea
                id="cf-message"
                rows="6"
                name="user_msg"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength="500"
                placeholder="What's on your mind?"
                className={`mt-1.5 resize-none ${inputCls}`}
              />
            </label>

            {fieldsNotice && (
              <p className="text-sm text-accent">Please fill all fields.</p>
            )}
            {emailNotice && (
              <p className="text-sm text-accent">Please enter a valid email.</p>
            )}
            {successNotice && (
              <p className="text-sm text-accent mono">Sending message…</p>
            )}

            <div className="flex items-center justify-between gap-3 pt-2">
              <span className="mono text-xs text-faint">
                {message.length}
                /500
              </span>
              <button
                type="button"
                onClick={submission}
                className="inline-flex items-center gap-2 h-11 px-5 bg-accent text-bg text-sm font-semibold hover:bg-accent-hover transition-colors"
              >
                Send message
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
