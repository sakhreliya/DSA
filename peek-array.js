class peakElement {
    constructor() {
        this.arr = [];
    }
    add(element) {
        this.arr.push(element);
    }
    peak() {
        this.n = this.arr.length;
        if (this.n === 1) {
            return 0;
        }
        if (this.arr[0] > this.arr[1]) {
            return 0;
        }
        if (this.arr[this.n - 1] > this.arr[this.n - 2]) {
            return this.n - 1;
        }
        let low = 1;
        let high = this.n - 2;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (this.arr[mid] > this.arr[mid + 1] && this.arr[mid] > this.arr[mid - 1]) {
                return mid;
            }
            if (this.arr[mid] > this.arr[mid + 1]) {
                high = mid - 1;
            }
            else if (this.arr[mid] > this.arr[mid - 1]) {
                low = mid + 1;
            }
            else {
                high = mid - 1;

            }
        }
        return -1;
    }

}
let obj = new peakElement();
obj.add(1);
obj.add(2);
obj.add(4);
obj.add(5);

console.log(obj.arr);
const peakFinder = obj.peak()
console.log("peak element at index of array is: ", peakFinder);