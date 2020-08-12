const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const { VoiceResponse } = require('twilio').twiml;
const twilioClient = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

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
  console.log(`Twilio Account SID: ${process.env.TWILIO_ACCOUNT_SID}`);
  console.log(`Twilio Auth Token: ${process.env.TWILIO_AUTH_TOKEN}`);
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

app.post('/call', (req, res) => {
  res.header('Content-Type', 'application/json');
  const { phoneNumberTo } = req.body;
  console.log('/call', phoneNumberTo);
  twilioClient.calls
    .create({
      url: 'https://ericliu.ca/voice',
      to: `${phoneNumberTo}`,
      from: process.env.TWILIO_PHONE_NUMBER,
    })
    .then(call => {
      console.log(call.sid);
      res.send({
        callSid: call.sid,
      });
    });
});

module.exports = app;
