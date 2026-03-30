// 🧩 PROBLEM–04: canDonateBlood()

// Logic: Check blood compatibility including specific universal rules.

function canDonateBlood(donorGroup, patientGroup) {

    // --- STEP 1: VALIDATION ---
    const validGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    // Ensure both inputs are strings
    if (typeof donorGroup !== 'string' || typeof patientGroup !== 'string') {
        return "Invalid Input";
    }

    // Convert to Uppercase for consistent comparison
    const donor = donorGroup.toUpperCase();
    const patient = patientGroup.toUpperCase();

    // Check if the blood groups provided are valid
    if (!validGroups.includes(donor) || !validGroups.includes(patient)) {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY UNIVERSAL RULES ---
    // O- is the universal donor; AB+ is the universal recipient
    if (donor === "O-" || patient === "AB+") {
        return true;
    }

    // --- STEP 3: CHECK FOR EXACT MATCH ---
    // If not universal, they must match exactly to return true
    return donor === patient;
}

// --- EXAMPLE USAGE ---
console.log(canDonateBlood("O-", "A+"));
console.log(canDonateBlood("B+", "AB-"));