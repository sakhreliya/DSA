const arr = [9,22,5,7,3];
let min;
let temp = 0;

for(let i = 0; i < arr.length; i++){
    min = i;
    for(let j = i+1; j < arr.length; j++){
        if(arr[min] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        
    }
}
console.log(arr);