// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  var len = str.length;
  var letters = "aeiouAEIOU";
  var newStr = "";

  for(i = 0; i < len; i++) {
    if (letters.includes(str[i])) {
      newStr += "*";
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;