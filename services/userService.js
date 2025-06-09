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
exports.registerToDatabaseServer = async (userId, password, name, year, month, day) => {
  try {
    const response = await axios.post('https://capston.shop/users/register', {
      userId,
      password,
      name,
      year,
      month,
      day
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