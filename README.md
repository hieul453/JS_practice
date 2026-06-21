# tip-split

A tiny command-line bill-splitting & tip calculator — Stage 1 JS practice.

Nhận một hóa đơn nhà hàng, cộng tip, rồi chia đều cho nhóm và in ra hóa đơn.

## Cấu trúc dự án

```
.
├── package.json              # thông tin dự án + scripts
├── practice_exercises.js     # bản bài tập gốc (1 file) — giữ lại để ôn
├── src/
│   ├── validation.js         # isValidBill — kiểm tra dữ liệu
│   ├── calculator.js         # tipAmount, totalWithTip, perPerson — tính toán
│   ├── receipt.js            # formatMoney, printReceipt — hiển thị
│   └── index.js              # entry point: gắn dữ liệu + chạy
└── test/
    └── tip-split.test.js     # test cho các hàm thuần
```

Ý tưởng: mỗi file lo **một việc** (separation of concerns). Logic tính toán
(`calculator.js`) không biết gì về việc in ấn; phần in (`receipt.js`) đi nhập
logic về dùng. Nhờ vậy test chỉ cần kiểm tra `calculator`/`validation` mà không
kéo theo phần in hóa đơn.

## Cách chạy

```bash
# chạy ứng dụng (in hóa đơn demo)
npm start
# hoặc: node src/index.js

# chạy test
npm test
# hoặc: node test/tip-split.test.js
```

## Luồng phụ thuộc (ai import ai)

```
index.js
   └── receipt.js
          ├── validation.js
          └── calculator.js
```
