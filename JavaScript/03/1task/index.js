let cardInBankATM = true;
let avaibleAmount = 500;

if (cardInBankATM && prompt("Сколько хотите снять?") <= avaibleAmount) {
    console.log("Операция выполняется");
}
else {
    console.log("Операция отклонена");
}
