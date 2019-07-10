const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getMessage', (req, res) => res.send({ message: "Hello" }));

app.listen(process.env.PORT || 8642, () => console.log(`Listening on port ${process.env.PORT || 8642}!`));
