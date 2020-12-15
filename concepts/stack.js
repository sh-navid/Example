let stack = [];

//LIFO (last in, first out)

let print = () => { console.log("", stack.join(" - "), " < top") }

stack.push(2);
stack.push(4);
stack.push(6);

print();

stack.pop();
stack.push(10);

print();

//______________Implement With LinkedList________________
let Node = {
    data: null,
    next: null,
}

let stack = {
    head: null,
    size: 0
}

let init = () => {
    stack.head = null;
    stack.size = 0;
}

init();