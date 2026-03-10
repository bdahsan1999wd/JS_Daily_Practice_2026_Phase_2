/**
 * ⚠️ Function Name: getAnonymousDonations()

 * Logic: Filter donations by threshold and sort them in descending order.
 */

function getAnonymousDonations(donations, minAmount) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(donations) || typeof minAmount !== 'number' || minAmount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: FILTER & SORT ---
    // Challenge: Descending sort (highest to lowest)
    return donations
        .filter(amount => typeof amount === 'number' && amount >= minAmount)
        .sort((a, b) => b - a);
}

// --- EXAMPLE USAGE ---
console.log(getAnonymousDonations([100, 500, 50, 1000], 100));