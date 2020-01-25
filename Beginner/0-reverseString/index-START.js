/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    // Code goes here
    return text.split('').reverse().join('')
}

    //option 2 - spread operation will split string into array too
function reverseString2(text) {
    return [...text].reverse().join('')
}

    //!faster
    //for loop
function reverse3(text) {
    let result = ''

    for (let i = text.length - 1; i >= 0; i--) {
        // this makes i countdown from 3, 2, 1, 0
        // and add each character to result
        result += text[i]
    }

    return result
}

    //!faster
    //for of loop
function reverse4(text) {
    let result = ''

    for (let element of text) {
        //for each character, add it to the front of result.
        // so t, et, xet, txet
        result = element + result
    }

    return result
}

// option 5 - reduce
    function reverse5(text) {
        // split text into array of characters
        // then call reduce method, 
        // add each character to the front of the new string
        return text.split('')
        .reduce((accumulator, currentValue) => {
            currentValue + accumulator
        })
    }

    //note that this also works for sentences
    // eg. console.log(reverse5('i am bad')) gives 'dab ma i'


module.exports = reverseString