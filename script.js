const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    return "Неверные числовые аргументы";
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Деление на ноль невозможно" : num1 / num2;
    default:
      return "Неверный оператор";
  }
}

rl.question("Введите выражение (например, 10 + 5): ", (input) => {
  const [num1, operator, num2] = input.split(" ");

  const result = calculate(num1, operator, num2);
  console.log(`Результат: ${result}`);

  rl.close();
});
