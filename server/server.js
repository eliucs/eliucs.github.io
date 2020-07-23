const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const { VoiceResponse } = require('twilio').twiml;

const publicPath = path.resolve(process.cwd(), 'public');
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

app.post('/voice', (req, res) => {
  const songUrl = 'https://eliucs.s3.amazonaws.com/audio/irene3.mp3';
  const twiml = new VoiceResponse();
  twiml.play(songUrl);
  res.header('Content-Type', 'text/xml');
  res.send(twiml.toString());
});

module.exports = app;
