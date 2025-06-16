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

exports.CreateGroup = async (groupName, uId) => {
    const name = groupName;
    const uid = uId;

    try {
        const response = await axios.post('https://capston.shop/groups', { 
            name, 
            uid
        });

        if (response.data.success) {
            return true;
        }
        else {
            return false;
        }

    } catch(error) {
        console.error('그룹 생성 중 에러');
        throw error;
    }
}

exports.JoinGroup = async (groupCode, uId) => {
    const inviteCode = groupCode;
    const userId = uId;

    try {
        const response = await axios.post('https://capston.shop/groups/join', { 
            inviteCode, 
            userId
        });

        if (response.data.success) {
            return true;
        }
        else {
            return false;
        }

    } catch(error) {
        console.error('그룹 참여 중 에러');
        throw error;
    }
}

exports.ExitGroup = async (groupCode, uId) => {
    const inviteCode = groupCode;
    const userId = uId;
    try {
        const response = await axios.delete('https://capston.shop/groups/kick', { 
            inviteCode, 
            userId
        });

        if (response.data.success) {
            return true;
        }
        else {
            return false;
        }
    } catch(error) {
        console.error('그룹 나가기 중 에러');
        throw error;
    }
}