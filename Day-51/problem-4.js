// 🧩 PROBLEM–04: calculateTotalFitra()

// Logic: Calculate Fitra based on family size and commodity price + service fee.

function calculateTotalFitra(familyMembers, commodity, pricePerKg) {

    // --- STEP 1: VALIDATION ---
    const allowedCommodities = ["Dates", "Raisins", "Wheat"];

    if (!Number.isInteger(familyMembers) || familyMembers <= 0 ||
        !allowedCommodities.includes(commodity) ||
        typeof pricePerKg !== 'number' || pricePerKg <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    const baseAmount = familyMembers * 3.5 * pricePerKg;
    const totalWithFee = baseAmount + 2; // Adding $2 flat processing fee

    return totalWithFee;
}

// --- EXAMPLE USAGE ---
console.log(calculateTotalFitra(4, "Dates", 10));
console.log(calculateTotalFitra(2, "Gold", 5000));
console.log(calculateTotalFitra(1, "Wheat", 5));