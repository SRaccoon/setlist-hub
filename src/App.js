import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GigDetail from './components/GigDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GigDetail />} />
          <Route path="/gig/:title" element={<GigDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 