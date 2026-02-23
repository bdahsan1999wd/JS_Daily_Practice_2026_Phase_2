/**
 *🧩 PROBLEM–04: calculateTotalFitra()

 * Calculates total Fitra amount based on family size and commodity.
 * Logic: Maps commodity names to fixed rates and multiplies by member count.
 */

function calculateTotalFitra(familyMembers, commodity) {

    // --- STEP 1: VALIDATION ---
    // Family members must be a positive integer
    if (!Number.isInteger(familyMembers) || familyMembers <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DEFINE RATES ---
    const rates = {
        "Dates": 10,
        "Raisins": 15,
        "Wheat": 2
    };

    // --- STEP 3: COMMODITY CHECK & CALCULATION ---
    // Ensure the provided commodity exists in our records
    if (!rates.hasOwnProperty(commodity)) {
        return "Invalid Commodity";
    }

    return familyMembers * rates[commodity];
}

// --- EXAMPLE USAGE ---
console.log(calculateTotalFitra(5, "Dates"));
console.log(calculateTotalFitra(4, "Wheat"));
console.log(calculateTotalFitra(3, "Rice"));