// Arrays
let array1 = [1, 4, 7, 11, 111];
let array2 = [1, [3], [5, [[9]]], [8, 14]];

// Empty array to store unique numebers
let uniqueNumbers = [];

// Function to remove nested arrays
function flatten(array) {
    return array.flat(20);
}

function uniqueNum(a, b) {
    let first = flatten(a);
    let second = flatten(b);

    // Combine and comparing arrays
    let combinedArray = first.concat(second);

    // Loops through combined array and to find unique numbers
    for (let value of combinedArray) {
        if (
            combinedArray.indexOf(value) === combinedArray.lastIndexOf(value) &&
            !uniqueNumbers.includes(value)
        ) {
            uniqueNumbers.push(value);
        }
    }
    // Sorting the unique numbers
    let result = uniqueNumbers.sort((a, b) => a - b);
    document.getElementById('arrayOutput').value = result.join(', ');
}
uniqueNum(array1, array2);