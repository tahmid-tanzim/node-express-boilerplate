import express from 'express';

const
    app = express(),
    port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World\n');
});

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${server.address().port}`);
});

