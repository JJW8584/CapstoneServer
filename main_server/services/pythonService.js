const axios = require('axios');

exports.sendToPythonServer = async (wifiData) => {
    const response = await axios.post('http://localhost:8000/predict-location', wifiData);
    return response.data;
};