const countVowel = (string) => {
  const vowels = "aeiouy";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (vowels.indexOf(char) != -1) {
      count++;
    }
  }
  return count;
}

const palindrome = (string) => {
  let reverse = "";
  for (let i = string.length - 1; i >=0; i--) {
    reverse += string[i]
  }

    if (reverse === string){
      return true
    }
    else {
      return false
    }
 }


userInput = prompt("Please enter a word:").toLowerCase();
counter = countVowel(userInput)
console.log("Word:", userInput)
console.log(`Vowel Count:`,counter)
console.log("Is this a palindrome?:",palindrome(userInput))

