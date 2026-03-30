// 🧩 PROBLEM–01: getTriagePriority()

// Logic: Determine patient priority based on body temperature and oxygen levels.

function getTriagePriority(temp, oxygen) {

    // --- STEP 1: VALIDATION ---
    // temp must be a number between 30-45; oxygen must be a number between 0-100
    if (typeof temp !== 'number' || temp < 30 || temp > 45 ||
        typeof oxygen !== 'number' || oxygen < 0 || oxygen > 100) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK CRITICAL CONDITION ---
    // If oxygen is below 90 AND temperature is high fever (>38.5)
    if (oxygen < 90 && temp > 38.5) {
        return "CRITICAL: IMMEDIATE ACTION";
    }

    // --- STEP 3: CHECK INDIVIDUAL CONDITIONS ---
    // If only oxygen is low, it's an Emergency
    if (oxygen < 90) {
        return "Emergency";
    }
    // If only temperature is high, it's Urgent
    else if (temp > 38.5) {
        return "Urgent";
    }
    // If everything is within safe range, it's Stable
    else {
        return "Stable";
    }
}

// --- EXAMPLE USAGE ---
console.log(getTriagePriority(39, 85));
console.log(getTriagePriority(37, 98));