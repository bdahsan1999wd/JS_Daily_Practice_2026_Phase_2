/**
 * 🧩 PROBLEM–03: calculateLabPayout()

 * Logic: Subtract platform commission unless the bill is below a minimum threshold.
 */

function calculateLabPayout(totalBill, commissionRate) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalBill !== 'number' || typeof commissionRate !== 'number' || totalBill < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: THRESHOLD LOGIC (Challenge) ---
    // No commission for small bills (under 500 BDT)
    if (totalBill < 500) {
        return Number(totalBill.toFixed(2));
    }

    // --- STEP 3: CALCULATION ---
    const commissionAmount = (totalBill * commissionRate) / 100;
    const finalAmount = totalBill - commissionAmount;

    return Number(finalAmount.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateLabPayout(1000, 10));
console.log(calculateLabPayout(400, 10));