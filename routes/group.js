const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// 사용자 조회 api/group/profile
router.post('/profile', groupController.profile);

// 사용자가 속한 그룹 정보 호출 api/group/groups
router.post('/groups', groupController.groups);

// 그룹 생성 요청 api/group/createGroup
router.post('/createGroup', groupController.createGroup);

// 그룹 참여 요청 api/group/joinGroup
router.post('/joinGroup', groupController.joinGroup);

// 그룹 나가기 요청 api/group/exitGroup
router.post('/exitGroup', groupController.exitGroup);

// 대피소 호출 api/group/shelters
router.get('/shelters', groupController.shelters);

// 프로필 수정 api/group/editProfile
router.post('/editProfile', groupController.editProfile);

module.exports = router;