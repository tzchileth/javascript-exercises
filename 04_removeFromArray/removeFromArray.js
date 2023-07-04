const removeFromArray = function (array, param) {
    // get the number of parameters passed to the function
    let argumentLength = arguments.length;

    if (argumentLength >= 2) {
        let currentIndex = 1;
        while (currentIndex < argumentLength) {
            let result = array.indexOf(arguments[currentIndex]);
            if (result != -1) {
                array = array.slice(0, result).concat(array.slice(result + 1));
                currentIndex++;
            } else {
                currentIndex++;
            }
        }
        return array;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
