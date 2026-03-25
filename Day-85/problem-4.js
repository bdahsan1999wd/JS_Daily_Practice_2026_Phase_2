/**
 * 🧩 PROBLEM–04: calculateBundlePrice()

 * Logic: Sum prices and apply tiered discounts based on the number of tests.
 */

function calculateBundlePrice(testPrices) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(testPrices) || testPrices.length < 2) return "Invalid Input";

    // --- STEP 2: CALCULATION ---
    const total = testPrices.reduce((sum, price) => sum + price, 0);
    const count = testPrices.length;
    let discount = 0;

    // --- STEP 3: DISCOUNT LOGIC (Challenge) ---
    if (count === 3) {
        discount = 0.10; // 10%
    } else if (count >= 5) {
        discount = 0.20; // 20%
    }

    const finalPrice = total - (total * discount);
    return Math.round(finalPrice);
}

// --- EXAMPLE USAGE ---
console.log(calculateBundlePrice([500, 500, 500]));
console.log(calculateBundlePrice([1000, 1000]));