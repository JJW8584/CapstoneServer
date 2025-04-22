//const userService = require('../services/userService');

exports.login = async (req, res) => {
    const { userId, password } = req.body;
    console.log('로그인 API 진입');
    console.log('로그인 정보 받음', req.body);

    //TODO: db로그인 요청, 성공/실패 여부 판정

    // 테스트 응답 구조
    res.status(200).json({
        success: true,
        message: '로그인 성공',
        token: 'test-token'
    });
};
