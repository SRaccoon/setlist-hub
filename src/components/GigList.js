import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gigData from '../data/gigData';
import './GigList.css';

const GigList = () => {
  useEffect(() => {
    document.title = 'Gigs';
  }, []);

  const formatDate = (dateString) => {
    const dateOnly = dateString.split(' ')[0];
    const date = new Date(dateOnly);
    if (isNaN(date.getTime())) return dateString;

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return `${year}.${month}.${day} (${days[date.getDay()]})`;
  };

  const gigs = Object.entries(gigData).map(([key, gig]) => ({
    key,
    ...gig,
  }));

  return (
    <div className="gig-list">
      <div className="gig-list-grid">
        {gigs.map((gig, index) => (
          <Link
            to={`/gig/${gig.key}`}
            key={gig.key}
            className="gig-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="gig-card-poster">
              {gig.image ? (
                <img src={gig.image} alt={gig.title} />
              ) : (
                <div className="gig-card-color" style={{ background: gig.color }} />
              )}
              <div className="gig-card-gradient" />
              <div className="gig-card-info">
                <span className="gig-card-date">{formatDate(gig.date)}</span>
                <h2>{gig.title}</h2>
                <span className="gig-card-venue">{gig.venue}</span>
              </div>
            </div>
            <div className="gig-card-teams">
              {gig.teams.map((team, i) => (
                <span key={i}>{team.name}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GigList;
