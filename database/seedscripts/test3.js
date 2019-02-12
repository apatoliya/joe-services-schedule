var faker = require('faker');
var fs = require('fs');
var writeStream = fs.createWriteStream('data.csv', {
    flags: 'w'
});

const header = 'id,city,date,link,opponent,opponentlogo,pass,playerpass,playerrec,playerrush,rec,result,rush,team,teamlogo,vs,week,winloss,wl' + '\n';
writeStream.write(header);

writeStream.on('drain', function(){
    seedData();
});

function seedData() {
    for(let i=0;i< 10000000; i++){
        let finaldata = [];
        const ramSchedule = `${i}, ${faker.address.city()}, '08-dec-2018', ${faker.internet.url()}, ${faker.random.word()}, ${faker.image.abstract()}, ${faker.random.number()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.word()}, ${faker.random.number()}, ${faker.random.word()}, ${faker.random.number()},${faker.random.word()},${faker.image.abstract()}, 'vs', ${i}, ${faker.random.word()}, 'W'`;
        finaldata.push([ramSchedule]);
        let finalString = '';
        finaldata.forEach((row) => {
        finalString = finalString + row.join(',')  + '\n';
            });
            writeStream.write(finalString);

    }
    writeStream.end();
}
seedData();