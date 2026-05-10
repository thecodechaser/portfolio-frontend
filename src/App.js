import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Blogs from './pages/Blogs';
import Posts from './pages/Posts';
import SuccessNotice from './components/Contact/SucessNotice';
import NotFound from './pages/404';
import Footer from './components/Footer';
import OnlineCourseWaitlist from './pages/OnlineCourseWaitlist';
import SignUpWaitList from './pages/SignUpWaitList';
import SignUpSucessNotice from './components/OnlineCourseWaitlist/SignUpSucessNotice';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg">
      <Header />
      <main className="container-page flex-1 w-full">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id/:title" element={<Posts />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/messageSent" element={<SuccessNotice />} />
          <Route path="/course-sneakpeak" element={<OnlineCourseWaitlist />} />
          <Route path="/signup-waitlist" element={<SignUpWaitList />} />
          <Route path="/signup-successfull" element={<SignUpSucessNotice />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
