//to make new instance of "Node",
//you should define it with "function"
function Node() {
    this.data = null;
    this.next = null;
}

let stack = {
    head: null,
    size: 0
}

let init = () => {
    stack.head = null;
    stack.size = 0;
}

let push = (x) => {
    let nHead = new Node();
    nHead.data = x;
    nHead.next = stack.head;
    stack.head = nHead;
    stack.size++;

    console.log(JSON.stringify(stack));
}

let pop = () => {
    if (stack.head === null)
        return null;
    let ptr = stack.head;
    stack.head = ptr.next;
    stack.size -= 1;
    return ptr.data;
}

push(12);
push(13);
push(14);

console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());

push(12);
console.log(pop());

init();