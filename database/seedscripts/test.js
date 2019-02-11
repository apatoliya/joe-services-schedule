/* eslint-disable eol-last */

const faker = require('faker');
const fs = require('fs');

const header = 'id,city,date,link,opponent,opponentlogo,pass,playerpass,playerrec,playerrush,rec,result,rush,team,teamlogo,vs,week,winloss,wl' + '\n';
fs.writeFile('/private/tmp/seed1.csv', header, (err) => {
  if (err) console.log('Error: ', err);
  else {
    console.log('Header has been created');
  }
});

  