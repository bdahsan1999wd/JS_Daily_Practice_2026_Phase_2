// 🧩 PROBLEM–02: getSuhoorAdvice()

// Logic: Calculate energy hours based on nutrients with a cap of 16 hours.

function getSuhoorAdvice(proteinGrams, carbGrams, isDateIncluded) {

    // --- STEP 1: VALIDATION ---
    if (typeof proteinGrams !== 'number' || proteinGrams < 0 ||
        typeof carbGrams !== 'number' || carbGrams < 0 ||
        typeof isDateIncluded !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE BASE ENERGY HOURS ---
    // 10g protein = 2h, 10g carbs = 1.5h
    const proteinEnergy = (proteinGrams / 10) * 2;
    const carbEnergy = (carbGrams / 10) * 1.5;
    let totalEnergy = proteinEnergy + carbEnergy;

    // --- STEP 3: APPLY DATE BONUS ---
    if (isDateIncluded) {
        totalEnergy += 1;
    }

    // --- STEP 4: APPLY 16-HOUR CAP ---
    return totalEnergy > 16 ? 16 : totalEnergy;
}

// --- EXAMPLE USAGE ---
console.log(getSuhoorAdvice(40, 40, true));
console.log(getSuhoorAdvice(50, 60, true));
console.log(getSuhoorAdvice(-5, 20, false));