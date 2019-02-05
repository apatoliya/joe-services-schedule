const express = require('express');
const bodyParser = require('body-parser');
const ScheduleDB = require('../database/Models/ScheduleDB.js');


const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Schedule endpoint
app.get('/espn/schedules', (req, res) => {
  ScheduleDB.find({}, (err, data) => {
  })
    .limit(17)
    .sort({ week: 1 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.err(err);
    });
});


const port = process.env.PORT || 3007;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
