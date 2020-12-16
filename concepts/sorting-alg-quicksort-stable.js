//https://en.wikipedia.org/wiki/Sorting_algorithm#:~:text=Popular%20sorting%20algorithms%201%20Simple%20sorts.%20Two%20of,adding%20citations%20to%20reliable%20sources.%20More%20items...%20

//Concepts:
//---Stability      --Stable Version Not Original and is not Standard
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
    return arr;
}

let Partition = (arr, low, high) => {
    let pivot = arr.A[high];
    let index = arr.I[high];
    let i = low;
    for (let j = low; j <= high; j++) {
        if (arr.A[j] + (arr.I[j] * influencer) < pivot + (index * influencer)) {
            [arr.A[i], arr.A[j]] = [arr.A[j], arr.A[i]];
            [arr.I[i], arr.I[j]] = [arr.I[j], arr.I[i]];
            i++;
        }
    }
    [arr.A[i], arr.A[high]] = [arr.A[high], arr.A[i]];
    [arr.I[i], arr.I[high]] = [arr.I[high], arr.I[i]];
    return i;
}

let influencer = 0.0000001;

let arr = {
    I/* INDEXES */: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    A/* POINTER */: [33, 22, 88, 33, 23, 45, 33, 89, 44, 11]
};
let res = QuickSort(arr, 0, arr.A.length - 1);
console.log(res);
