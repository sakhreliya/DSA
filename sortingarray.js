let arr = [12, 11, 56,55, 1, 3]
let min;
let temp = 0;


for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {

            temp = arr[j]
            arr[j] = arr[i];
            arr[i] = temp;
        }

    }
}
console.log(arr);
