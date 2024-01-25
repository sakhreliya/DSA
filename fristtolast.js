const arr = [1,2,3,4,5,6];
let element = arr[0];

let position = 7;

for(let i =0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
        arr[position-1] = element;
        
}
arr.length = arr.length-1
console.log(arr);