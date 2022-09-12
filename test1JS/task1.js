function throwingDice() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(Math.ceil(Math.random() * 6));
    }
    return arr;
}
function sumOfThreeSix(counter, rolls) {
    while (counter < 6) {
        let array = throwingDice();
        if (Array.isArray(array)) {
            if (array[0] < 1 || array[0] > 6 || typeof array[0] !== "number" ||
                array[1] < 1 || array[1] > 6 || typeof array[1] !== "number" ||
                array[2] < 1 || array[2] > 6 || typeof array[2] !== "number") {
                console.log("Invalid throwing");
            } else {
                if (array[0] && array[1] && array[2] === 6) {
                    counter++;
                    rolls++;
                } else {
                    counter = 0;
                    rolls++;
                }
            }
        }
        if (counter === 6) {
            console.log(`Отне ${rolls} пъти да хвърли 6 пъти максимално число.`);
        } else {
            ("Invalid input");
        }
    }
}
sumOfThreeSix(0, 0);

