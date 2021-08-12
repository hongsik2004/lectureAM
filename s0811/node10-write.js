const fs = require('fs').promises;

let str = `인붕이는 영어를 못해요. 다들 반응이 없어요. 원격은 너무 위험해요`;
let filename = "./data/write.txt";
fs.writeFile(filename, str)
    .then(function() {
        return fs.readFile(filename);
    })
    .then(function(data) {
        console.log(data.toString())
    }).catch(function(err) {
        console.log(err);
    });
