/**
 * ⚠️ Function Name: distributeFitra()

 * Logic: Use integer division for families and the remainder for the office fund.
 */

function distributeFitra(totalFitra, numFamilies) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalFitra !== 'number' || typeof numFamilies !== 'number' ||
        totalFitra <= 0 || numFamilies <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE DISTRIBUTION ---
    const amountPerFamily = Math.floor(totalFitra / numFamilies);
    const officeFund = totalFitra % numFamilies;

    return {
        amountPerFamily: amountPerFamily,
        officeFund: officeFund
    };
}

// --- EXAMPLE USAGE ---
console.log(distributeFitra(10050, 10));
console.log(distributeFitra(5003, 5));