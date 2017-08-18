const express = require('express');
const app = new express();
const path = require('path');

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, './', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start, listening is 3000');
});
