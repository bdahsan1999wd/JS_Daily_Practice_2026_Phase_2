// 🧩 PROBLEM–02: getCleaningStatus()

// Logic: Calculate remaining cleaning time for Operating Theater based on surgery type.

function getCleaningStatus(surgeryType, minutesSinceFinish) {
    // --- STEP 1: VALIDATION ---
    if (typeof surgeryType !== 'string' || typeof minutesSinceFinish !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: DEFINE THRESHOLDS ---
    let requiredTime = 0;
    if (surgeryType === "Major") requiredTime = 60;
    else if (surgeryType === "Minor") requiredTime = 30;
    else return "Invalid Input"; // Unknown surgery type challenge

    // --- STEP 3: STATUS CALCULATION ---
    if (minutesSinceFinish >= requiredTime) {
        return "OT_READY";
    } else {
        const remaining = requiredTime - minutesSinceFinish;
        return `Wait ${remaining} more minutes`;
    }
}

// --- EXAMPLE USAGE ---
console.log(getCleaningStatus("Major", 45));
console.log(getCleaningStatus("Minor", 35));