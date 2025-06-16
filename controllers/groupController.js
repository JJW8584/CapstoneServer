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
        const { groupName, uId } = req.body;
        const result = await groupService.CreateGroup(groupName, uId);

        if(result)
        {
            console.log('그룹 생성 성공');
            return res.status(200).json({
                inviteCode: result.inviteCode,
                success: true,
                message: '그룹 생성에 성공했습니다.'
            });           
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
        console.error('그룹 생성 중 서버 에러:', error);
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
            
            return res.status(200).json({
                success: true,
                message: '그룹 정보를 불러왔습니다.',
                data: result
            });
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
        const { groupCode, uId } = req.body;
        const result = await groupService.JoinGroup(groupCode, uId);

        if(result)
        {
            console.log('그룹 참여 성공');
            
            return res.status(200).json({
                success: true,
                message: '그룹에 참여했습니다.'
            });
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
        const { groupCode, uId } = req.body;
        const exitCheck = await groupService.ExitGroup(groupCode, uId);

        if(exitCheck)
        {
            console.log('그룹 나가기 성공');
            
            return res.status(200).json({
                success: true,
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

exports.shelters = async (req, res) => {
    try{
        const result = await groupService.GetShelters();

        if(result)
        {
            console.log('대피소 호출 성공');
            
            return res.status(200).json({
                success: true,
                message: '대피소 호출 성공',
                data: result
            });
        }
        else
        {
            console.log('대피소 호출 실패');
            return res.status(404).json({
                success: false,
                message: '대피소 정보를 찾을 수 없습니다.'
            });
        }
    }
    catch(error)
    {
        console.error('대비소 호출 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}

// 유저 프로필 수정
exports.editProfile = async (req, res) => {
    try{
        const { uId, name, year, month, day, phone } = req.body;
        const result = await groupService.editUserProfile(uId, name, year, month, day, phone);

        if(result.success)
        {
            console.log('프로필 수정 완료');
            
            return res.status(200).json({
                success: true,
                message: '프로필 수정 성공'
            });
        }
        else
        {
            console.log('프로필 수정 실패');
            return res.status(404).json({
                success: false,
                message: '프로필 수정 실패'
            });
        }
    }
    catch(error)
    {
        console.error('프로필 수정 중 서버 에러:', error);
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
}