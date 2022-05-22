import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="inner-body">
        <Routes>
          <Route
            path="/"
            element={(<Home />)}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
