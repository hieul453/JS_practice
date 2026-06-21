"use strict";

// receipt.js — phần HIỂN THỊ. Đây là nơi duy nhất gọi console.log để in hóa đơn.
// Nó "nhập" logic từ các file khác và ghép lại thành output cho người dùng.

const { isValidBill } = require("./validation");
const { totalWithTip, perPerson } = require("./calculator");

// Định dạng tiền tệ gom về một chỗ để format luôn nhất quán.
const formatMoney = (n) => n.toFixed(2);

// Ex 7: guard-clause trước, rồi loop mỗi người một dòng, rồi dòng tổng.
const printReceipt = (restaurant, bill, percent, people) => {
    if (!isValidBill(bill, people)) {
        console.log("Invalid bill or people count");
        return;
    }

    const share = perPerson(bill, percent, people);
    const total = totalWithTip(bill, percent);

    console.log(`Receipt for ${restaurant}`);
    console.log(`Bill amount: $${formatMoney(Number(bill))}`);

    for (let i = 1; i <= people; i++) {
        console.log(`Person ${i} owes: $${formatMoney(share)}`);
    }

    console.log(`Total (incl. ${percent}% tip): $${formatMoney(total)}`);
};

module.exports = { formatMoney, printReceipt };
