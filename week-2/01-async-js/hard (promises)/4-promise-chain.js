/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const wait = require("./1-promisify-setTimeout")

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, t)
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, t)
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, t)
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now()
    const ans = wait1(t1)

    ans.then(function(){
        return wait2(t2)
    }).then(function(){
        return wait3(t3)
    }).then(function(){
        const endTime = Date.now()
        console.log(endTime - startTime)
    })

}

calculateTime(5*1000, 5*1000, 2*1000)

module.exports = calculateTime;
