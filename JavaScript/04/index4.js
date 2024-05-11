console.log('Задача №4');
// Задача 4
// Создайте функцию, которая бы прибавляла к глобальной переменной count + 1 и выводила результат в консоль.
// Пример:

// В программе записано значение переменной count = 3

// Вызов: countPlusOne()

// Вывод: 4

// Вызов: countPlusOne()

// Вывод: 5

let count = 3;

function countPlusOne() {
    count++;
    console.log(`Вывод: ${count}`);
}

countPlusOne();
countPlusOne();
