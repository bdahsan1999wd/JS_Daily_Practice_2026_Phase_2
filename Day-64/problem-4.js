/**
 * 🧩 PROBLEM–04: isZakatEligible()

 * Logic: Check net wealth against Nisab and calculate 2.5% zakat.
 */

function isZakatEligible(totalAssets, debts) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalAssets !== 'number' || typeof debts !== 'number' || totalAssets < 0 || debts < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: NET WEALTH CALCULATION ---
    const NISAB = 80000;
    const netWealth = totalAssets - debts;

    // --- STEP 3: ELIGIBILITY CHECK ---
    if (netWealth >= NISAB) {
        // Calculate 2.5% (0.025) and round to nearest integer
        const zakatAmount = Math.round(netWealth * 0.025);
        return `Eligible | Zakat: ${zakatAmount}`;
    } else {
        return "Not Eligible";
    }
}

// --- EXAMPLE USAGE ---
console.log(isZakatEligible(100000, 10000));
console.log(isZakatEligible(50000, 5000));