const arr = [4, 7, 8, 9, 2];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = 0;
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp
        }

    }

}
console.log(arr);