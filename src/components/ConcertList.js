import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getConcerts } from '../services/notionApi';
import './ConcertList.css';

const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        setLoading(true);
        const concertsData = await getConcerts();
        setConcerts(concertsData);
      } catch (err) {
        setError('공연 정보를 불러오는데 실패했습니다.');
        console.error('공연 정보 가져오기 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchConcerts();
  }, []);

  if (loading) {
    return (
      <div className="concert-list">
        <div className="concerts-container">
          <div style={{ textAlign: 'center', color: 'white', fontSize: '1.2rem' }}>
            공연 정보를 불러오는 중...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="concert-list">
        <div className="concerts-container">
          <div style={{ textAlign: 'center', color: 'white', fontSize: '1.2rem' }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="concert-list">
      <div className="concerts-container">
        <div className="concerts-grid">
          {concerts.map((concert) => (
            <Link key={concert.id} to={`/concert/${concert.id}`} className="concert-card">
              <div className="concert-image">
                <img src={concert.image} alt={concert.title} />
                <div className="concert-overlay">
                  <div className="concert-badge">
                    <span className="badge-date">{concert.date}</span>
                    <span className="badge-venue">{concert.venue}</span>
                  </div>
                </div>
              </div>
              <div className="concert-info">
                <h3>{concert.title}</h3>
                <p className="concert-description">{concert.description}</p>
                <div className="concert-meta">
                  <span className="meta-date">{concert.date}</span>
                  <a 
                    href={concert.venueLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="meta-venue-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {concert.venue}
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConcertList; 