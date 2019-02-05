const express = require('express');
const bodyParser = require('body-parser');

const options = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'schedule',
  },
};
const database = require('knex')(options);

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Schedule endpoint
// app.get('/espn/schedules', (req, res) => {
//   ScheduleDB.find({}, (err, data) => {
//   })
//     .limit(17)
//     .sort({ week: 1 })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.err(err);
//     });
// });
app.get('/espn/schedules', (req, res) => {
  database.select().from('stats').then((data) => {
    res.send(data);
  });
});

const port = process.env.PORT || 3007;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
