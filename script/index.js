let arrayOutput = document.getElementById('arrayOutput');
 let calButton = document.getElementById('calButton');

 function uniqueNumbers() {
     let array1 = [1, 4, 11, 111];
     let array2 = [1, 4, 11, 7];

     // using set to get unique values from array
     let uniqueArray1 = [...new Set(array1)];
     let uniqueArray2 = [...new Set(array2)];

     // combining arrays
     let result = [...uniqueArray1, ...uniqueArray2];
     arrayOutput.value = result.join(', '); 
 }
 calButton.addEventListener('click', uniqueNumbers);