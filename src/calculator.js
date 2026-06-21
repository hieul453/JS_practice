"use strict";

// calculator.js — các hàm TÍNH TOÁN thuần (pure functions).
// Không in ra màn hình, không đọc gì bên ngoài — chỉ nhận tham số và trả kết quả.
// Vì vậy chúng cực dễ test và tái sử dụng.

// Ex 5 + Ex 8: chỉ tính phần tip. Coerce trước, rồi mới quyết định — một
// percent rác ("abc", undefined, số âm) sẽ về 0 thay vì làm hỏng phép toán (NaN).
const tipAmount = (bill, percent) => {
    const tip = Number(bill) * (Number(percent) / 100);
    return Number.isNaN(tip) || tip < 0 ? 0 : tip;
};

// Ex 5: tổng tiền — tái dùng tipAmount thay vì tính lại tip.
const totalWithTip = (bill, percent) => Number(bill) + tipAmount(bill, percent);

// Ex 6: mỗi người trả bao nhiêu — chỉ là "ống nối" dựa trên totalWithTip.
// (Giữ dạng function declaration để minh họa kiểu khai báo này bên cạnh arrow.)
function perPerson(bill, percent, people) {
    return totalWithTip(bill, percent) / people;
}

module.exports = { tipAmount, totalWithTip, perPerson };
