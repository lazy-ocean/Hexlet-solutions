/*
Algorithms — Bubble Sort
*/
const bubble = (arr) => {
    let steps = arr.length - 1;
    let swap;

    do {
        swap = false;
        for (let i = 0; i < steps; i++) {
            if (arr[i] > arr[i + 1]) {
                swap = true;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        steps -= 1;
    } while (swap);
    return arr;
};

console.log(bubble([1, 0, 6, 3, 7, 2, 10])); // [0, 1, 2, 3, 6, 7, 10]
console.log(bubbleSort([])); // []
console.log(bubbleSort([10, 1, 3])); // [1, 3, 10]
console.log(bubbleSort([0, 4, 0, 10, -3])); // [-3, 0, 0, 4, 10]