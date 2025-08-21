import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GigDetail from './components/GigDetail';
import './App.css';

function App() {
  useEffect(() => {
    // Facebook 추적 파라미터가 있는 URL을 정리
    const currentUrl = window.location.href;
    
    // fbclid 파라미터가 있고 URL에 인코딩된 해시가 있는지 확인
    if (currentUrl.includes('fbclid=') && currentUrl.includes('%23%2Fgig%2F')) {
      // %23%2Fgig%2F 이후 부분을 찾아서 디코딩
      const encodedHashMatch = currentUrl.match(/%23%2Fgig%2F([^&]*)/);
      
      if (encodedHashMatch) {
        const gigTitle = decodeURIComponent(encodedHashMatch[1]);
        const cleanUrl = `${window.location.origin}${window.location.pathname}#/gig/${gigTitle}`;
        
        console.log('Facebook URL detected, redirecting to:', cleanUrl);
        window.location.replace(cleanUrl);
      }
    }
  }, []);

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