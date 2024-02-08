const fs = require("fs")

stuff = "Oh and I am also... nvm. Oh and this was done using fs.writeFile()"

fs.writeFile("a.txt", stuff, function(err, data){
    console.log("done")
    console.log(data)
});

console.log("Hi")