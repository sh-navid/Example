//https://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29

let stack = {
    data: [],
    size: 0
};

let pop = () => {
    if (stack.size == 0)
        return console.log("Stack is empty");
    let d = stack.data[stack.size - 1];
    stack.size--;
    stack.data = stack.data.slice(0,stack.size);
    console.log("Poped: ", d,", Stack: ", stack);
}

let push = (x) => {
    stack.data[stack.size] = x;
    stack.size++;
    console.log(stack);
}

push(11);
push(22);
push(33);

pop();
pop();
pop();
pop();
