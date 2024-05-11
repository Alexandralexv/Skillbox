console.log('Задача №3');
// Задача 3
// Напишите функции для перевода градусов Цельсия в градусы Фаренгейта и градусов Фаренгейта в градусы Цельсия из предыдущей задачи в виде стрелочных функций.

// Дополнительно можете реализовать запись стрелочных функций в одну строку.

let celsiusToFahrenheit = celsius => celsius * 1.8 + 32

let fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8

console.log(`Вывод Фаренгейта: ${celsiusToFahrenheit(30)}`);
console.log(`Вывод Цельсия: ${fahrenheitToCelsius(86)}`);