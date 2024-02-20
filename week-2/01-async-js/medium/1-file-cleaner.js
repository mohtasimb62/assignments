const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log("Before cleaning:");
    console.log(data);
    console.log("After cleaning:");
    data = data.replace(/\s+/g, " ");
    fs.writeFile("a.txt", data, (err) => {
        console.log(data);
    })
})