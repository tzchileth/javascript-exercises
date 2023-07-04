const sumAll = function (startInt, endInt) {
    let sum = 0;
    if (startInt < 0 || endInt < 0 || typeof (startInt) !== 'number' || typeof (endInt) !== 'number') {
        return 'ERROR';
    } else {
        if (startInt < endInt) {
            for (let i = startInt; i <= endInt; i++) {
                sum += i;
            }
        } else if (startInt > endInt) {
            for (let i = startInt; i >= endInt; i--) {
                sum += i;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
