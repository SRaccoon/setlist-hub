import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllData } from '../services/notionApi';
import './ConcertDetail.css';

const ConcertDetail = () => {
  const { id } = useParams();
  const [concert, setConcert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConcertData = async () => {
      try {
        setLoading(true);
        const allData = await getAllData();
        const foundConcert = allData.find(c => c.id === id);
        
        if (foundConcert) {
          setConcert(foundConcert);
        } else {
          setError('공연을 찾을 수 없습니다.');
        }
      } catch (err) {
        setError('공연 정보를 불러오는데 실패했습니다.');
        console.error('공연 정보 가져오기 실패:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchConcertData();
  }, [id]);

  if (loading) {
    return (
      <div className="concert-detail">
        <div style={{ textAlign: 'center', color: 'white', fontSize: '1.2rem', padding: '50px' }}>
          공연 정보를 불러오는 중...
        </div>
      </div>
    );
  }

  if (error || !concert) {
    return (
      <div className="concert-detail">
        <div className="error-message">
          <h2>{error || '공연 정보가 없습니다'}</h2>
          <Link to="/" className="back-button">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="concert-detail">
      <div className="concert-header">
        <Link to="/" className="back-button">← 목록으로 돌아가기</Link>
        <div className="concert-hero">
          <img src={concert.image} alt={concert.title} className="concert-hero-image" />
          <div className="concert-hero-overlay">
            <h1>{concert.title}</h1>
            <p className="concert-date">{concert.date}</p>
            <p className="concert-venue">{concert.venue}</p>
            <p className="concert-description">{concert.description}</p>
          </div>
        </div>
      </div>

      <div className="teams-section">
        <div className="teams-grid">
          {concert.teams.map((team) => (
            <div key={team.id} className="team-card">
              <div className="team-image">
                <img src={team.image} alt={team.name} />
              </div>
              <div className="team-info">
                <h3>{team.name}</h3>
                <p className="team-description">{team.description}</p>
                
                <div className="members-section">
                  <h4>멤버</h4>
                  <div className="members-grid">
                    {team.members.map((member, index) => (
                      <div key={index} className="member-item">
                        <div className="member-info">
                          <span className="member-role">{member.role}</span>
                          <span className="member-name">{member.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="setlist-section">
                  <h4>셋리스트</h4>
                  <ul className="setlist">
                    {team.setlist.map((song, index) => (
                      <li key={index}>
                        <span className="song-title">{song.title}</span>
                        {song.youtube && (
                          <a
                            href={song.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="youtube-link"
                            title="유튜브에서 듣기"
                          >
                            <svg className="youtube-icon" viewBox="0 0 24 24" width="12" height="12">
                              <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConcertDetail;