/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, n*1000)
    });

    return p;
}

const ans = wait(5)
ans.then(function(){
    console.log("YOOO")
})



module.exports = wait;
