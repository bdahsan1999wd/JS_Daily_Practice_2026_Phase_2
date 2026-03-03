// 🧩 PROBLEM–01: organizeMusalliRows()
// Logic: Calculate total full rows (units of 10) and find the remainder.

function organizeMusalliRows(totalMusallis) {

    // --- STEP 1: VALIDATION ---
    // Check if totalMusallis is a number and not negative
    if (typeof totalMusallis !== 'number' || totalMusallis < 0 || !Number.isInteger(totalMusallis)) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE ROWS ---
    // Math.floor handles the division to find how many full sets of 10 exist
    const fullRows = Math.floor(totalMusallis / 10);

    // --- STEP 3: CALCULATE REMAINDER ---
    // Modulo operator (%) gives the remaining people after filling full rows
    const remainingMusallis = totalMusallis % 10;

    return { fullRows, remainingMusallis };
}

// --- EXAMPLE USAGE ---
console.log(organizeMusalliRows(37));
console.log(organizeMusalliRows(40));