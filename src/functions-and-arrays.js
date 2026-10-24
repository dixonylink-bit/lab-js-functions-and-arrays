// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
    return num1;
    } else { 
        return num2;
    }
}
console.log(maxOfTwoNumbers(40, 20))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {

if (wordsArray.length === 0) {
        return null;

}
    let longest = wordsArray[0]
for (let i= 0; i < wordsArray.length; i++){


    if (wordsArray[i].length > longest.length) {
        longest = wordsArray[i]
    } 
} 
 return longest
}

console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
   let total = 0;

   for (let i=0; i < numbersArray.length; i++) {
    total += numbersArray[i]
   }
   return total

}
const result = sumNumbers(numbers)
console.log(result)



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
   

    
    const sum = sumNumbers (numbersArray)
        const count = numbersArray.length;
        return sum / count;
    }

console.log (averageNumbers(numbers2))




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToFind) {

    if ( wordsArray === 0) {
        return null
    }

    for (let i=0; i < wordsArray.length; i++) {
        if (wordsArray[i] === wordToFind) {
            return true
        }
    }

    return false
}

console.log(doesWordExist(words2, "disobedience"))
console.log(doesWordExist(words2, "obejction"))
console.log(doesWordExist(words2, "trouble"))
console.log(doesWordExist(words2, "subset"))
console.log(doesWordExist([], "subset"))
console.log(doesWordExist("machine"))