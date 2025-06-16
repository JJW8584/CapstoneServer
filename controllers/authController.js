const userService = require('../services/userService');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log('로그인 API 진입');
    console.log('로그인 정보 받음', req.body);

    // return res.status(200).json({
    //     success: true,
    //     message: '로그인 성공',
    //     token: 'test-token'
    // });

    try {
        // 1. 디비 서버에 로그인 요청 보내기
        const result = await userService.loginToDatabaseServer(email, password);

        // 2. 디비 서버가 응답했는지 확인
        if (result) {
            console.log('로그인 성공', result);
            return res.status(200).json({
                success: true,
                message: '로그인 성공',
                uid: result.uid
            });
        } else {
            console.log('로그인 실패');
            return res.status(401).json({
                success: false,
                message: result.message
            });
        }
    } catch (error) {
        console.error('로그인 중 서버 에러:');
        return res.status(500).json({
            success: false,
            message: '서버 오류가 발생했습니다.'
        });
    }
};

exports.register = async (req, res) => {
    const { userId, password, name, year, month, day, phone } = req.body;
    console.log('회원가입 API 진입');
    console.log('회원가입 정보 받음', req.body);
  
    // return res.status(201).json({
    //     success: true,
    //     message: '회원가입 성공'
    // });

    console.log(userId);
    try {
      // 디비 서버에 회원가입 요청
      const email = userId;
      const result = await userService.registerToDatabaseServer(email, password, name, year, month, day, phone);
  
      if (result) {
        console.log('회원가입 성공');
        return res.status(201).json({
          success: true,
          message: '회원가입 성공'
        });
      } else {
        console.log('회원가입 실패');
        return res.status(400).json({
          success: false,
          message: result.message || '회원가입 실패'
        });
      }
    } catch (error) {
      console.error('회원가입 중 서버 에러:', error);
      return res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.'
      });
    }
  };