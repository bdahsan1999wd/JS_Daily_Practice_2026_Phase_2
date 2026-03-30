// 🧩 PROBLEM–03: calculateTestCost()

// Logic: Calculate total lab bill with tiered discounts and a price ceiling.

function calculateTestCost(basePrice, testCount, isMember) {

    // --- STEP 1: VALIDATION ---
    // Price and count must be positive numbers; isMember must be boolean
    if (typeof basePrice !== 'number' || basePrice <= 0 ||
        typeof testCount !== 'number' || testCount <= 0 ||
        typeof isMember !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE INITIAL TOTAL ---
    let total = basePrice * testCount;

    // --- STEP 3: APPLY MEMBERSHIP DISCOUNT ---
    // Members get 15% off (Multiply by 0.85)
    if (isMember) {
        total = total * 0.85;
    }

    // --- STEP 4: APPLY BULK DISCOUNT ---
    // If 5 or more tests are ordered, apply an extra 10% discount on the current total
    if (testCount >= 5) {
        total = total * 0.90;
    }

    // --- STEP 5: APPLY PRICE CAP (LIMIT) ---
    // Final bill cannot exceed 10,000 BDT. If it does, cap it at 9999
    if (total > 10000) {
        return 9999;
    }

    // Return the final rounded amount
    return Math.round(total);
}

// --- EXAMPLE USAGE ---
console.log(calculateTestCost(2000, 6, true));
console.log(calculateTestCost(5000, 3, false));