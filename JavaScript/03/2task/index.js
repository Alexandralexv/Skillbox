let carPower = prompt("Мощность автомобиля:");

if (carPower < 100) {
    console.log(`Сумма налога: ${carPower * 12}`);
}
else if (carPower >= 100 && carPower < 125) {
    console.log(`Сумма налога: ${carPower * 25}`);
}
else if (carPower >= 125 && carPower < 150) {
    console.log(`Сумма налога: ${carPower * 35}`);
}
else if (carPower >= 150 && carPower < 175) {
    console.log(`Сумма налога: ${carPower * 45}`);
}
else if (carPower >= 175 && carPower < 200) {
    console.log(`Сумма налога: ${carPower * 50}`);
}
else if (carPower >= 200 && carPower < 225) {
    console.log(`Сумма налога: ${carPower * 65}`);
}
else if (carPower >= 225 && carPower < 250) {
    console.log(`Сумма налога: ${carPower * 75}`);
}
else {
    console.log(`Сумма налога: ${carPower * 150}`);
}

