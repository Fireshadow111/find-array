// Arrays
let array1 = [1, 4, 7, 11, 111];
let array2 = [1, [3], [5, [[9]]], [8, 14]];
let calButton = document.getElementById('calButton');

// Empty array to store unique numebers
let uniqueNumbers = [];

// Function to remove nested arrays
function flatten(array) {
    return array.flat(20);
}

function uniqueNum(a, b) {
    let array1 = flatten(a);
    let array2 = flatten(b);

    // Combine and comparing arrays
    let fusedArray = array1.concat(array2);

    // Loops through the combined array and to find unique numbers
    for (let value of fusedArray) {
        if (
            fusedArray.indexOf(value) === fusedArray.lastIndexOf(value) &&
            !uniqueNumbers.includes(value)
        ) {
            uniqueNumbers.push(value);
        }
    }
    
    // Sorting the unique numbers
    let result = uniqueNumbers.sort((a, b) => a - b);
    document.getElementById('arrayOutput').value = result.join(', ');
}

calButton.addEventListener('click', function(){
    uniqueNum(array1, array2)
})