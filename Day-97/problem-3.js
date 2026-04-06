// 🧩 PROBLEM–03: isBloodCompatible()

// Logic: Determine transfusion safety using universal donor/recipient rules.

function isBloodCompatible(patientType, donorType) {
    // --- STEP 1: VALIDATION ---
    const validTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    if (!validTypes.includes(patientType) || !validTypes.includes(donorType)) {
        return "Invalid Input";
    }

    // --- STEP 2: EXACT MATCH & UNIVERSAL RECIPIENT ---
    if (patientType === donorType || patientType === "AB+") {
        return true;
    }

    // --- STEP 3: UNIVERSAL DONOR CHALLENGE ---
    if (donorType === "O-") {
        return "UNIVERSAL_DONOR_USED";
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(isBloodCompatible("A+", "A+"));
console.log(isBloodCompatible("B+", "O-"));