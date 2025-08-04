// Netlify 함수를 통해 Notion API 호출
const NETLIFY_FUNCTION_URL = process.env.REACT_APP_NETLIFY_FUNCTION_URL || '/.netlify/functions/notion-api';

// 공연 정보 가져오기
export const getConcerts = async () => {
  try {
    const response = await fetch(`${NETLIFY_FUNCTION_URL}?type=concerts`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('공연 정보 가져오기 실패:', error);
    return [];
  }
};

// 팀 정보 가져오기
export const getTeams = async () => {
  try {
    const response = await fetch(`${NETLIFY_FUNCTION_URL}?type=teams`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('팀 정보 가져오기 실패:', error);
    return [];
  }
};

// 멤버 정보 가져오기
export const getMembers = async () => {
  try {
    const response = await fetch(`${NETLIFY_FUNCTION_URL}?type=members`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('멤버 정보 가져오기 실패:', error);
    return [];
  }
};

// 셋리스트 가져오기
export const getSetlists = async () => {
  try {
    const response = await fetch(`${NETLIFY_FUNCTION_URL}?type=setlists`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('셋리스트 가져오기 실패:', error);
    return [];
  }
};

// 전체 데이터 가져오기 (관계 데이터 포함)
export const getAllData = async () => {
  try {
    const response = await fetch(`${NETLIFY_FUNCTION_URL}?type=all`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('전체 데이터 가져오기 실패:', error);
    return [];
  }
}; 