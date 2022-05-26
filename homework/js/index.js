const firstNumber = Number(prompt('Введите первое число'));
const operation = prompt('Введите операцию');
const secondNumber = Number(prompt('Введите второе число'));
if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Вы ввели не число! Пожалуйста введите число!")
}
else {

    if (operation === '-') {
        alert(`Ваш результат ${firstNumber - secondNumber}`);
    } else if (operation === '+') {
        alert(`Ваш результат ${firstNumber + secondNumber}`);
    } else if (operation === '*') {
        alert(`Ваш результат ${firstNumber * secondNumber}`);
    } else if (operation === '/') {
        alert(`Ваш результат ${firstNumber / secondNumber}`);
    }

    else {
        alert('Такой оперции не существует');
    }
}