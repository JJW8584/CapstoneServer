const express = require('express');
const app = express();
const port = 3000;

// json 파싱
app.use(express.json());

const helloRouter = require('./routes/hello');
app.use('/hello', helloRouter);

// test
app.get('/', (req, res) => {
    res.send("Disaster API Server Running");
});

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
});

app.post('/test', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({ message: 'Data received', data });
})