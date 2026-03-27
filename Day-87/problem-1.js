/**
 * 🧩 PROBLEM–01: checkDosageSafety()

 * Logic: Flag prescriptions based on age and dosage strength to prevent pediatric errors.
 */

function checkDosageSafety(patientAge, dosageMg) {

    // --- STEP 1: VALIDATION ---
    if (typeof patientAge !== 'number' || typeof dosageMg !== 'number' || patientAge <= 0 || dosageMg <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: INFANT CRITICAL CHECK (Challenge) ---
    if (patientAge < 2 && dosageMg > 100) {
        return "CRITICAL: Consult Pediatrician";
    }

    // --- STEP 3: PEDIATRIC LOGIC (Under 12) ---
    if (patientAge < 12) {
        if (dosageMg > 500) return "Restricted";
        if (dosageMg > 250) return "Warning";
    }

    return "Safe";
}

// --- EXAMPLE USAGE ---
console.log(checkDosageSafety(10, 600));
console.log(checkDosageSafety(1, 150));