/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();

  let charArr1 = a.split("")
  let charArr2 = b.split("")

  charArr1.sort()
  charArr2.sort()

  for(let i = 0; i < charArr1.length; i++) {
    if(charArr1[i] !== charArr2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
