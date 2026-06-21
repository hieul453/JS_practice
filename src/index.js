"use strict";

// index.js — ĐIỂM KHỞI CHẠY (entry point) của ứng dụng.
// Đây là file bạn chạy: `node src/index.js` (hoặc `npm start`).
// Nó chỉ lo việc "gắn dữ liệu thật vào và chạy", còn logic nằm ở các file src khác.

const { printReceipt } = require("./receipt");

function main() {
    // Ex 1: const cho giá trị không đổi, let cho giá trị có thể đổi.
    const restaurantName = "The Noodle Bar";
    const billAmount = 84.5;       // là number, đúng theo đề bài
    let tipPercent = 15;
    let partySize = 4;
    let discountCode;              // Ex 2: khai báo mà chưa gán → undefined

    // Ex 2: typeof của từng biến.
    console.log(`typeof restaurantName -> ${typeof restaurantName}`);
    console.log(`typeof billAmount     -> ${typeof billAmount}`);
    console.log(`typeof tipPercent     -> ${typeof tipPercent}`);
    console.log(`typeof partySize      -> ${typeof partySize}`);
    console.log(`typeof discountCode   -> ${typeof discountCode}`);

    // Ex 3: hóa đơn đến dưới dạng chuỗi — coerce, rồi chứng minh bằng ===.
    const arrivedBill = "84.50";
    console.log(`Coercion check: ${Number(arrivedBill) === 84.5}`); // true

    console.log("");
    printReceipt(restaurantName, billAmount, tipPercent, partySize);
}

if (require.main === module) {
    console.log(require.main === module);
    main();
} else {
    console.log(require.main === module);
    
}


