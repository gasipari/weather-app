//
// // classic callback pattern
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Kigali', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// })
//
// // promises
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 3000);
//   });
// }
//
// getTempPromise('Kigali').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

function addPromise (a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === "number" && typeof b === "number") {
            resolve(a + b);
        }else {
            reject("a & b should be numbers!");
        }
    });
}

addPromise (2, "uiuiu").then(function (sum) {
    console.log("sucess", sum);
}, function (err) {
    console.log("error", err);
});
