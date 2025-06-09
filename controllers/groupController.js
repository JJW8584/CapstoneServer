const groupService = require('../services/groupService');
const userService = require('../services/userService');

exports.profile = async (req, res) => {
    const uId = req.body.globalUid;

    try{
        const result = await userService.getUserProfile(uId);

        if(result)
        {            
            console.log('프로필 호출 성공');
            
            return res.status(200).json({
                //TODO: reuslt 데이터 넣기
            });        
        }
        else
        {
            console.log('프로필 호출 실패');
        }
    }
    catch(error)
    {
        console.error('프로필 호출 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}

exports.danger = async (req, res) => {
    const uId = req.body.globalUid;

    try{
        const result = await groupService.getDangerMembers(uId);

        if(result)
        {            
            console.log('위험 그룹원 호출 성공');
            
            return res.status(200).json({
                //TODO: reuslt 데이터 넣기
            });        
        }
        else
        {
            console.log('위험 그룹원 호출 실패');
        }
    }
    catch(error)
    {
        console.error('위험 그룹원 호출 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}

exports.groups = async (req, res) => {
    const uId = req.body.globalUid;

    try{
        const result = await groupService.getUserGroups(uId);

        if(result)
        {
            console.log('그룹 호출 성공');
            
            return res.status(200).json({
                //TODO: reuslt 데이터 넣기
            });        
        }
        else
        {
            console.log('그룹 호출 실패');
        }
    }
    catch(error)
    {
        console.error('그룹 호출 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}