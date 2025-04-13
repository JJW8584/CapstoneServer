const pythonService = require('../services/pythonService');

exports.handleLocation = async (req, res) => {
    try {
        const wifiData = req.body; // 클라이언트에서 보낸 WiFi 정보
        console.log('받았다', wifiData);
        //const locationInfo = await pythonService.sendToPythonServer(wifiData);

        //res.json(locationInfo);
        res.send(wifiData);
    } catch (error) {
        console.error('위치 처리 에러:', error);
        res.status(500).json({ error: '위치 계산 실패' });
    }
};
