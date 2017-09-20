console.log('Starting app');

setTimeout(() => {
    console.log('Inside the callback');
}, 2000);

setTimeout(() => {
    console.log('Inside the second callback');
}, 0);

console.log('Fishing up');