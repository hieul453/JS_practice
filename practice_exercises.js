"use strict";

// tip-split — a tiny bill-splitting & tip calculator.
//
// Structure (real-world layout for a small module):
//   1. Pure calculation functions — no side effects, easy to test/reuse.
//   2. Receipt rendering — the one place that prints.
//   3. main() — wires the data together and runs the demo.

// ---------------------------------------------------------------------------
// 1. Pure calculation functions
// ---------------------------------------------------------------------------

// Ex 4: truthy/falsy validation. Number() turns "" / null / undefined into
// NaN or 0, all of which fail the `> 0` checks — so one guard covers many
// bad inputs (0, "", null, undefined, NaN, negatives).
const isValidBill = (amount, people) => Number(amount) > 0 && Number(people) > 0;

// Currency lives in one helper so formatting stays consistent everywhere.
const formatMoney = (n) => n.toFixed(2);

// Ex 5 + Ex 8: just the tip. Coerce first, then decide — a bad percent
// ("abc", undefined, negative) defaults to 0 instead of poisoning the math.
const tipAmount = (bill, percent) => {
    const tip = Number(bill) * (Number(percent) / 100);
    return Number.isNaN(tip) || tip < 0 ? 0 : tip;
};

// Ex 5: grand total — reuses tipAmount rather than recomputing the tip.
const totalWithTip = (bill, percent) => Number(bill) + tipAmount(bill, percent);

// Ex 6: per-diner share — pure plumbing on top of totalWithTip.
// (Kept as a function declaration to show that style alongside the arrows.)
function perPerson(bill, percent, people) {
    return totalWithTip(bill, percent) / people;
}

// ---------------------------------------------------------------------------
// 2. Receipt rendering
// ---------------------------------------------------------------------------

// Ex 7: guard-clause first, then loop one line per person, then the total.
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

// ---------------------------------------------------------------------------
// 3. main() — data setup + demo
// ---------------------------------------------------------------------------

function main() {
    // Ex 1: const for values that never change, let for ones that might.
    const restaurantName = "The Noodle Bar";
    const billAmount = 84.5;       // a number, per the spec
    let tipPercent = 15;
    let partySize = 4;
    let discountCode;              // Ex 2: declared but unassigned → undefined

    // Ex 2: typeof of each variable.
    console.log(`typeof restaurantName -> ${typeof restaurantName}`);
    console.log(`typeof billAmount     -> ${typeof billAmount}`);
    console.log(`typeof tipPercent     -> ${typeof tipPercent}`);
    console.log(`typeof partySize      -> ${typeof partySize}`);
    console.log(`typeof discountCode   -> ${typeof discountCode}`);

    // Ex 3: a bill that arrived as a string — coerce, then prove it with ===.
    const arrivedBill = "84.50";
    console.log(`Coercion check: ${Number(arrivedBill) === 84.5}`); // true

    console.log("");
    printReceipt(restaurantName, billAmount, tipPercent, partySize);
}

main();

// Expose the pure functions so they could be imported/tested elsewhere.
if (typeof module !== "undefined") {
    module.exports = { isValidBill, tipAmount, totalWithTip, perPerson };
}
