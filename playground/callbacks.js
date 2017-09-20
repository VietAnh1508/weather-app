function add(num1, num2) {
    return num1 + num2;
}

var num1, num2, num3;

num1 = add(1, 2);
num2 = add(num1, 3);
num3 = add(num2, 4);

console.log(num3);

console.log('Before callback');
var sum;
setTimeout(() => {
    sum = 1 + 2;
}, 1000);

console.log(sum);

console.log('Use callback');
function addSync(num1, num2, callback) {
    var success = num1 + num2;
    setTimeout(() => {
        callback(success);
    }, 1000);
};

// callback hell
addSync(1, 2, success => {
    var num1 = success;
    console.log('1 + 2 = ', num1);

    addSync(num1, 3, success => {
        num2 = success;
        console.log('1 + 2 + 3 = ', num2);
    })
});