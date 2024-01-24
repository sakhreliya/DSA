let stack = [];
let size = 5;

function print(stack) {
    if (stack.length === 0) {
        console.log("stack is underflow");
    } else {
        console.log(stack);
    }
}

function add(stack, element) {
    if (stack.length >= size) {
        console.log("stack is overflow");
    } else {
        stack.push(element);
    }
}
function remove(stack) {
    if (stack.length === 0) {
        console.log("stack is empty");
    } else {
        return stack.pop();
    }
}

function peek(stack) {
    if (stack.length === 0) {
        console.log("stack is empty");
    } else {
        console.log("peek element:", stack[stack.length - 2]);
    }
}

add(stack, 6);
add(stack, 1);
add(stack, 3);
add(stack, 5);

peek(stack);

remove(stack);

print(stack);
