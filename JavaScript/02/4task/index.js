let count = 1;
let year = 2024;

let name1 = prompt('Имя:', 'Alex');
let date1 = year - prompt('Дата рождения:', 2000)
let name2 = prompt('Имя:', 'Alex');
let date2 = year - prompt('Дата рождения:', 2000)
let name3 = prompt('Имя:', 'Alex');
let date3 = year - prompt('Дата рождения:', 2000)

console.log(`${count++} ${name1} ${date1}`);
console.log(`${count++} ${name2} ${date2}`);
console.log(`${count++} ${name3} ${date3}`);

console.log(`Средний возраст пользователей: ${(date1 + date2 + date3) / 3}`);