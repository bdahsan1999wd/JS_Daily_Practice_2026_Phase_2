/* 🧩 PROBLEM–01: checkFastingSafety()

This function uses combined logical operators to categorize health risk based on glucose levels.
*/

function checkFastingSafety(sugarLevel, hasHistory) {

    // --- STEP 1: VALIDATION ---
    // Ensure sugarLevel is a positive number and hasHistory is a boolean
    if (typeof sugarLevel !== 'number' || sugarLevel <= 0 || typeof hasHistory !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: RISK EVALUATION ---
    // High Risk: Over 200 OR Over 150 with a medical history
    if (sugarLevel > 200 || (sugarLevel > 150 && hasHistory === true)) {
        return "High Risk";
    }
    // Consult Doctor: Between 120 and 200 inclusive, without history
    else if (sugarLevel >= 120 && sugarLevel <= 200 && hasHistory === false) {
        return "Consult Doctor";
    }
    // Safe: Below 120
    else if (sugarLevel < 120) {
        return "Safe";
    }

    // Safety fallback for edge cases
    return "Consult Doctor";
}

// --- EXAMPLE USAGE ---
console.log(checkFastingSafety(160, true));
console.log(checkFastingSafety(130, false));
console.log(checkFastingSafety(90, false));