// 디렉토리에 있는 파일 목록 알아내기

const fs = require('fs');
fs.readdir('tmp', function(e, files) {
    for (let file of files) {
        let filename = 'tmp/' + file;
        let stat = fs.statSync(filename);
        console.log(`${stat.size} Byte\t\t${file}`);
    }
});

// 파일 삭제하기
/* fs.unlink('tmp/tmp.txt', error => {
    if (error)
        throw error;
}); */

// 파일 이름 변경하기
// fs.rename(oldPath, newPath, callback)
/* fs.rename('tmp/tmp.txt', 'tmp/sync.txt', function(err) {
    if (err)
        console.log(err);
}); */