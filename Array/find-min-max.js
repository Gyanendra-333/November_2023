// JavaScript code for the approach

// Function to find minimum and maximum values in an array

function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    // Iterate through the array and compare each element with current min and max
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}
const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];
const { min, max } = findMinMax(arr);
console.log(min - ${ min } max - ${ max }); 
