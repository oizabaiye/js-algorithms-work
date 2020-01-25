/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels = ['a', 'e', 'i', 'o', 'u']

function vowelsCounter(text) {
    let counter = 0;

    // for of loop is a cleaner for loop (only for arrays, strings, maps, sets)
    for (let character of text.toLowerCase()) {
        // for each letter in the string
        // if that letter is in the vowels array, increment by 1
        if (vowels.includes(character)) {
            counter++
        }
    }
    return counter
}


//! This is faster
// regex version
function countingVowels(text) {
    // search for any of vowels, find all instances, case insensitive
    // without g flag, function will stop at first instance of the letter
    let matchingCounter = text.match(/[aeiou]/gi)

    if (matchingCounter) {
        return matchingCounter.length
    } else {
        return 0
    }

//? advanced challenge - find the vowels in a string then reverse them

function reverseVowels(str) {
    // returns an array of all the vowels in the string, small and cap letters (retains capitalization)
    let vowels = str.match(/[aeiouAEIOU]/g)

    //replace takes in two parameters: 1) the thing to find, and
    //2 what to replace it with (could be a function return)
    //replace by default loops through and can replace all
    return str.replace(/[aeiouAEIOU]/g, () => {
        return vowels.pop()
    })
}

}

module.exports = vowelsCounter;
