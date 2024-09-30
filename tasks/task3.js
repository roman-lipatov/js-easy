// Задача: Напишіть функцію sumArray, яка приймає масив чисел і 
// повертає їхню суму. Використовуйте цикл для обчислення суми.

function sumArray(numbers) {
  var len = numbers.length;
  var sum = 0;

  var i = 0;
  while (i < len) {
    sum += numbers[i];
    i = i + 1;
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Виведе: 15
console.log(sumArray([10, 20, 30]));    // Виведе: 60

module.exports = sumArray;