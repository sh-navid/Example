//https://en.wikipedia.org/wiki/Sorting_algorithm#:~:text=Popular%20sorting%20algorithms%201%20Simple%20sorts.%20Two%20of,adding%20citations%20to%20reliable%20sources.%20More%20items...%20

//Concepts:
//---Stability
//---Memory
//---Best
//---Avg
//---Worst

let QuickSort = (arr, low, high) => {
    let ptr = { array: arr };
    if (low < high) {
        p = Partition(ptr, low, high);
        QuickSort(ptr, low, p - 1);
        QuickSort(ptr, p + 1, high);
    }
    return ptr.array;
}

let Partition = (ptr, low, high) => {
    let pivot = ptr.array[high];
    let i = low;
    for (let j = low; j <= high; j++) {
        if (ptr.array[j] < pivot) {
            [ptr.array[i], ptr.array[j]] = [ptr.array[j], ptr.array[i]];
            i++;
        }
    }
    [ptr.array[i], ptr.array[high]] = [ptr.array[high], ptr.array[i]];
    return i;
}

let arr, res = QuickSort(arr = [33, 22, 88, 23, 45, 0, 44, 11], 0, arr.length - 1);
console.log(res);
