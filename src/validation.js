"use strict";

// validation.js — kiểm tra dữ liệu đầu vào có hợp lệ không.
// Tách riêng vì "kiểm tra" là một mối quan tâm độc lập với "tính toán".

// Ex 4: Number() biến "", null, undefined thành NaN hoặc 0 — tất cả đều
// trượt phép `> 0`, nên một guard bắt được nhiều input rác cùng lúc
// (0, "", null, undefined, NaN, số âm).
const isValidBill = (amount, people) => Number(amount) > 0 && Number(people) > 0;

module.exports = { isValidBill };
