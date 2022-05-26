import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NotFound from './pages/404';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="inner-body">
        <Routes>
          <Route
            path="*"
            element={(<NotFound />)}
          />
          <Route
            path="/"
            element={(<Home />)}
          />
          <Route
            path="/about"
            element={(<About />)}
          />
          <Route
            path="/portfolio"
            element={(<Portfolio />)}
          />
          <Route
            path="/contact"
            element={(<Contact />)}
          />
          <Route
            path="/resume"
            element={(<Resume />)}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
