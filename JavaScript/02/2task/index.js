// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

let product1 = prompt('Название товара?', 'Молоко'); // Название товара 1
let price1 = prompt('Стоимость товара?', 75); // Стоимость товара  1
let count1 = prompt('Количество товара?', 1); // Количесто товара 1

console.log(product1, price1 * count1); // Вывод в консоль

let product2 = prompt('Название товара?', 'Кофе'); // Название товара 2
let price2 = prompt('Стоимость товара?', 420);  // Стоимость товара  2
let count2 = prompt('Количество товара?', 1); // Количесто товара 2

console.log(product2, price2 * count2); // Вывод в консоль
let product3 = prompt('Название товара?', 'Яблоки'); // Название товара 2
let price3 = prompt('Стоимость товара?', 80); // Стоимость товара  2
let count3 = prompt('Количество товара?', 2); // Количесто товара 2

console.log(product3, price3 * count3); // Вывод в консоль

console.log(+price1 * +count1 + +price2 * +count2 + +price3 * +count3);
