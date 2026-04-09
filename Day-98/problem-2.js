// 🧩 PROBLEM–02: calculateDosage()

// Logic: Calculate pediatric dose by weight with safety caps.

function calculateDosage(weightKg, mgPerKg) {

    // --- STEP 1: VALIDATION ---
    if (typeof weightKg !== 'number' || typeof mgPerKg !== 'number') return "Invalid Input";

    // --- STEP 2: SPECIALIST CHALLENGE ---
    if (weightKg < 2) return "REFER_TO_SPECIALIST";

    // --- STEP 3: CALCULATION & MAX CAP ---
    let dose = weightKg * mgPerKg;
    if (dose > 500) dose = 500;

    return parseFloat(dose.toFixed(1));
}

// --- EXAMPLE USAGE ---
console.log(calculateDosage(15, 10));
console.log(calculateDosage(60, 10));