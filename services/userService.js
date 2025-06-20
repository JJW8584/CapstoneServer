const axios = require('axios');

// 사용자 로그인 요청
exports.loginToDatabaseServer = async (email, password) => {
  try {
    const response = await axios.post('https://capston.shop/users/login', {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('디비 서버 로그인 요청 실패:', error);
    throw error;
  }
};

// 🔥 사용자 회원가입 요청
exports.registerToDatabaseServer = async (userId, password, name, year, month, day, phone) => {
  const birthYear = year;
  const birthMonth = month;
  const birthDay = day;
  const email = userId;
  const confirmPassword = password
  try {
    const response = await axios.post('https://capston.shop/users/register', {
      email,
      password,
      confirmPassword,
      name,
      birthYear,
      birthMonth,
      birthDay,
      phone,
    });
    
    return response.data;
  } catch (error) {
    console.error('디비 서버 회원가입 요청 실패:', error);
    throw error;
  }
};

// 사용자 조회
exports.getUserProfile = async (uId) => {
  try {
    const response = await axios.get(`https://capston.shop/users/${uId}`);

    return response.data;
  } catch(error) {
    console.error('사용자 조회 중 에러:', error);
    throw error;
  }
}

// 프로필 수정
exports.editUserProfile = async (uId, name, year, month, day, phone) => {
  const uid = uId;
  const birthYear = year;
  const birthMonth = month;
  const birthDay = day;
  try {
    const response = await axios.post('https://capston.shop/users/profile', {
      uid,
      name,
      birthYear,
      birthMonth,
      birthDay,
      phone,
    });
    
    return response.data;
  } catch (error) {
    console.error('프로필 수정 요청 실패:', error);
    throw error;
  }
}