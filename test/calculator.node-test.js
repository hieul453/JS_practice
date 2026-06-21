"use strict";

// Demo dùng test runner TÍCH HỢP của Node (node:test) — không cần cài gì.
// Chạy bằng:  node --test
const { test } = require("node:test");
const assert = require("node:assert");

const { tipAmount, totalWithTip, perPerson } = require("../src/calculator");
const { isValidBill } = require("../src/validation");

test("tipAmount tính đúng tip cơ bản", () => {
    assert.strictEqual(tipAmount(100, 15), 15);
});

test("tipAmount nhận percent là chuỗi", () => {
    assert.strictEqual(tipAmount(100, "15"), 15);
});

test("tipAmount trả 0 với input rác", () => {
    assert.strictEqual(tipAmount(100, "abc"), 0);
    assert.strictEqual(tipAmount(100), 0);
});

test("totalWithTip cộng cả tip vào bill", () => {
    assert.strictEqual(totalWithTip(100, 15), 115);
});

test("perPerson chia đều cho số người", () => {
    assert.strictEqual(perPerson(100, 15, 5), 23);
});

test("isValidBill từ chối input xấu", () => {
    assert.strictEqual(isValidBill(0, 4), false);
    assert.strictEqual(isValidBill(84.5, 0), false);
    assert.strictEqual(isValidBill(84.5, 4), true);
});
