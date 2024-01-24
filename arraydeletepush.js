const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let postion = 10;
let element = 10;
let last = arr[2];

for (let i = 0; i < arr.length; i++) 
{
    if (arr[i] == last) 
    {
        arr[i] = element;
    }
}
arr[postion - 1] = last;
console.log(arr);