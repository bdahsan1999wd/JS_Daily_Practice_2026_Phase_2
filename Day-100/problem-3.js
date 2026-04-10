// 🧩 PROBLEM–03: adjustMedicationDose()

// Logic: Calculate kidney-safe dosage and round to nearest whole number.

function adjustMedicationDose(baseDose, eGFR) {

    // --- STEP 1: VALIDATION ---
    if (typeof baseDose !== 'number' || typeof eGFR !== 'number' || baseDose < 0 || eGFR < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CONTRAINDICATED CHALLENGE ---
    if (eGFR < 30) return "CONTRAINDICATED: DOSE_NOT_SAFE";

    // --- STEP 3: DOSE CALCULATION ---
    let multiplier = 1;
    if (eGFR >= 90) multiplier = 1;
    else if (eGFR >= 60) multiplier = 0.75;
    else multiplier = 0.5;

    return Math.round(baseDose * multiplier);
}

// --- EXAMPLE USAGE ---
console.log(adjustMedicationDose(500, 45));
console.log(adjustMedicationDose(400, 25));