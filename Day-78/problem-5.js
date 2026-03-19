/**
 * 🧩 PROBLEM–05: calculateFinalBalance()

 * Logic: Sequentially apply percentage growth and stop if a negative rate is found.
 */

function calculateFinalBalance(initialAmount, growthRates) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof initialAmount !== 'number' || initialAmount <= 0 || !Array.isArray(growthRates)) {
        return "Invalid Input";
    }

    let currentBalance = initialAmount;

    // --- STEP 2: SEQUENTIAL GROWTH CALCULATION ---
    for (let rate of growthRates) {
        if (typeof rate !== 'number') return "Invalid Input";

        // --- STEP 3: RISK DETECTION (Challenge) ---
        // Rule: Stop immediately if rate is negative
        if (rate < 0) {
            return "Investment Risk Detected";
        }

        // Formula: Balance + (Balance * percentage / 100)
        currentBalance += (currentBalance * rate) / 100;
    }

    // --- STEP 4: FORMATTING ---
    // Return as number rounded to 2 decimal places
    return Number(currentBalance.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateFinalBalance(1000, [10, 5]));
console.log(calculateFinalBalance(1000, [10, -2]));