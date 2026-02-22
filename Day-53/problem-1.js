/**
 * 🧩 PROBLEM–01: calculateZakat()

 * * Logic: Calculates 2.5% Zakat if the total wealth meets or exceeds the Nisab ($600).
 */

function calculateZakat(totalWealth) {

    // --- STEP 1: VALIDATION ---
    // Ensure totalWealth is a non-negative number
    if (typeof totalWealth !== 'number' || totalWealth < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY NISAB THRESHOLD ---
    // If wealth is less than $600, no Zakat is required
    if (totalWealth < 600) {
        return 0;
    }

    // --- STEP 3: CALCULATION ---
    // Standard Zakat rate is 2.5% (or 0.025)
    return totalWealth * 0.025;
}

// --- EXAMPLE USAGE ---
console.log(calculateZakat(1000));
console.log(calculateZakat(500));
console.log(calculateZakat(-10));