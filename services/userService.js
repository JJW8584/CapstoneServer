const db = require('../utils/db');
const bcrypt = require('bcrypt');

// 사용자 조회
exports.findUser = async (username) => {
  const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0]; // 사용자 정보가 없으면 undefined 반환
};

// 비밀번호 비교
exports.comparePassword = async (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

// 비밀번호 해시 생성 (회원가입 시 사용 가능)
exports.hashPassword = async (plainPassword) => {
  const saltRounds = 10;
  return bcrypt.hash(plainPassword, saltRounds);
};
