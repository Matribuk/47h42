const fs = require('fs')

function StartRport(){
    const lineToAdd = 'date id user bsq-tester-3ww https://github.com/Matribuk/none\n';
    const filePath = '.test.log';
    fs.appendFile(filePath, lineToAdd + '\n');
}

export default StartRport;