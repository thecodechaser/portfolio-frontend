import { Routes, Route } from 'react-router';
import Header from './components/Header';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={(<HomePage />)}
        />
      </Routes>
    </>
  );
}

export default App;
