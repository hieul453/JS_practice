"use strict";


const resName = `The Noodle Bar`;
const billAmount = "84";
let tipPercent = 1;
let partSize = 4;
let discountCode;

console.log(`Type of resName is ${typeof resName}`);
console.log(`Type of billAmount is ${typeof billAmount}`);
console.log(`Type of tipPercent is ${typeof tipPercent}`);
console.log(`Type of partSize is ${typeof partSize}`);
console.log(`Type of discountCode is ${typeof discountCode}`);


const arrivedBill = `84.5`;
console.log(Number(arrivedBill) == billAmount);
console.log(Number(arrivedBill) === billAmount);



const isValidBill = (amount, people) => (Number(amount) > 0 && Number(people) > 0);

console.log(isValidBill("84.5", partSize));

const tipAmount = (bill, percent) => {
    const tip = bill * (percent / 100);
    return Number.isNaN(tip) || tip < 0 ? 0 : tip;
}

const totalWithTip = (bill, percent) => Number(bill) + tipAmount(bill, percent);

function perPerson(bill, percent, people) {
    return totalWithTip(bill, percent) / people;
}

printReceipt(resName, billAmount, tipPercent, partSize);

function printReceipt(restaurant, bill, percent, people) {

    if (!isValidBill(bill, people)) {
        console.log(`Invalid bill or people count`);
        return;
    }

    const amountPerPerson = perPerson(bill, percent, people);
    console.log(`Receipt for ${restaurant}`);
    console.log(`Bill Amount: $${bill}`);

    for (let i = 1; i <= people; i++) {

        console.log(`Person ${i} owes: $${amountPerPerson.toFixed(2)}\n`);
    }
}