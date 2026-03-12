/**
 * ⚠️ Function Name: calculateGiftBudget()

 * Logic: Calculate gifts within budget with a 5% discount if more than 10 gifts are possible.
 */

function calculateGiftBudget(totalBudget, giftCost) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalBudget !== 'number' || totalBudget <= 0 ||
        typeof giftCost !== 'number' || giftCost <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY DISCOUNT (Challenge) ---
    // Rule: If initial budget allows more than 10 gifts, cost per gift decreases by 5%
    let finalGiftCost = giftCost;
    if (Math.floor(totalBudget / giftCost) > 10) {
        finalGiftCost = giftCost * 0.95;
    }

    // --- STEP 3: CALCULATE QUANTITY AND REMAINDER ---
    const giftCount = Math.floor(totalBudget / finalGiftCost);
    const remaining = totalBudget - (giftCount * finalGiftCost);

    return `Can buy ${giftCount} gifts, ${remaining} BDT left`;
}

// --- EXAMPLE USAGE ---
console.log(calculateGiftBudget(1000, 200));
console.log(calculateGiftBudget(2000, 150));