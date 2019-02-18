require('newrelic');

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


// CRUD operation


// post
app.post('/espn/schedules', (req, res) => {
  const {
    id, vs, team, teamlogo, week, date, opponent, opponentlogo, result, winloss, wl, link, playerpass, playerrush, playerrec, pass, rush, rec,
  } = req.body;
  const body = {
    id: 21,
    vs: ' vs ',
    city: 'okc',
    team: 'Thunder',
    teamlogo: 'http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png',
    week: 21,
    date: '7-Feb-2019',
    opponent: 'Steelers',
    opponentlogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/pit.png&h=40&w=40',
    result: ' 13-3',
    winloss: '16-3',
    wl: ' W',
    link: 'http://www.espn.com/nfl/team/_/name/pit/pittsburgh-steelers',
    playerpass: 'Goff',
    playerrush: 'Brown',
    playerrec: 'Kupp',
    pass: 312,
    rush: 130,
    rec: 246,
  };
  database.insert(body).from('stats').then(() => {
    res.send('Successfully post data into DB!!!');
  });
});
// update

app.put('/espn/schedules', (req, res) => {
  database.where({
    id: 21,
  }).update({
    city: 'Oklahoma City',
  }).from('stats').then(() => {
    res.send('Successfully update the record into DB!!!!');
  });
});

// delete

app.delete('/espn/schedules', (req, res) => {
  database.where({
    id: 21,
  }).del().from('stats').then(() => {
    res.send('Successfully delete the record into DB!!!!');
  });
});
