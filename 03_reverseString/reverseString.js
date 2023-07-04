const reverseString = function (string) {
    let reversed = "";
    const STRING_LENGTH = string.length - 1;

    for (let i = STRING_LENGTH; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
