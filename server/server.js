const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const publicPath = path.resolve(process.cwd(), 'dist');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

module.exports = app;
