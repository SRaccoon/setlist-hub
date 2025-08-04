import React from 'react';
import { Link } from 'react-router-dom';
import './ConcertList.css';

const ConcertList = () => {
  // 샘플 데이터 (나중에 실제 데이터로 교체)
  const concerts = [
    {
      id: 1,
      title: "장장 페스티벌",
      date: "2025-08-30",
      venue: "신논현 펄스 라이브홀",
      venueLink: "https://naver.me/G4WoE9X7",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop&crop=center",
      description: "기타를 처음 배우기 위해 모인 우리가, 2년이라는 시간을 거쳐 만들어낸 첫 번째 공연."
    }
  ];

  return (
    <div className="concert-list">
      <div className="concerts-container">
        <div className="concerts-grid">
          {concerts.map((concert) => (
            <Link to={`/concert/${concert.id}`} key={concert.id} className="concert-card">
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