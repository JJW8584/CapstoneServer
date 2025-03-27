const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    res.json({ message: "받았다" });
})

module.exports = router;