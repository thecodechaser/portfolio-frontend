import { Routes, Route } from 'react-router';
import Header from './components/Header';
import HomePage from './pages/HomePage';
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
          element={(<HomePage />)}
        />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
