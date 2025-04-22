const express = require('express');
const cors = require('cors');
const locationRouter = require('./routes/location');
const authRouter = require('./routes/auth');
const { startDisasterPolling } = require('./utils/scheduler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 라우터 연결
app.use('/api/location', locationRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    console.log('시작 테스트');
    res.send('서버 작동중');    
});

// 에러 핸들링 미들웨어 (옵션)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: '서버 에러 발생' });
});

// 서버 시작과 동시에 재난 API 주기 호출 시작
startDisasterPolling();

// 서버 실행
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Main server running on port ${PORT}`);
});
