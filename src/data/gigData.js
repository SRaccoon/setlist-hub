const gigData = {
  "jangjangfestival": {
    id: 2,
    title: "Jang Jang Festival",
    date: "2025-08-30 18:00 ~ 20:30",
    venue: "신논현 펄스 라이브홀",
    venueLink: "https://naver.me/G4WoE9X7",
    image: process.env.PUBLIC_URL + "/poster.png",
    description: "이 공연의 주제는 단 하나, 재밌으면 됐다!",
    teams: [
      {
        id: 1,
        name: "학사경고",
        image: `${process.env.PUBLIC_URL}/학사경고.png`,
        description: "다른 밴드들이 사회의 쓴맛을 노래할 때, 우린 아직 학식의 쓴맛을 노래한다.",
        members: [
          { name: "이다은", role: "보컬" },
          { name: "손동우", role: "리드기타" },
          { name: "박수연", role: "리듬기타" },
          { name: "한지우", role: "베이스" },
          { name: "김지원", role: "드럼" },
          { name: "한이연", role: "건반" }
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
        image: `${process.env.PUBLIC_URL}/퇴근인사2.png`,
        description: "하루의 마침표가 우리의 첫 소절이 되는 시간, 그 설렘을 연주하는 '퇴근인사'입니다",
        members: [
          { name: "고현민", role: "보컬" },
          { name: "심정현", role: "리드기타" },
          { name: "김영세", role: "리듬기타" },
          { name: "최예지", role: "베이스" },
          { name: "유경", role: "드럼" }
        ],
        setlist: [
          { title: "쏜애플 - 시퍼런봄", youtube: "https://youtu.be/8i-B1ieI_kY?si=HX-p2R7-sOy6KAlz" },
          { title: "리도어 - 아직도 사랑하면 안되는 건가요", youtube: "https://youtu.be/avo8_7QSXrQ?si=PDH4zXsZzDz-Ok8_" },
          { title: "하현상 - 시간과 흔적", youtube: "https://youtu.be/EFFkO-Kb6LQ?si=8kLH3SRmQumtX3o5" },
          { title: "데이먼스 이어 - yours", youtube: "https://youtu.be/DGXPro9x0yo?si=EJrCMIb5fnz_6LL9" },
          { title: "10cm - 너에게 닿기를", youtube: "https://youtu.be/qRdFd34gnOY?si=kI2U_rGlbrzPbef4" },
          { title: "Woodz - Drowning", youtube: "https://youtu.be/NbKH4iZqq1Y?si=oV1P3Xz5ywb3OE4M" }
        ]
      },
      {
        id: 3,
        name: "적당한 밴드",
        image: `${process.env.PUBLIC_URL}/적당한밴드.png`,
        description: "딱 좋은 온도, 적당한 밴드",
        members: [
          { name: "최윤서", role: "보컬" },
          { name: "윤주윤", role: "리드기타" },
          { name: "전유섭", role: "리듬기타" },
          { name: "서가인", role: "베이스" },
          { name: "이병학", role: "드럼" },
          { name: "정유일", role: "건반" }
        ],
        setlist: [
          { title: "한로로 - 비틀비틀 짝짜꿍", youtube: "https://youtu.be/51iYti71tos?si=8ZObzqIAZkfoYF93" },
          { title: "노브레인 - 넌 내게 반했어", youtube: "https://youtu.be/55dWF1PM8r4?si=_WCKJQ7g2bwxzoLc" },
          { title: "아이묭 - 너는 록을 듣지 않아", youtube: "https://youtu.be/GNwWFq1Xtu0?si=mem_3OSMxdpNt07H" },
          { title: "크라잉넛 - 밤이 깊었네", youtube: "https://youtu.be/IIzi_9yoras?si=_tKXxb8MCDsdptiV" },
          { title: "델리스파이스 - 고백", youtube: "https://youtu.be/F0aPN-ZiZlA?si=kfENkb-MAd5bUNHA" },
          { title: "", youtube: "" }
        ]
      },
      {
        id: 4,
        name: "옐로우치킨썸머",
        image: process.env.PUBLIC_URL + "/ycs.png",
        description: "고등학생부터 직장인까지, 서로 다른 일상을 노래하는 밴드 옐치썬",
        members: [
          { name: "황주현", role: "보컬" },
          { name: "임태연", role: "리드기타" },
          { name: "김근희", role: "리듬기타" },
          { name: "김지민", role: "베이스" },
          { name: "하승모", role: "드럼" }
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
  },
  "temperature": {
    id: 3,
    title: "TEMPERATURE",
    date: "2025-10-25 18:00 ~ 20:00",
    venue: "스페이스한강",
    venueLink: "https://naver.me/GpCzTDlp",
    image: process.env.PUBLIC_URL + "/temperature.png",
    description: "성급히 찾아온 겨울밤을 녹일 우리만의 온도",
    teams: [
      {
        id: 1,
        name: "주승오밴드",
        image: `${process.env.PUBLIC_URL}/주승오밴드.png`,
        description: "밴드 리도어의 음악에 이끌려 결성된 커버밴드 주승오밴드 입니다.",
        members: [
          { name: "오승주", role: "보컬" },
          { name: "심정현", role: "리드기타" },
          { name: "김태일", role: "리듬기타" },
          { name: "최예지", role: "베이스" },
          { name: "김민형", role: "드럼" },
          { name: "이희연", role: "건반" }
        ],
        setlist: [
          { title: "리도어 - 사랑의 미학", youtube: "https://youtu.be/3VlqlntAOt8?si=nJCqfFpXhzTjFQqc" },
          { title: "리도어 - 내 방안은 푸른바다", youtube: "https://youtu.be/E1i-J_4huZg?si=HzpCd9G23ZwEc98_" },
          { title: "리도어 - 아직도 사랑하면 안되는 건가요", youtube: "https://youtu.be/avo8_7QSXrQ?si=qvbn_RldX1devP89" },
          { title: "리도어 - 욕망주사기", youtube: "https://youtu.be/uVs0tqOck7k?si=k8LxO0lGCu_M9GlF" },
          { title: "혁오 - Tomboy", youtube: "https://youtu.be/w3-AKITQMi0?si=E-DGA6idBlQbc6Ea" },
          { title: "", youtube: "" }
        ]
      },
      {
        id: 2,
        name: "전갱이",
        image: `${process.env.PUBLIC_URL}/전갱이.png`,
        description: "살아있을 때 손질하지 않으면 못 먹는 전갱이처럼 신선하고 날 것 그대로의 진정성 있는 음악을 보여주는 밴드입니다.",
        members: [
          { name: "양나빈", role: "보컬" },
          { name: "이민엽", role: "리드기타" },
          { name: "정윤서", role: "리듬기타" },
          { name: "강주형", role: "베이스" },
          { name: "유신우", role: "드럼" },
          { name: "최태욱", role: "건반" }
        ],
        setlist: [
          { title: "Olivia Dean - Dive", youtube: "https://youtu.be/NM4e606yFJg?si=sZ6A_xID--g_0n33" },
          { title: "백예린 - Square", youtube: "https://youtu.be/4iFP_wd6QU8?si=rjFqU9yzIqJAh9z1" },
          { title: "라쿠나 - Far Away", youtube: "https://youtu.be/G1tzltj-igE?si=l4IvMXOQ5OKZiVaQ" },
          { title: "유다빈밴드 - LETTER", youtube: "https://youtu.be/-dxS4aYJi00?si=lGgzcVrRWz_g7xlu" },
          { title: "백예린 - Antifreeze", youtube: "https://youtu.be/74_yqNBhQbA?si=EM9NJxJhKXjap0No" },
          { title: "", youtube: "" }
        ]
      },
      {
        id: 3,
        name: "큰나무",
        image: `${process.env.PUBLIC_URL}/큰나무.png`,
        description: "큰나무는 중학교 동창 다섯 명이 함께 결성한 밴드입니다. 학창시절 자주 만나던 장소 '큰나무'에서 이름을 따와, 그때의 추억과 우정을 음악으로 이어가고 있습니다. 계속 자라나는 나무처럼 꾸준히 함께 성장하고 싶은 밴드입니다.",
        members: [
          { name: "김태일", role: "보컬/리듬기타" },
          { name: "최성은", role: "리드기타" },
          { name: "박종현", role: "베이스" },
          { name: "이승훈", role: "드럼" },
          { name: "김호걸", role: "건반" }
        ],
        setlist: [
          { title: "너드커넥션 - Back in time", youtube: "https://youtu.be/iMvXvXK0MAQ?si=fpYk7ChIf4D1K9xc" },
          { title: "웨이브투어스 - 사랑으로", youtube: "https://youtu.be/L7cAqBQVjYI?si=-satNMmCBCNS_XZq" },
          { title: "전기뱀장어 - 미로", youtube: "https://youtu.be/VcBBvkC_OIc?si=kjNDRghb8Kltc3u3" },
          { title: "검정치마 - Antifreeze", youtube: "https://youtu.be/PGADim6UzHE?si=Bi-ojd3pVlcuKtbP" },
          { title: "델리스파이스 - 고백", youtube: "https://youtu.be/F0aPN-ZiZlA?si=emIG_H4OdU2eM8gE" },
          { title: "나상현씨밴드 - 찬란", youtube: "https://youtu.be/S-yABpcMaQs?si=BLSGqVavXWu5gpAo" },
        ]
      }
    ]
  },
  "letsrock": {
    id: 4,
    title: "Let's Rock",
    date: "2026-02-28 18:00",
    venue: "락앤롤욱스",
    venueLink: "https://naver.me/GL8Zf6uF",
    image: process.env.PUBLIC_URL + "/nexon-band.png",
    description: "5개 팀이 함께하는 넥슨밴드 연합공연",
    teams: [
      {
        id: 1,
        name: "멜랑꼴리",
        image: `${process.env.PUBLIC_URL}/team-melancholy.svg`,
        description: "한국 인디 감성을 따뜻하게 풀어내는 5인조 밴드",
        members: [
          { name: "정지민", role: "보컬" },
          { name: "주영대", role: "기타" },
          { name: "이지한", role: "베이스" },
          { name: "박태훈", role: "드럼" },
          { name: "황지윤", role: "건반" }
        ],
        setlist: [
          { title: "한로로 - 입춘", youtube: "https://youtu.be/kIiW3XRP7bU?si=5CV83QuPqPN9ANM4" },
          { title: "최유리 - 잘 지내자 우리", youtube: "https://youtu.be/l7OLviBFHGo?si=shWztLisevO7h9D6" },
          { title: "강수지 - 흩어진 나날들", youtube: "https://youtu.be/oHrKxxlhVqQ?si=V_QjSr9iy6PkivMJ" },
          { title: "양파 - 애송이의 사랑", youtube: "https://youtu.be/JTplSsoWjKI?si=-beoGBwULbl07Wgw" },
          { title: "소란 - 사랑한 마음엔 죄가 없다", youtube: "https://youtu.be/2NyfVo89JRA?si=YX9VzCtX3QbWMNwb" },
          { title: "유다빈밴드 - LETTER", youtube: "https://youtu.be/AKOe_kCI-_I?si=_ohYG7g42SQg3fRZ" }
        ]
      },
      {
        id: 2,
        name: "조나단과 땡전들",
        image: `${process.env.PUBLIC_URL}/team-jonathan.svg`,
        description: "조나단이 이끌고 땡전들이 따라붙는다, 무대 위의 원맨쇼는 다섯이서 완성된다",
        members: [
          { name: "한재준", role: "보컬" },
          { name: "조나단", role: "기타" },
          { name: "박준규", role: "베이스" },
          { name: "김예빈", role: "드럼" },
          { name: "문영은", role: "건반" },
        ],
        setlist: [
          { title: "Jeff Beck - Stratus", youtube: "https://youtu.be/F36bITNhUZ8?si=zvYWFDo49C9MbBu5" },
          { title: "Red Hot Chili Peppers - Can't Stop", youtube:"https://youtu.be/8DyziWtkfBw?si=tgNR8tqPciVNwb4j" },
          { title: "Eric Clapton - Layla", youtube: "https://youtu.be/-KG2O5PSCSs?si=A8ZagZUwISquoBqt" },
          { title: "Seat Belts - Gotta Knock a Little Harder", youtube: "https://youtu.be/d_3fBxVewj8?si=KkcXEC7DQHiilSZ7" },
          { title: "" },
          { title: "" }

        ]
      },
      {
        id: 3,
        name: "스킬트리",
        image: `${process.env.PUBLIC_URL}/team-skilltree.svg`,
        description: "왁스부터 건즈앤로지스까지, 시대의 명곡들을 무대 위에 소환하는 6인조 밴드",
        members: [
          { name: "강해린", role: "보컬" },
          { name: "이혜미", role: "리드기타" },
          { name: "김동현", role: "리듬기타" },
          { name: "박지윤", role: "베이스" },
          { name: "최정한", role: "드럼" },
          { name: "신소윤", role: "건반" }
        ],
        setlist: [
          { title: "왁스 - 내게 남은 사랑을 다 줄께", youtube:"https://youtu.be/6RdfM2n-4gY?si=51dnSCEB0b_luKvh" },
          { title: "체리필터 - 오리 날다", youtube: "https://youtu.be/sgnjnNI5ktQ?si=J88tFkcwxGgs-Arg" },
          { title: "크라잉넛 - 밤이 깊었네" , youtube: "https://youtu.be/9tdkoOJvmmI?si=wDMQezSXrrRzLEZf"},
          { title: "자우림 - 매직 카펫 라이드", youtube: "https://youtu.be/cvpU-7BO0JE?si=DfL-TlbWgnWoJlPb" },
          { title: "Guns N' Roses - Sweet Child O' Mine", youtube: "https://youtu.be/1w7OgIMMRc4?si=IpqxWcu1sgpFVsZ-" },
          { title: "" }
        ]
      },
      {
        id: 4,
        name: "아지캉플젝",
        image: `${process.env.PUBLIC_URL}/team-akfg.png`,
        description: "아시안 쿵푸 제너레이션을 향한 순수한 덕심으로 뭉친 커버 프로젝트",
        members: [
          { name: "양지민", role: "보컬" },
          { name: "심정현", role: "리드기타" },
          { name: "강주형", role: "리듬기타" },
          { name: "김하은", role: "베이스" },
          { name: "이수진", role: "드럼" }
        ],
        setlist: [
          { title: "ASIAN KUNG-FU GENERATION - Re:Re: (2016 Version)", youtube: "https://youtu.be/BUX_JNixxZQ?si=lC-DPrfizgof2al4" },
          { title: "ASIAN KUNG-FU GENERATION - Rockn' Roll, Morning Light Falls on You", youtube: "https://youtu.be/rDTFSD9K9dA?si=USv1l5AKuXYk9_7x" },
          { title: "ASIAN KUNG-FU GENERATION - Solanin", youtube: "https://youtu.be/xZD1B1TskXs?si=XK79J_64X9mojJhL" },
          { title: "ASIAN KUNG-FU GENERATION - Rewrite", youtube: "https://youtu.be/ZmeudwRMrsU?si=xzd2C9DPwSIs5j8f" },
          { title: "ASIAN KUNG-FU GENERATION - Haruka Kanata", youtube: "https://youtu.be/nJ6A6GC_ki4?si=9y7EyQmwspq-tFet" },
          { title: "" }

        ]
      },
      {
        id: 5,
        name: "전원참석",
        image: `${process.env.PUBLIC_URL}/team-fullattend.svg`,
        description: "무대 위 6명만으론 부족하다, 관객까지 전원참석시키는 밴드",
        members: [
          { name: "김현수", role: "보컬" },
          { name: "노미래", role: "보컬" },
          { name: "김세진", role: "리드기타" },
          { name: "김민철", role: "리듬기타" },
          { name: "박준규", role: "베이스" },
          { name: "윤유성", role: "드럼" }
        ],
        setlist: [
          { title: "라이프앤타임 - 호랑이", youtube: "https://youtu.be/Zug3yknTJI0?si=DBJpkmti8wlwQ6Gg" },
          { title: "Two Ton Shoe - Medicine", youtube: "https://youtu.be/WRBy78lZ91c?si=zZS1x3YIGD4YFV2i" },
          { title: "Mrs. GREEN APPLE - Inferno", youtube: "https://youtu.be/wfCcs0vLysk?si=sAbsgtyqlXwvczih" },
          { title: "Turnstile - Holiday", youtube: "https://youtu.be/D6yaJur9JUE?si=hVsCLgCrBxZNyuU_" },
          { title: "Gary Clark Jr - Come Together", youtube: "https://youtu.be/r7imYeuAfkg?si=xZOWEAlRIvXNbSlt" },
          { title: "실리카겔 - Tic Tac Tok" , youtube: "https://youtu.be/VpZjRvy8AR8?si=tGs5Y2dAC1mmSrgz"}
        ]
      }
    ]
  }
};

export default gigData;
