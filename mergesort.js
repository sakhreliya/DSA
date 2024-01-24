const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const merge = [];

for (let i = 0; i < arr1.length; i++) {
    merge[i] = arr1[i];
}
for (let j = 0; j < arr2.length; j++) {
    merge[j + arr1.length] = arr2[j];
}

for (let k = 0; k < merge.length; k++) {
    for (let l = k + 1; l < merge.length; l++) {
        if (merge[k] > merge[l]) {
            let temp = merge[k];
            merge[k] = merge[l];
            merge[l] = temp;
        }

    }
}
console.log(merge);