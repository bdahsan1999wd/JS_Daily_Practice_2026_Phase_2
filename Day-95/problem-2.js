// 🧩 PROBLEM–02: checkMedicationSafety()

// Logic: Cross-check a prescription against an allergy list (case-insensitive).

function checkMedicationSafety(prescription, allergies) {

    // --- STEP 1: VALIDATION ---
    if (typeof prescription !== 'string' || !Array.isArray(allergies)) {
        return "Invalid Input";
    }

    // --- STEP 2: CLEANING & SANITIZING ---
    // Challenge: Handle extra spaces and case-insensitivity
    const cleanPrescription = prescription.trim().toLowerCase();

    // --- STEP 3: ALLERGY CHECK ---
    // Check if the cleaned prescription exists in the cleaned allergy array
    const hasAllergy = allergies.some(allergy => {
        if (typeof allergy !== 'string') return false;
        return allergy.trim().toLowerCase() === cleanPrescription;
    });

    if (hasAllergy) {
        // Return original casing from input but trimmed for the final message
        return `DANGER: ${prescription.trim()} Allergy Detected`;
    }

    return "Safe";
}

// --- EXAMPLE USAGE ---
console.log(checkMedicationSafety("Penicillin ", ["Asprin", "penicillin"]));