//const userService = require('../services/userService');

exports.login = async (req, res) => {
    const { userId, password } = req.body;
    console.log('로그인 정보 받음', req.body);

    res.send(req.body);
};
