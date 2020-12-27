//Composite Design Pattern: Operating systems use to create directories inside other directories.

//component
//    |    \
//  Leaf    composite
//              |    \
//            Leaf    composite
//                    /   |
//           composite   Leaf
//               |
//             Leaf

let tree = [];

let Leaf = function (name) {
    this.nodes = [];
    this.name = name;
}

Leaf.prototype = {
    add: function (node) {
        this.nodes.push(node);
    },
    remove: function (node) {
        //implement
    },
    get: function (i) {
       return this.nodes[i];
    }
}

//-----------------------------Helpers------------------------------
//------------------------------------------------------------------

let iterate = function (i, node) {
    tree[i] = tree[i] === undefined ? "" : tree[i];
    tree[i] += node.name + "-";
    for (let k = 0; k < node.nodes.length; k++)
        iterate(i + 1, node.get(k), node);
}

let say = function (node) {
    tree = [];
    iterate(0, node);
    let log = "";
    for (let i = 0; i < tree.length; i++)
        log += tree[i] + ">";
    return log;
}

//------------------------------------------------------------------

test('GOF - Composite Design Pattern', () => {
    let root = new Leaf("names");
    root.add(new Leaf("boys"));
    root.add(new Leaf("girls"));

    expect(root.nodes[0].name).toEqual("boys");

    root.nodes[0].add(new Leaf("sam"));
    root.nodes[0].add(new Leaf("kevin"));
    root.nodes[1].add(new Leaf("kate"));
    root.nodes[1].add(new Leaf("rose"));

    expect(say(root)).toEqual("names->boys-girls->sam-kevin-kate-rose->");
    expect(say(root.get(0))).toEqual("boys->sam-kevin->");
});