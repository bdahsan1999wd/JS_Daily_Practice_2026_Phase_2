/**
 * ⚠️ Function Name: isFeatureEnabled()

 * Logic: Check if a feature is active, with restricted access for Beta modules.
 */

function isFeatureEnabled(flags, targetFeature) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(flags) || typeof targetFeature !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: BASIC TOGGLE CHECK ---
    const isPresent = flags.includes(targetFeature);

    // --- STEP 3: BETA RESTRICTION (Challenge) ---
    // Rule: BETA_ features require at least 3 other flags in the list
    if (targetFeature.startsWith("BETA_")) {
        return flags.length >= 3;
    }

    return isPresent;
}

// --- EXAMPLE USAGE ---
console.log(isFeatureEnabled(["Dark_Mode", "Sidebar"], "Dark_Mode"));
console.log(isFeatureEnabled(["Auth", "Logs"], "BETA_Ticketing"));