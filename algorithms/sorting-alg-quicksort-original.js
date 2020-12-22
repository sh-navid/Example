//https://en.wikipedia.org/wiki/Sorting_algorithm#:~:text=Popular%20sorting%20algorithms%201%20Simple%20sorts.%20Two%20of,adding%20citations%20to%20reliable%20sources.%20More%20items...%20

//Concepts:
//---Stability      --This is Original and Unstable
//---Memory
//---Best
//---Avg
//---Worst

QuickSort = (arr, low, high) => {
    if (low < high) {
        p = Partition(arr, low, high);
        QuickSort(arr, low, p - 1);
        QuickSort(arr, p + 1, high);
    }
    return arr.A;
}

let Partition = (arr, low, high) => {
    console.log("Partition This: ", arr.A);
    let pivot = arr.A[high];
    let i = low;
    for (let j = low; j <= high; j++) {
        if (arr.A[j] < pivot) {
            [arr.A[i], arr.A[j]] = [arr.A[j], arr.A[i]];
            i++;
        }
    }
    [arr.A[i], arr.A[high]] = [arr.A[high], arr.A[i]];
    return i;
}

let arr = { A/* POINTER */: [33, 22, 88, 23, 45, 0, 44, 11] };
let res = QuickSort(arr, 0, arr.A.length - 1);
console.log(res);
