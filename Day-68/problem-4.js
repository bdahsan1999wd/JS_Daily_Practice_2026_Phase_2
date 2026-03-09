/**
 * 🧩 PROBLEM–04: applyEidDiscount()

 * * Logic: Apply tiered discounts based on the purchase volume.
 */

function applyEidDiscount(totalAmount) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalAmount !== 'number' || totalAmount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE DISCOUNT RATE ---
    let discountRate = 0;
    if (totalAmount >= 5000) {
        discountRate = 0.15;
    } else if (totalAmount >= 2000) {
        discountRate = 0.10;
    } else {
        discountRate = 0.05;
    }

    // --- STEP 3: CALCULATE AND ROUND ---
    const finalPrice = totalAmount * (1 - discountRate);
    return Math.round(finalPrice);
}

// --- EXAMPLE USAGE ---
console.log(applyEidDiscount(5000));
console.log(applyEidDiscount(1500));