const express = require('express');
const bodyParser = require('body-parser');

const options = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'me',
    password: 'test123',
    database: 'schedule',
  },
};
const database = require('knex')(options);

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/espn/schedules', (req, res) => {
  database.select().from('stats').then((data) => {
    res.send(data);
  });
});
const port = process.env.PORT || 3008;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
