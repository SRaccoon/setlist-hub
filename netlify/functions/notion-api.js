const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.REACT_APP_NOTION_TOKEN,
});

const DATABASE_IDS = {
  concerts: process.env.REACT_APP_CONCERTS_DATABASE_ID,
  teams: process.env.REACT_APP_TEAMS_DATABASE_ID,
  members: process.env.REACT_APP_MEMBERS_DATABASE_ID,
  setlists: process.env.REACT_APP_SETLISTS_DATABASE_ID
};

exports.handler = async (event, context) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

  // OPTIONS 요청 처리 (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { type } = event.queryStringParameters || {};

    let data;
    
    switch (type) {
      case 'concerts':
        const concertsResponse = await notion.databases.query({
          database_id: DATABASE_IDS.concerts,
          sorts: [{ property: '순서', direction: 'ascending' }]
        });
        
        data = concertsResponse.results.map(page => ({
          id: page.id,
          title: page.properties['공연명']?.title?.[0]?.plain_text || '',
          date: page.properties['날짜']?.date?.start || '',
          venue: page.properties['장소']?.rich_text?.[0]?.plain_text || '',
          venueLink: page.properties['장소링크']?.url || '',
          description: page.properties['설명']?.rich_text?.[0]?.plain_text || '',
          image: page.properties['이미지URL']?.url || '',
          status: page.properties['상태']?.select?.name || ''
        }));
        break;

      case 'teams':
        const teamsResponse = await notion.databases.query({
          database_id: DATABASE_IDS.teams,
          sorts: [{ property: '순서', direction: 'ascending' }]
        });
        
        data = teamsResponse.results.map(page => ({
          id: page.id,
          name: page.properties['팀명']?.title?.[0]?.plain_text || '',
          description: page.properties['설명']?.rich_text?.[0]?.plain_text || '',
          image: page.properties['이미지URL']?.url || '',
          concert: page.properties['소속공연']?.relation?.[0]?.id || '',
          order: page.properties['순서']?.number || 0
        }));
        break;

      case 'members':
        const membersResponse = await notion.databases.query({
          database_id: DATABASE_IDS.members,
          sorts: [{ property: '순서', direction: 'ascending' }]
        });
        
        data = membersResponse.results.map(page => ({
          id: page.id,
          name: page.properties['이름']?.title?.[0]?.plain_text || '',
          role: page.properties['포지션']?.select?.name || '',
          team: page.properties['소속팀']?.relation?.[0]?.id || '',
          order: page.properties['순서']?.number || 0
        }));
        break;

      case 'setlists':
        const setlistsResponse = await notion.databases.query({
          database_id: DATABASE_IDS.setlists,
          sorts: [{ property: '순서', direction: 'ascending' }]
        });
        
        data = setlistsResponse.results.map(page => ({
          id: page.id,
          title: page.properties['곡명']?.title?.[0]?.plain_text || '',
          artist: page.properties['아티스트']?.rich_text?.[0]?.plain_text || '',
          youtube: page.properties['유튜브링크']?.url || '',
          team: page.properties['소속팀']?.relation?.[0]?.id || '',
          order: page.properties['순서']?.number || 0
        }));
        break;

      case 'all':
        const [concerts, teams, members, setlists] = await Promise.all([
          notion.databases.query({
            database_id: DATABASE_IDS.concerts,
            sorts: [{ property: '순서', direction: 'ascending' }]
          }),
          notion.databases.query({
            database_id: DATABASE_IDS.teams,
            sorts: [{ property: '순서', direction: 'ascending' }]
          }),
          notion.databases.query({
            database_id: DATABASE_IDS.members,
            sorts: [{ property: '순서', direction: 'ascending' }]
          }),
          notion.databases.query({
            database_id: DATABASE_IDS.setlists,
            sorts: [{ property: '순서', direction: 'ascending' }]
          })
        ]);

        const teamsWithData = teams.results.map(team => {
          const teamMembers = members.results.filter(member => 
            member.properties['소속팀']?.relation?.[0]?.id === team.id
          );
          const teamSetlist = setlists.results.filter(song => 
            song.properties['소속팀']?.relation?.[0]?.id === team.id
          );
          
          return {
            id: team.id,
            name: team.properties['팀명']?.title?.[0]?.plain_text || '',
            description: team.properties['설명']?.rich_text?.[0]?.plain_text || '',
            image: team.properties['이미지URL']?.url || '',
            concert: team.properties['소속공연']?.relation?.[0]?.id || '',
            members: teamMembers.map(member => ({
              id: member.id,
              name: member.properties['이름']?.title?.[0]?.plain_text || '',
              role: member.properties['포지션']?.select?.name || '',
              team: member.properties['소속팀']?.relation?.[0]?.id || ''
            })),
            setlist: teamSetlist.map(song => ({
              id: song.id,
              title: song.properties['곡명']?.title?.[0]?.plain_text || '',
              artist: song.properties['아티스트']?.rich_text?.[0]?.plain_text || '',
              youtube: song.properties['유튜브링크']?.url || '',
              team: song.properties['소속팀']?.relation?.[0]?.id || ''
            }))
          };
        });

        data = concerts.results.map(concert => {
          const concertTeams = teamsWithData.filter(team => 
            team.concert === concert.id
          );
          
          return {
            id: concert.id,
            title: concert.properties['공연명']?.title?.[0]?.plain_text || '',
            date: concert.properties['날짜']?.date?.start || '',
            venue: concert.properties['장소']?.rich_text?.[0]?.plain_text || '',
            venueLink: concert.properties['장소링크']?.url || '',
            description: concert.properties['설명']?.rich_text?.[0]?.plain_text || '',
            image: concert.properties['이미지URL']?.url || '',
            status: concert.properties['상태']?.select?.name || '',
            teams: concertTeams
          };
        });
        break;

      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid type parameter' })
        };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('Notion API Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 