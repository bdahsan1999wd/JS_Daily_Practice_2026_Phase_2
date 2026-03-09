/**
 * 🧩 PROBLEM–02: getSalamiReport()

 * * Logic: Sum up Salami expenses and compare against the available budget.
 */

function getSalamiReport(budget, salamiList) {

    // --- STEP 1: VALIDATION ---
    if (typeof budget !== 'number' || budget <= 0 || !Array.isArray(salamiList)) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TOTAL EXPENSE ---
    // Challenge: Use .reduce() to sum the array
    const totalSalami = salamiList.reduce((acc, curr) => acc + curr, 0);
    const result = budget - totalSalami;

    // --- STEP 3: RETURN COMPARISON ---
    if (result === 0) {
        return "Budget Exhausted";
    } else if (result > 0) {
        return `Balance: ${result}`;
    } else {
        return `Shortage: ${Math.abs(result)}`;
    }
}

// --- EXAMPLE USAGE ---
console.log(getSalamiReport(2000, [500, 500, 1000]));
console.log(getSalamiReport(1000, [200, 300]));