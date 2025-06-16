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
            return res.status(404).json({
                success: false,
                message: '프로필 정보를 찾을 수 없습니다.'
            });
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

exports.createGroup = async (req, res) => {
    try{
        const Check = await groupService.getUserGroups(req.groupName, req.uId);

        if(Check)
        {
            console.log('그룹 생성 성공');

            const result = await groupService.getUserGroups(uId);

            if(result)
            {
                console.log('그룹 생성 후 호출 성공');
                
                return res.status(200).json(result);
            }
            else
            {
                console.log('그룹 생성 후 호출 실패');
                return res.status(404).json({
                success: false,
                message: '그룹 정보를 찾을 수 없습니다.'
                });
            }
        }
        else
        {
            console.log('그룹 생성 실패');
            return res.status(404).json({
                success: false,
                message: '그룹을 생성할 수 없습니다.'
            });
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
            return res.status(404).json({
                success: false,
                message: '그룹 정보를 찾을 수 없습니다.'
            });
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

exports.joinGroup = async (req, res) => {
    try{
        const result = await groupService.JoinGroup(req.groupCode, req.uId);

        if(result)
        {
            console.log('그룹 참여 성공');
            
            return res.status(200).json(result);
        }
        else
        {
            console.log('그룹 참여 실패');
            return res.status(404).json({
                success: false,
                message: '그룹 정보를 찾을 수 없습니다.'
            });
        }
    }
    catch(error)
    {
        console.error('그룹 참여 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}

exports.exitGroup = async (req, res) => {
    try{
        const exitCheck = await groupService.ExitGroup(req.groupCode, req.uId);

        if(exitCheck)
        {
            console.log('그룹 나가기 성공');
            
            return res.status(200).json({
                message: '그룹 나가기 성공'
            });
        }
        else
        {
            console.log('그룹 나가기 실패');
            return res.status(404).json({
                success: false,
                message: '그룹 정보를 찾을 수 없습니다.'
            });
        }
    }
    catch(error)
    {
        console.error('그룹 나가기 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}