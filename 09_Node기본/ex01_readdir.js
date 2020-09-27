const fs = require('fs');

fs.readdir('tmp', function(e, files) {
    for (let file of files) {
        let filename = 'tmp/' + file;
        let stat = fs.statSync(filename);
        let mTime = stat.mtime.toISOString().replace(/T/, ' ');
        console.log(`${mTime}\t${stat.size}Byte\t${file}`);
    }
});