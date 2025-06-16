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
                'name': result.name,
                'year': result.year,
                'month': result.month,
                'day': result.day,
                'phone': result.phone,
                'status': result.status, // 'SAFE', 'DANGER', 'CHECKING'
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

exports.groups = async (req, res) => {
    const uId = req.body.globalUid;

    try{
        const result = await groupService.getUserGroups(uId);

        if(result)
        {
            console.log('그룹 상세 호출 성공');
            
            return res.status(200).json(result);
        }
        else
        {
            console.log('그룹 상세 호출 실패');
        }
    }
    catch(error)
    {
        console.error('그룹 상세 호출 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}