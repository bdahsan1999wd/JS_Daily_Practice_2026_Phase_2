/**
 * 🧩 PROBLEM–01: getConversionRate()

 * Logic: Calculate percentage of completed tests and handle division by zero.
 */

function getConversionRate(totalRecommended, totalCompleted) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalRecommended !== 'number' || typeof totalCompleted !== 'number' ||
        totalRecommended < 0 || totalCompleted < 0 || totalCompleted > totalRecommended) {
        return "Invalid Input";
    }

    // --- STEP 2: CHALLENGE LOGIC (Zero Check) ---
    if (totalRecommended === 0) {
        return "No Data available";
    }

    // --- STEP 3: CALCULATION & FORMATTING ---
    const rate = (totalCompleted / totalRecommended) * 100;
    return `${rate.toFixed(1)}%`;
}

// --- EXAMPLE USAGE ---
console.log(getConversionRate(100, 85));
console.log(getConversionRate(0, 0));