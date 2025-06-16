const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// 사용자 조회 api/group/profile
router.post('/profile', groupController.profile);

// 사용자가 속한 그룹 정보 호출 api/group/groups
router.post('/groups', groupController.groups);

// 그룹 참여 요청 api/group/join
router.post('/join', groupController.join);

module.exports = router;