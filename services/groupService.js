const axios = require('axios');

exports.getDangerMembers = async (uId) => {
    try {
        const response = await axios.get(`https://capston.shop/groups/${uId}/danger-members`);

        return response.data;
    } catch(error) {
        console.error('위험 멤버 조회 중 에러:', error);
        throw error;
    }
}

exports.getUserGroups = async (uId) => {
    try {
        const response = await axios.post('https://capston.shop/groups/my', { uId });

        return response.data;
    } catch(error) {
        console.error('그룹 조회 중 에러:', error);
        throw error;
    }
}