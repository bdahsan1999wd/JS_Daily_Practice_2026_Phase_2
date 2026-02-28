/* 🧩 PROBLEM–03: categorizePatient()

This function demonstrates nested conditional logic specifically targeting the "Adult" category based on fasting status.
*/

function categorizePatient(age, isFasting) {

    // --- STEP 1: VALIDATION ---
    // Age must be an integer between 1 and 120; isFasting must be boolean
    if (!Number.isInteger(age) || age < 1 || age > 120 || typeof isFasting !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CATEGORIZATION ---
    if (age < 15) {
        return "Pediatric";
    }
    else if (age >= 60) {
        return "Senior Care";
    }
    else {
        // Adult Routine logic (Age 15-59)
        if (isFasting) {
            return "Adult Fasting Checkup";
        }
        return "Adult Routine";
    }
}

// --- EXAMPLE USAGE ---
console.log(categorizePatient(10, true));
console.log(categorizePatient(30, true));
console.log(categorizePatient(65, false));