import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ConcertDetail.css';

const ConcertDetail = () => {
  const { id } = useParams();

  // 하드코딩된 데이터로 복원
  const concertData = {
    2: {
      id: 2,
      title: "장장 페스티벌",
      date: "2025-08-30",
      venue: "신논현 펄스 라이브홀",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop&crop=center",
      description: "기타를 처음 배우기 위해 모인 우리가, 2년이라는 시간을 거쳐 만들어낸 첫 번째 공연.",
      teams: [
        {
          id: 1,
          name: "학사경고",
          image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop&crop=center",
          description: "대학생들의 솔직한 이야기를 담은 록 밴드",
          members: [
            { name: "이다은", role: "보컬", description: "솔직한 가사로 대학생들의 마음을 대변하는 메인 보컬" },
            { name: "손동우", role: "리드기타", description: "강렬한 기타 리프로 무대를 지배하는 기타리스트" },
            { name: "박수연", role: "리듬기타", description: "안정적인 리듬으로 밴드의 기반을 다지는 기타리스트" },
            { name: "한지우", role: "베이스", description: "안정적인 리듬으로 밴드의 기반을 다지는 베이시스트" },
            { name: "김지원", role: "드럼", description: "폭발적인 비트로 관객을 매료시키는 드러머" },
            { name: "한이연", role: "건반", description: "분위기를 더하는 키보디스트" }
          ],
          setlist: [
            { title: "이츠 - 청록", youtube: "https://youtu.be/9WPBI2hhmLM?si=ts5kCnD7RwokXZWf" },
            { title: "유다빈밴드 - calling", youtube: "https://youtu.be/0eAw495m8rE?si=oDv6XNkm-KRb5uXC" },
            { title: "아이유 - 있잖아 (Rock ver.)", youtube: "https://youtu.be/MF7lASJkAPM?si=c6kywiEUIaHymEC2" },
            { title: "윤마치 - 지구를 가졌어도", youtube: "https://youtu.be/PfFylTVQaQ4?si=jx44IN7mvkWstVbu" },
            { title: "터치드 - stand up!", youtube: "https://youtu.be/xOoXPTId5NQ?si=NklSSi3lkvAiXjLE" },
            { title: "", youtube: "" }
          ]
        },
        
        {
          id: 2,
          name: "퇴근인사",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center",
          description: "일상의 아름다움을 노래하는 인디 밴드",
          members: [
            { name: "고현민", role: "보컬", description: "따뜻한 보컬로 일상의 이야기를 전하는 메인 보컬" },
            { name: "심정현", role: "리드기타", description: "감성적인 멜로디를 연주하는 리드 기타리스트" },
            { name: "김영세", role: "리듬기타", description: "안정적인 리듬을 담당하는 리듬 기타리스트" },
            { name: "최예지", role: "베이스", description: "부드러운 저음으로 밴드의 기반을 다지는 베이시스트" },
            { name: "유경", role: "드럼", description: "절제된 비트로 분위기를 조성하는 드러머" }
          ],
          setlist: [
            { title: "쏜애플 - 시퍼런봄", youtube: "https://youtu.be/8i-B1ieI_kY?si=HX-p2R7-sOy6KAlz" },
            { title: "리도어 - 아직도 사랑하면 안되는 건가요", youtube: "https://youtu.be/avo8_7QSXrQ?si=PDH4zXsZzDz-Ok8_" },
            { title: "하현상 - 시간과 흔적", youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
            { title: "데이먼스 이어 - yours", youtube: "https://youtu.be/EFFkO-Kb6LQ?si=g34D9QwvGMOzMwNr" },
            { title: "Woodz - Drowning", youtube: "https://youtu.be/NbKH4iZqq1Y?si=oV1P3Xz5ywb3OE4M" },
            { title: "10cm - 너에게 닿기를", youtube: "https://youtu.be/qRdFd34gnOY?si=kI2U_rGlbrzPbef4" }
          ]
        },
        {
          id: 3,
          name: "적당한 밴드",
          image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop&crop=center",
          description: "감성적인 멜로디로 마음을 울리는 인디 밴드",
          members: [
            { name: "최윤서", role: "보컬", description: "경쾌한 보컬로 관객을 매료시키는 메인 보컬" },
            { name: "윤주윤", role: "리드기타", description: "신나는 멜로디를 연주하는 기타리스트" },
            { name: "전유섭", role: "리듬기타", description: "즐거운 리듬을 담당하는 기타리스트" },
            { name: "서가인", role: "베이스", description: "즐거운 리듬을 담당하는 베이시스트" },
            { name: "이병학", role: "드럼", description: "경쾌한 비트로 분위기를 고조시키는 드러머" }
          ],
          setlist: [
            { title: "한로로 - 비틀비틀 짝짜꿍", youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
            { title: "노브레인 - 넌 내게 반했어", youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
            { title: "아이묭 - 너는 록을 듣지 않아", youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
            { title: "크라잉넛 - 밤이 깊었네", youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
            { title: "", youtube: "" },
            { title: "", youtube: "" }
          ]
        },
        {
          id: 4,
          name: "옐로우치킨썸머",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
          description: "신나는 팝과 록을 조화롭게 연주하는 밴드",
          members: [
            { name: "황주현", role: "보컬", description: "따뜻한 보컬로 일상의 이야기를 전하는 메인 보컬" },
            { name: "김근희", role: "리드기타", description: "감성적인 멜로디를 연주하는 리드 기타리스트" },
            { name: "임태연", role: "리듬기타", description: "안정적인 리듬을 담당하는 리듬 기타리스트" },
            { name: "김지민", role: "베이스", description: "부드러운 저음으로 밴드의 기반을 다지는 베이시스트" },
            { name: "하승모", role: "드럼", description: "절제된 비트로 분위기를 조성하는 드러머" }
          ],
          setlist: [
            { title: "더 폴스 - Find Me!", youtube: "https://youtu.be/4ncJf4uaqP4?si=UhSTwZH72ZtkXHJL" },
            { title: "검정치마 - Antifreeze", youtube: "https://youtu.be/PGADim6UzHE?si=MelKsn6oiVD8ee3p" },
            { title: "웨이브투어스 - 사랑으로", youtube: "https://youtu.be/L7cAqBQVjYI?si=BUx3oA5teeYPb1ym" },
            { title: "한로로 - ㅈㅣㅂ", youtube: "https://youtu.be/XxM5yQj86s0?si=T_rfLrfs--9Rlh1s" },
            { title: "O.O.O - 눈이 마주쳤을 때", youtube: "https://youtu.be/qmkodlvhCSE?si=YljbaLcYwmirxNP4" },
            { title: "혁오 - LOVE YA!", youtube: "https://youtu.be/gxbGIUSW-Ho?si=yTb56T9uxvRCbGlR" }
          ]
        }
        
      ]
    }
  };

  const concert = concertData[id];

  if (!concert) {
    return (
      <div className="concert-detail">
        <div className="error-message">
          <h2>공연 정보가 없습니다</h2>
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