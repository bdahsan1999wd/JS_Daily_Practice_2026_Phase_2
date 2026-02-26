/* 🧩 PROBLEM–01: validateZakatEligibility()

This function evaluates Zakat eligibility based on net wealth after settling debts.
*/

function validateZakatEligibility(assetValue, debtAmount) {

    // --- STEP 1: VALIDATION ---
    // Both inputs must be numbers and non-negative
    if (typeof assetValue !== 'number' || assetValue < 0 || typeof debtAmount !== 'number' || debtAmount < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: LOGIC ---
    // Calculate net wealth
    const netWealth = assetValue - debtAmount;
    const NISAB_THRESHOLD = 600;

    // Return true if net wealth meets or exceeds threshold, otherwise false
    return netWealth >= NISAB_THRESHOLD;
}

// --- EXAMPLE USAGE ---
console.log(validateZakatEligibility(1000, 200));
console.log(validateZakatEligibility(700, 200));
console.log(validateZakatEligibility(-100, 0));