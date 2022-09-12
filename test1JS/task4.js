let n = 3;
let allowedChars = "a,b,c,d";

function passHack(chars, arr, comb) {
    chars = allowedChars.split(",");
    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < chars.length; j++) {
            for (let k = 0; k < chars.length; k++) {
                arr.push([chars[i] + chars[j] + chars[k]])
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        comb += arr[i] + "\n";
    }
    console.log(comb);
}
passHack([], [], "");