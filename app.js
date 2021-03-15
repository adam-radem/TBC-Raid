# TBC-Raid
# © 2021 Adam Rademacher

'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send("Success").end();
});

const port = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

module.exports = app;
