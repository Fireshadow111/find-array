let array1 = [1,4,7,11,111]
let array2 =  [1, [5], [6, [[7]]],[8,9]]

let cArray =[]
function flat(array){
     return array.flat(10)
}

function compare(a,b){
    let first = flat(a)
    let second = flat(b)
    let poppedValues = []
    for (i of first){
        let x = first.shift()
        first.includes(x) || finalArray.includes(y) || poppedValues.includes(y) ? poppedValues.push(x): finalArray.push(x);
        first.push(x)
    }

    for(i of second){
        let y = second.shift()
        second.includes(y) || finalArray.includes(y) || poppedValues.includes(y) ? poppedValues.push(y): finalArray.push(y)
        second.push(y)
    }
    console.log(finalArray.sort((a,b)=> a-b));
}
    compare(array1,array2)

