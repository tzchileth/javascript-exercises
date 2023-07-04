const repeatString = function (userString, num) {
    if (num < 0) {
        return 'ERROR';
    }
    else if (num === 0 && typeof (userString === "string")) {
        return '';
    } else if (num > 0 && typeof (userString === "string")) {
        let result = "";
        for (let i = 1; i <= num; i++) {
            result += userString;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
