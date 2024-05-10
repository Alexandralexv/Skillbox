let cardInBankATM = true;
let avaibleAmount = 500;
let input = prompt("Сколько хотите снять?");
console.log(`Ввод: ${input}`);

if (cardInBankATM && input <= avaibleAmount) {
    console.log("Операция выполняется");
}
else {
    console.log("Операция отклонена");
}
