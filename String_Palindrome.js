function reverseString(str) {
    let characters = str.split("");
    let reversed = "";
 
    for (let i = characters.length - 1; i >= 0; i--) {
        reversed = reversed + characters[i];
    }
 
    console.log("Reversed String:", reversed);
 
    return reversed;
}
 
function checkPalindrome(str) {
    let reversed = reverseString(str);
 
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}
 
// Test the function
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("hello"));
console.log(checkPalindrome("level"));
console.log(checkPalindrome("world"));
console.log(checkPalindrome("racecar"));