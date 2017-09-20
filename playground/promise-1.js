var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(28, 4).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, '96');
}).then((res) => {
    console.log('Should be 128 ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey. It worked!');
//         // reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then(message => {
//     console.log('Success: ', message);
// }, errorMessage => {
//     console.log('Error: ', errorMessage);
// });