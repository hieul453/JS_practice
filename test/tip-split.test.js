"use strict";

// tip-split.test.js — test cho các hàm thuần.
// Lưu ý: chỉ import từ src/calculator và src/validation — KHÔNG import index/receipt,
// nên chạy test sẽ không bị in cả hóa đơn demo ra. Test chỉ kiểm tra logic.

const { isValidBill } = require("../src/validation");
const { tipAmount, totalWithTip, perPerson } = require("../src/calculator");

let passed = 0;
let failed = 0;

const check = (label, got, want) => {
    const ok = got === want;
    ok ? passed++ : failed++;
    console.log(`${ok ? "✅ PASS" : "❌ FAIL"}  ${label}  →  got ${got}, want ${want}`);
};

console.log("--- tip-split tests ---");

// Các case lấy thẳng từ đề bài (stage1-exercises.md)
check("tipAmount(100, 15)", tipAmount(100, 15), 15);
check('tipAmount(100, "15")', tipAmount(100, "15"), 15);   // chuỗi vẫn chạy
check('tipAmount(100, "abc")', tipAmount(100, "abc"), 0);  // rác → 0
check("tipAmount(100)", tipAmount(100), 0);                // thiếu percent → 0

check("totalWithTip(100, 15)", totalWithTip(100, 15), 115);
check("perPerson(100, 15, 5)", perPerson(100, 15, 5), 23);

check("isValidBill(0, 4)", isValidBill(0, 4), false);
check("isValidBill(84.5, 0)", isValidBill(84.5, 0), false);
check("isValidBill(84.5, 4)", isValidBill(84.5, 4), true);

console.log(`--- Kết quả: ${passed} pass, ${failed} fail ---`);

// Thoát với mã lỗi khác 0 nếu có test fail — để CI/terminal biết là thất bại.
if (failed > 0) {
    process.exitCode = 1;
}
