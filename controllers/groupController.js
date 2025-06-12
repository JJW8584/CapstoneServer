const groupService = require('../services/groupService');
const userService = require('../services/userService');

exports.profile = async (req, res) => {
    const uId = req.body.globalUid;

    try{
        const result = await userService.getUserProfile(uId);

        if(result)
        {            
            console.log('프로필 호출 성공');
            
            // TODO: year, month, day 수정해야됨
            return res.status(200).json({
                'name': result.name,
                'year': result.year,
                'month': result.month,
                'day': result.day,
                'phone': result.phone,
                'status': result.isSafe, // 'SAFE', 'DANGER', 'CHECKING'
                'profileImage': null, 
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
                // TODO: name, image 수정
                data: result
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

exports.joinedGroups = async (req, res) => {
    const uId = req.body.globalUid;

    try{
        const result = await groupService.getJoinedGroups(uId);

        if(result)
        {
            console.log('그룹 호출 성공');
            
            return res.status(200).json({
                data: result
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

exports.groups = async (req, res) => {
    const uId = req.body.globalUid;

    try{
        const result = await groupService.getUserGroups(uId);

        if(result)
        {
            console.log('그룹 상세 호출 성공');
            
            // TODO: backgroundImage 있어야됨, 수정 요망
            return res.status(200).json({
                backgroundImage: null,
                groupNumber: result.id,
                groupName: result.name,
                inviteCode: result.inviteCode,
            });        
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

exports.members = async (req, res) => {
    const groupId = req.body.groupId;

    try{
        const result = await groupService.getGroupMembers(groupId);

        if(result)
        {
            console.log('그룹 멤버 호출 성공');
            
            // TODO: name, isLeader, status, location, relation 있어야됨
            return res.status(200).json({
                members: result
            });        
        }
        else
        {
            console.log('그룹 멤버 호출 실패');
        }
    }
    catch(error)
    {
        console.error('그룹 멤버 호출 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}

exports.join = async (req, res) => {
    const joinCode = req.body.joinCode;
    const uId = req.body.uId

    try{
        const result = await groupService.JoinGroup(joinCode, uId);

        if(result)
        {
            console.log('그룹 멤버 호출 성공');
            
            return res.status(200).json({
                members: result
            });        
        }
        else
        {
            console.log('그룹 멤버 호출 실패');
        }
    }
    catch(error)
    {
        console.error('그룹 멤버 호출 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}