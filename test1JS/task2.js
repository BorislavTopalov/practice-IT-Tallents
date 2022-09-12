let text = "Today is Friday and its very hot.";
let newText = "";
let flag = false;

if (typeof text === "string") {
    let arr = text.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 6) {
            flag = true;
            break;
        }
    }
    if (flag) {
        newArr = arr.slice(0, 3);
    } else {
        newArr = arr.slice(0, 4);
    }
    newText = newArr.join("-")
    console.log(newText);
} else {
    console.log("Invalid input");
}