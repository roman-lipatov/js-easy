// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.


function countOccurrences(str, char) {
  var len = str.length;
  var occurences = 0;

  for (i = 0; i < len; i++) {
    if (str[i] == char) {
      occurences = occurences + 1;
    }
  }

  return occurences;
}

// Приклади використання:
console.log(countOccurrences("hello world", 'o')); // Виведе: 2
console.log(countOccurrences("banana", 'a'));       // Виведе: 3

module.exports = countOccurrences;