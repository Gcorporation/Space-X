const express = require('express');

const app = express();

app.use(express.static('./dist/sapcex-launch-program'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/sapcex-launch-program/'}),
);

app.listen(process.env.PORT || 8080);