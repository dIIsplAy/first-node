let fs = require('fs');

fs.writeFile('yasuo.txt', 'hasagi.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
// fs.readFile('./yasuo.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
let files = fs.readdirSync("./");
for (let i in files) {
    console.log(files[i]);
}