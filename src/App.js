import Header from './components/Header';
import { Routes, Route } from 'react-router';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route 
        path="/"
        element={(<HomePage />)}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
