const axios = require('axios');

exports.getUserGroups = async (uId) => {
    const uid = uId;
    try {
        const response = await axios.post('https://capston.shop/groups/my', { 
            uid
        });

        return response.data;
    } catch(error) {
        console.error('그룹 상세 조회 중 에러:', error);
        throw error;
    }
}