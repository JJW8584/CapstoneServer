const axios = require('axios');

let latestDisasterId = null;

exports.checkDisaster = async () => {
  try {
    const url = 'https://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List';
    const params = {
      ServiceKey: '발급받은인증키',  // 실제 API 키로 대체
      pageNo: 1,
      numOfRows: 10,
      type: 'json'
    };

    const response = await axios.get(url, { params });
    const data = response.data?.DisasterMsg?.row;

    if (data && data.length > 0) {
      const mostRecent = data[0];

      if (mostRecent.msgid !== latestDisasterId) {
        latestDisasterId = mostRecent.msgid;

        console.log('새로운 재난 감지:', mostRecent.location_name, mostRecent.msg);

        // TODO: 클라이언트로 전송 (Socket.io, Firebase 등)
        return mostRecent;
      }
    }

    return null;
  } catch (error) {
    console.error('[Disaster API] 호출 실패:', error.message);
    return null;
  }
};
