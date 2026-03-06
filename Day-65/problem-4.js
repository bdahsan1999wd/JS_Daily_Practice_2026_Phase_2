/**
 * 🧩 PROBLEM–04: calculateFitraTotal()

 * * Logic: Aggregate Fitra amounts based on age using array reduction.
 */

function calculateFitraTotal(memberAges, baseRate) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(memberAges) || memberAges.length === 0 || typeof baseRate !== 'number' || baseRate <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTAL USING REDUCE ---
    // Challenge: Use .reduce() to handle the conditional 10% increase for children
    const total = memberAges.reduce((sum, age) => {
        const currentMemberFitra = age < 12 ? (baseRate * 1.1) : baseRate;
        return sum + currentMemberFitra;
    }, 0);

    // --- STEP 3: FIX PRECISION & CONVERT BACK TO NUMBER ---
    // Handle floating-point precision issues and ensure return type is Number
    return Number(total.toFixed(2));
}

// --- EXAMPLE USAGE ---
console.log(calculateFitraTotal([30, 25, 8], 115));
console.log(calculateFitraTotal([10, 5], 100));