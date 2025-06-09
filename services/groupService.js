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

exports.getJoinedGroups = async (uId) => {
    try {
        // TODO: api 추가로 파야됨, name, members, backgroundimage
        const response = await axios.post('', { uId });

        return response.data;
    } catch(error) {
        console.error('그룹 조회 중 에러:', error);
        throw error;
    }
}

exports.getUserGroups = async (uId) => {
    try {
        const response = await axios.post('https://capston.shop/groups/my', { uId });

        // TODO: backgroundImage 있어야됨, 수정 요망
        return response.data;
    } catch(error) {
        console.error('그룹 상세 조회 중 에러:', error);
        throw error;
    }
}

exports.getGroupMembers = async (groupId) => {
    try {
        const response = await axios.get(`https://capston.shop/groups/${groupId}`);

        // TODO: 멤버 정보만 받으면 됨
        return response.data.members;
    } catch(error) {
        console.error('그룹 멤버 조회 중 에러:', error);
        throw error;
    }
}