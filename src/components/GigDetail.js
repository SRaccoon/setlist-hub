import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import gigData from '../data/gigData';
import './GigDetail.css';

const GigDetail = () => {
  const { title } = useParams();
  const [isPosterLightboxOpen, setIsPosterLightboxOpen] = useState(false);

  useEffect(() => {
    const decodedTitle = title ? decodeURIComponent(title) : '';
    const gig = gigData[decodedTitle?.toLowerCase()];
    document.title = gig ? gig.title : 'Gigs';
  }, [title]);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') setIsPosterLightboxOpen(false);
    };
    if (isPosterLightboxOpen) document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isPosterLightboxOpen]);

  const formatDate = (dateString) => {
    const dateOnly = dateString.split(' ')[0];
    const date = new Date(dateOnly);
    if (isNaN(date.getTime())) return dateString;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const timeInfo = dateString.includes(' ') ? dateString.substring(dateString.indexOf(' ')) : '';
    return `${year}.${month}.${day} (${days[date.getDay()]})${timeInfo}`;
  };

  const decodedTitle = title ? decodeURIComponent(title) : '';
  const gig = gigData[decodedTitle?.toLowerCase()];

  if (!gig) {
    return (
      <div className="gig-detail">
        <div className="error-message">
          <h2>공연 정보가 없습니다</h2>
          <Link to="/" className="back-link">← 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="gig-detail">
      {/* Hero */}
      <div className="gig-hero">
        {gig.image ? (
          <img
            src={gig.image}
            alt={gig.title}
            className="gig-hero-bg"
            onClick={() => setIsPosterLightboxOpen(true)}
          />
        ) : (
          <div className="gig-hero-bg" style={{ background: gig.color }} />
        )}
        <div className="gig-hero-dim" />
        <Link to="/" className="back-link">←</Link>
        <div className="gig-hero-content">
          <h1 className={gig.title === "TEMPERATURE" ? "title-temperature" : ""}>
            {gig.title === "Jang Jang Festival" ? (
              <>
                <span className="jjf-line">
                  <span style={{color:'#FFD700'}}>J</span>
                  <span style={{color:'#FF0000'}}>A</span>
                  <span style={{color:'#32CD32'}}>N</span>
                  <span style={{color:'#FF69B4'}}>G</span>
                  <span className="jjf-space">&nbsp;</span>
                  <span style={{color:'#FFD700'}}>J</span>
                  <span style={{color:'#FF0000'}}>A</span>
                  <span style={{color:'#32CD32'}}>N</span>
                  <span style={{color:'#FF69B4'}}>G</span>
                </span>
                <br className="jjf-break" />
                <span className="jjf-line">
                  <span style={{color:'#FFD700'}}>F</span>
                  <span style={{color:'#FF0000'}}>E</span>
                  <span style={{color:'#32CD32'}}>S</span>
                  <span style={{color:'#FF69B4'}}>T</span>
                  <span style={{color:'#FFD700'}}>I</span>
                  <span style={{color:'#FF0000'}}>V</span>
                  <span style={{color:'#FF69B4'}}>A</span>
                  <span style={{color:'#32CD32'}}>L</span>
                </span>
              </>
            ) : gig.title}
          </h1>
          <div className="gig-meta">
            <span>{formatDate(gig.date)}</span>
            <span className="meta-dot">·</span>
            <span>
              {gig.venue}
              {gig.venueLink && (
                <a href={gig.venueLink} target="_blank" rel="noopener noreferrer" className="venue-link" onClick={e => e.stopPropagation()}>↗</a>
              )}
            </span>
          </div>
          <p className="gig-desc">{gig.description}</p>
        </div>
      </div>

      {/* Lightbox */}
      {isPosterLightboxOpen && gig.image && (
        <div className="lightbox" onClick={() => setIsPosterLightboxOpen(false)}>
          <img src={gig.image} alt={gig.title} />
          <button className="lightbox-close">✕</button>
        </div>
      )}

      {/* Teams */}
      <div className="teams">
        {gig.teams.map((team) => (
          <div key={team.id} className="team">
            <div className="team-header">
              <div className="team-thumb">
                {team.image ? (
                  <img src={team.image} alt={team.name} />
                ) : (
                  <div className="team-thumb-color" style={{ background: team.color }} />
                )}
              </div>
              <div className="team-title">
                <h3>{team.name}</h3>
                <p>{team.description}</p>
              </div>
            </div>

            <div className="team-body">
              <div className="team-members">
                {team.members.map((m, i) => (
                  <span key={i} className="member">
                    <span className="member-role">{m.role}</span>
                    {m.name}
                  </span>
                ))}
              </div>

              <div className="team-setlist">
                <h4>SETLIST</h4>
                <ol>
                  {team.setlist.filter(s => s.title).map((song, i) => (
                    <li key={i}>
                      <span className="song-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="song-title">{song.title}</span>
                      {song.youtube && (
                        <a href={song.youtube} target="_blank" rel="noopener noreferrer" className="yt-link">
                          <svg viewBox="0 0 24 24" width="14" height="14">
                            <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GigDetail;
