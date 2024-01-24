const arr=[0,6,3,5,7,4,9];

for (let i = 0; i< arr.length; i++) 
{
    let swap=false;

    for (let j = 0;j < arr.length; j++)

    {  
        if (arr[j]>arr[j+1]) {
            let temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
            swap=true;
        }
    }
    if (swap==false) {
        break;
    }
}

console.log(arr);