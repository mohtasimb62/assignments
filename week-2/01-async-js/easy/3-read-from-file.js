const fs = require("fs")

fs.readFile('a.txt', 'utf-8', function (err, data) {
    console.log(data)
})

let a = 0;

for (let i = 0; i<100000;i++) {
    a = a + i;
    console.log(a);
}

