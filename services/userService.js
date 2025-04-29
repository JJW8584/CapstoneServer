const axios = require('axios');

// 사용자 로그인 요청
exports.loginToDatabaseServer = async (userId, password) => {
  try {
    const response = await axios.post('디비 로그인', {
      userId,
      password
    });
    return response.data;
  } catch (error) {
    console.error('디비 서버 로그인 요청 실패:', error);
    throw error;
  }
};

// 🔥 사용자 회원가입 요청
exports.registerToDatabaseServer = async (userId, password, name, birth) => {
  try {
    const response = await axios.post('디비 회원가입', {
      userId,
      password,
      name,
      birth
    });
    
    return response.data;
  } catch (error) {
    console.error('디비 서버 회원가입 요청 실패:', error);
    throw error;
  }
};
