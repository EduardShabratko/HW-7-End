let array = ['399', 2, 8, null, 'Cool', 699, '33333', true, 'Number'];

function reverse(source) {
  let newArray = [];
  let reverseString = '';
 

  if (typeof source === 'string') {

      for (let i = source.length - 1; i >= 0; i--) {
          reverseString += source[i];
      }
  } else if (Array.isArray(source)) {
  
      for (let i = source.length - 1; i >= 0; i--) {
          newArray[newArray.length] = source[i];
      }
  }

  return reverseString || newArray;
}

let array1 = [3,33,-333,33333,333333,33333,3333];

function getAverage(source) {
    let average = 0;
    let sum = 0;

    for (let i = 0; i < source.length; i++) {
        sum += source[i];
    }
    average = sum/source.length;

    return average;
}

let array2 = [3,33,-333,33333,333333,33333,3333];

function getMin(source) {
    let number = source[0];

    for (let i = 1; i < source.length; i++) {
        
        if (source[i] < number) {
            number = source[i];
        }
    }
    
    return number;
}


let array3 = ['399', 2, 8, null, 'Cool', 699, '33333', true, 'Number'];

function verifyNumbers(source) {
    let newArray1 = [];
    let numberResalt;

    for (let i = 0; i < source.length; i++) {
        numberResalt = Number(source[i]);
        
        if (source[i] === numberResalt) {
            newArray1[newArray1.length] = source[i];
        }
    }
    return newArray1;
}





let array4 = ['Extra', 'Nice', 'Cool', 'Special', 'Favourite', 'Number'];

function getMaxString(source) {
    let maxLength = source[0];

    for (let i = 1; i < source.length; i++) {

        if(source[i].length > maxLength.length)
            maxLength = source[i];
    }

    return maxLength;
}


const util = {
  reverse,
  verifyNumbers,
  getMin,
  getAverage,
  getMaxString,
}

console.log(util.reverse(array));
console.log(util.verifyNumbers(array3));
console.log(util.getMin(array2));
console.log(util.getAverage(array1));
console.log(util.getMaxString(array4));
