const axios = require('axios');
const db = require('../utils/db');

exports.getEscapePath = async (req, res) => {
  try {
    const { building_id, wifi_list } = req.body;

    if (!building_id || !wifi_list) {
      return res.status(400).json({ success: false, message: '필수 파라미터 누락' });
    }

    // 1. DB에서 building_data 불러오기
    const [rows] = await db.query(
      'SELECT building_data FROM buildings WHERE building_id = ?',
      [building_id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: '건물 정보 없음' });
    }

    const buildingData = JSON.parse(rows[0].building_data); // JSON 형태로 저장되었다고 가정

    // 2. Python 서버로 위치 요청
    const response = await axios.post(
      'https://python-server-code-production.up.railway.app/locate',
      {
        building_id,
        wifi_list,
        building_data: buildingData,
      }
    );

    // 3. Python 서버 결과 클라이언트에 그대로 전달
    return res.status(200).json(response.data);
  } catch (err) {
    console.error('경로 요청 오류:', err.message);
    return res.status(500).json({ success: false, message: '서버 오류' });
  }
};