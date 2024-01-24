let arr = [2, 6, 3, 10, 5]
let target = 5;
let flag = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) {
            console.log(i, j);
            flag = 1;
        }
    }
}
if (flag == 0) {
    console.log("not found");
}