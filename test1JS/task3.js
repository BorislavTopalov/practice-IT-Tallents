let arr = [1, 2, 3, 4, 5, 6];

function checkOddOrEven(array, odd, even, i) {
    if (i === array.length) {
        if (even < odd) {
            return "Нечетните са повече";
        } else if (even > odd) {
            return "Четните са повече";
        } else {
            return "Равни са";
        }
    } else if (array[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
    return checkOddOrEven(array, odd, even, ++i);
}
if (Array.isArray(arr)) {
    let result = checkOddOrEven(arr, 0, 0, 0);
    console.log(result);
} else {
    console.log("Invalid input");
}