// 🧩 PROBLEM–05: generateRemoteTriage()

// Logic: Symptom-based priority routing for remote patients.

function generateRemoteTriage(answers) {

    // --- STEP 1: VALIDATION ---
    if (!answers || typeof answers !== 'object') return "Invalid Input";
    const { isBreathingShort, hasChestPain, hasHighFever } = answers;

    // --- STEP 2: ER VISIT CHALLENGE (HIGHEST PRIORITY) ---
    if (isBreathingShort && hasChestPain) {
        return "IMMEDIATE_ER_VISIT_ADVISED";
    }

    // --- STEP 3: URGENT & STABLE LOGIC ---
    if (isBreathingShort || hasChestPain || hasHighFever) {
        return "URGENT_CONSULTATION_REQUIRED";
    }

    return "STABLE: MONITOR_SYMPTOMS";
}

// --- EXAMPLE USAGE ---
console.log(generateRemoteTriage({ isBreathingShort: true, hasChestPain: true, hasHighFever: false }));
console.log(generateRemoteTriage({ isBreathingShort: false, hasChestPain: false, hasHighFever: false }));