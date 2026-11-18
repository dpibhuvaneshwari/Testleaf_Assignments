// ASSIGNMENT 1 & 2:
// Find the length of the last word in a string


function lengthOfLastWord(s) {
    let trimmedString = s.trim();
    let words = trimmedString.split(/\s+/);
    let lastWord = words[words.length - 1];
    let length = lastWord.length;

    return length;
}


console.log("----- Last Word Length -----");

console.log(lengthOfLastWord("Hello World"));

console.log(lengthOfLastWord(" fly me to the moon "));

console.log(lengthOfLastWord("Welcome to JavaScript"));



// ASSIGNMENT 3:
// Check whether two strings are Anagrams


function isAnagram(str1, str2) {
    let string1 = str1.replace(/\s/g, "").toLowerCase();
    let string2 = str2.replace(/\s/g, "").toLowerCase();

    let array1 = string1.split("");
    let array2 = string2.split("");

    let sortedString1 = array1.sort().join("");
    let sortedString2 = array2.sort().join("");

    return sortedString1 === sortedString2;
}


console.log("----- Anagram Check -----");

console.log(isAnagram("listen", "silent"));

console.log(isAnagram("hello", "world"));

console.log(isAnagram("race", "care"));

console.log(isAnagram("Java", "avaj"));