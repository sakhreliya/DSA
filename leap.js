const arr = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
let leap = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 == 0 || arr[i] % 100 != 0   && arr[i] % 400 == 0 ) {
        leap.push(arr[i]);
    }
}
console.log(leap);