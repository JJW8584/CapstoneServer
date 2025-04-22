const { checkDisaster } = require('../services/disasterService');

exports.startDisasterPolling = () => {
  setInterval(async () => {
    console.log(`[재난 정보 확인] ${new Date().toLocaleString()}`);

    const result = await checkDisaster();

    if (result) {
      // TODO: 푸시알림 전송
      console.log('클라이언트에게 알림을 전송해야 함');
    }
  }, 1000 * 60); // 60초마다 검사
};
