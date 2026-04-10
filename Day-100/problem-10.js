// 🧩 PROBLEM–10: validateSystemState()

// Logic: Night-shift readiness check with overload and minimal staff alerts.

function validateSystemState(staffCount, isGenReady, criticalPatients) {

    // --- STEP 1: VALIDATION ---
    if (typeof staffCount !== 'number' || typeof isGenReady !== 'boolean' || typeof criticalPatients !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: OVERLOAD CHALLENGE ---
    if (criticalPatients > staffCount) return "SYSTEM_OVERLOADED";

    // --- STEP 3: READINESS LOGIC ---
    if (isGenReady && staffCount >= 10) {
        if (staffCount <= 15) return "READY_MINIMAL_STAFF";
        return "READY";
    }

    return "SYSTEM_NOT_READY";
}

// --- EXAMPLE USAGE ---
console.log(validateSystemState(12, true, 5));
console.log(validateSystemState(18, true, 2));