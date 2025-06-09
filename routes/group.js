const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// 사용자 조회 api/group/profile
router.post('/profile', groupController.profile);

// 그룹 내 Danger인 사람 호출 api/group/danger
router.post('/danger', groupController.danger )

// 사용자가 속한 그룹 호출 api/group/groups
router.post('/groups', groupController.getUserGroups);

module.exports = router;