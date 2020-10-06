/* getIntersectionOfSortedArrays.js
Write and export by default getIntersectionOfSortedArrays() function that takes two sorted arrays and returns an array with common items of both argumented arrays.

For the purpose of this task AND for decreasing the complexity to O(n + m) use this algorithm:
Take two indexes for every array, starting from 0. Check two array items of these indexes: if they are equal, add one of them to the resulting array and increment both indexes.
If the first one is larger than the other, increment the index of the array with the lesser one.
*/

const getIntersectionOfSortedArrays = (arr, arr2) => {
    let result = [];
    let i = 0,
        j = 0;
    while (i < arr.length && j < arr2.length) {
        if (arr[i] === arr2[j]) {
            result.push(arr[i]);
            i++;
            j++;
        } else {
            (arr[i] > arr2[j]) ? j++ : i++;
        }
    }
    return result;
};


console.log(getIntersectionOfSortedArrays([], [])); // []
console.log(getIntersectionOfSortedArrays([1], [])); // []
console.log(getIntersectionOfSortedArrays([], [2])); // []
console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4])); // []
console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])); // [10, 24]
console.log(getIntersectionOfSortedArrays([3, 5, 10], [10, 12, 19, 21])); // [10]
console.log(getIntersectionOfSortedArrays([10, 12, 19, 21], [3, 5, 10])); // [10]