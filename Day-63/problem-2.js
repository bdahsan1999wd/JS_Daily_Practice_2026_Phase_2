// 🧩 PROBLEM–02: calculateIftarCost()
// Logic: Calculate subtotal and apply a 5% service charge.

function calculateIftarCost(peopleCount, pricePerPlate) {

    // --- STEP 1: VALIDATION ---
    if (typeof peopleCount !== 'number' || peopleCount < 0 ||
        typeof pricePerPlate !== 'number' || pricePerPlate < 0) {
        return "Invalid Input";
    }

    if (peopleCount === 0) return 0;

    // --- STEP 2: CALCULATION ---
    const subtotal = peopleCount * pricePerPlate;
    const total = subtotal * 1.05; // 5% service charge (100% + 5%)

    return Math.round(total);
}

// --- EXAMPLE USAGE ---
console.log(calculateIftarCost(100, 150));