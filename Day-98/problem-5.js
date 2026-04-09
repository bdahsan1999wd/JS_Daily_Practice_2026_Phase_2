// 🧩 PROBLEM–05: calculatePharmacyBill()

// Logic: Totaling items with selective tax and high-value discounts.

function calculatePharmacyBill(items) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(items)) return "Invalid Input";

    let subTotal = 0;
    let taxAmount = 0;

    // --- STEP 2: LOOP & SELECTIVE TAX ---
    for (let item of items) {
        if (typeof item.price !== 'number') return "Invalid Input";

        subTotal += item.price;
        if (item.isTaxFree === false) {
            taxAmount += (item.price * 0.05);
        }
    }

    let finalBill = subTotal + taxAmount;

    // --- STEP 3: DISCOUNT CHALLENGE ---
    if (subTotal > 1000) {
        finalBill *= 0.9; // 10% discount
    }

    return parseFloat(finalBill.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculatePharmacyBill([{ price: 100, isTaxFree: false }]));
console.log(calculatePharmacyBill([{ price: 1200, isTaxFree: true }]));