import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ConcertList from './components/ConcertList';
import ConcertDetail from './components/ConcertDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ConcertList />} />
          <Route path="/concert/:id" element={<ConcertDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 