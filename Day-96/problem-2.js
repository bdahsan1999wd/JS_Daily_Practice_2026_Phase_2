// 🧩 PROBLEM–02: needsCCUAdmission()

// Logic: Decide CCU admission based on heart rate and symptoms.

function needsCCUAdmission(heartRate, hasChestPain) {

    // --- STEP 1: VALIDATION ---
    if (typeof heartRate !== 'number' || typeof hasChestPain !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: IMMEDIATE ALERT CHALLENGE ---
    if (heartRate > 160) {
        return "IMMEDIATE_CARDIAC_ARREST_ALERT";
    }

    // --- STEP 3: ADMISSION LOGIC ---
    if ((heartRate > 120 || heartRate < 45) && hasChestPain === true) {
        return true;
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(needsCCUAdmission(130, true));
console.log(needsCCUAdmission(165, false));