// 🧩 PROBLEM–04: getSterilizationStatus()

// Logic: Track sterilization stages based on machine power status.

function getSterilizationStatus(currentStage, isMachineOn) {

    // --- STEP 1: VALIDATION ---
    if (typeof currentStage !== 'number' || currentStage < 1 || currentStage > 4 ||
        typeof isMachineOn !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK POWER CHALLENGE ---
    if (!isMachineOn) {
        return "ERROR: POWER_OFF";
    }

    // --- STEP 3: HANDLE CYCLE COMPLETE CHALLENGE ---
    if (currentStage === 4) {
        return "CYCLE_COMPLETE: READY_FOR_SURGERY";
    }

    // --- STEP 4: STAGE MAPPING ---
    const stages = {
        1: "Cleaning",
        2: "Disinfection",
        3: "Sterilization"
    };

    return stages[currentStage];
}

// --- EXAMPLE USAGE ---
console.log(getSterilizationStatus(2, true));
console.log(getSterilizationStatus(1, false));
console.log(getSterilizationStatus(4, true));