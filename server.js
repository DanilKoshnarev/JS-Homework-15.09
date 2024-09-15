const express = require('express');
const moment = require('moment');
const app = express();
const port = 3000;

function getDate() {
    return moment().format('YYYY/MM/DD HH:mm:ss');
}

app.get('/date', (req, res) => {
    const currentDate = getDate();
    console.log(currentDate);
    res.send(`Current date and time: ${currentDate}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
