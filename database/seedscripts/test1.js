const faker = require('faker');
const fs = require('fs');


let finaldata = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 1000000; i++) {
  const ramSchedule = `${i}, ${faker.address.city()}, '08-dec-2018', ${faker.internet.url()}, ${faker.random.word()}, ${faker.image.abstract()}, ${faker.random.number()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.number()}, ${faker.random.word()}, ${faker.random.number()},${faker.random.word()},${faker.image.abstract()}, 'vs', ${i}, ${faker.random.word()}, 'W'`;
  finaldata.push([ramSchedule]);
}
console.log('this is finaldata length', finaldata.length); 
let finalString = '';
finaldata.forEach((row) => {
  finalString = finalString + row.join(',')  + '\n';
});
fs.appendFile('/private/tmp/seed1.csv', finalString, (err) => {
  if (err) console.log('Error: ', err);
  else {
    console.log('data has been created');
  }
});