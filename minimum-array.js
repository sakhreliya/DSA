class Stack {
    constructor() {
        this.stack = [];
        this.MinStack = [];
    }
    add(ele) {
        this.stack.push(ele);
        if (this.MinStack.length === 0 || ele < this.MinStack[this.MinStack.length - 1]) {
            this.MinStack.push(ele);
        }
    }
    remove() {
        if (this.stack.length === 0) {
            return 0;
        }
        const popEle = this.stack.pop();
        if (popEle === this.MinStack[this.MinStack.length - 1]) {
            this.MinStack.pop();
        }
        return popEle;
    }

    getMin() {
        if (this.MinStack.length === 0) {
            return null;
        }
        return this.MinStack[this.MinStack.length - 1];

    }
}

const data = new Stack();
data.add(2);
data.add(1);
data.add(9);
data.add(10);
console.log(data.stack);

data.remove();
console.log(data.MinStack);
console.log(data.getMin(),"=minimum");