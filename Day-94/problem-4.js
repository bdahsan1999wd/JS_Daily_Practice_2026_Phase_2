// 🧩 PROBLEM–04: getContrastStatus()

// Logic: Calculate contrast clearance time based on kidney function (eGFR).

function getContrastStatus(eGFR, hoursSinceInjection) {

    // --- STEP 1: VALIDATION ---
    if (typeof eGFR !== 'number' || eGFR <= 0 ||
        typeof hoursSinceInjection !== 'number' || hoursSinceInjection < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DETERMINE REQUIRED CLEARANCE TIME ---
    // Logic: Healthy kidneys (60+) = 24h, Low function (<60) = 48h
    let requiredHours = eGFR >= 60 ? 24 : 48;

    // --- STEP 3: COMPARE & RETURN STATUS ---
    // Challenge: If not cleared, return the remaining wait time
    if (hoursSinceInjection >= requiredHours) {
        return "Cleared";
    } else {
        const remaining = requiredHours - hoursSinceInjection;
        return `Wait ${remaining} more hours`;
    }
}

// --- EXAMPLE USAGE ---
console.log(getContrastStatus(70, 10));
console.log(getContrastStatus(45, 50));