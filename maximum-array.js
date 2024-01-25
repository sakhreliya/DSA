class Stack {
    constructor() {
        this.stack = [];
        this.MaxStack = [];
    }
    add(ele) {
        this.stack.push(ele);
        if (this.MaxStack.length === 0 || ele > this.MaxStack[this.MaxStack.length - 1]) {
            this.MaxStack.push(ele);
        }
    }
    remove() {
        if (this.stack.length === 0) {
            return 0;
        }
        const popEle = this.stack.pop();
        if (popEle === this.MaxStack[this.MaxStack.length - 1]) {
            this.MaxStack.pop();
        }
        return popEle;
    }

    getMax() {
        if (this.MaxStack.length === 0) {
            return null;
        }
        return this.MaxStack[this.MaxStack.length - 1];
    }
}

const data = new Stack();
data.add(12);
data.add(5);
data.add(9);
data.add(6);
data.add(38);
console.log(data.stack);
console.log(data.getMax(), "=maximum");
