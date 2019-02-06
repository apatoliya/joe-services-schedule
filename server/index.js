const express = require('express');
const bodyParser = require('body-parser');
const cassandra = require('cassandra-driver');
const async = require('async');

// const options = {
//   client: 'mysql',
//   connection: {
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'schedule',
//   },
// };
// const database = require('knex')(options);

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
// app.get('/espn/schedules', (req, res) => {
//   database.select().from('stats').then((data) => {
//     res.send(data);
//   });
// });

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'schedule' });

const getAllData = 'SELECT * from schedule.stats  limit 17';

// client.connect((err, result) => {
//   console.log('index: cassandra connected');
// });


app.get('/espn/schedules', (req, res) => {
  client.execute(getAllData, [], (err, result) => {
    if (err) {
      res.send(404);
    } else {
      const finaldata = result.rows;
      const byID = finaldata.slice(0);
      byID.sort((a, b) => a.id - b.id);
      res.send(byID);
    }
  });
});

const port = process.env.PORT || 3007;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
