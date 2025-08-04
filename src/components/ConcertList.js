import React from 'react';
import { Link } from 'react-router-dom';
import './ConcertList.css';

const ConcertList = () => {
  // 하드코딩된 데이터로 복원
  const concerts = [
    {
      id: 1,
      title: "넥슨 밴드 3분기 공연",
      date: "2025-07-15",
      venue: "압구정 락교 라이브펍",
      venueLink: "https://www.nexon.com",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=400&fit=crop&crop=center",
      description: "넥슨에서 주최하는 특별한 밴드 공연. 3분기 마무리를 위한 특별한 무대를 준비했습니다."
    },
    {
      id: 2,
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