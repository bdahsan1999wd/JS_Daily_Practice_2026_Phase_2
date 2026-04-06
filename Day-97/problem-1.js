// 🧩 PROBLEM–01: canSurgeonOperate()

// Logic: Check surgeon's readiness based on count, status, and rest hours.

function canSurgeonOperate(currentSurgeries, isOnCall, hoursSinceLastSurgery) {
    // --- STEP 1: VALIDATION ---
    if (typeof currentSurgeries !== 'number' || typeof isOnCall !== 'boolean' || typeof hoursSinceLastSurgery !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: EMERGENCY OVERTIME CHALLENGE ---
    if (currentSurgeries === 4 && hoursSinceLastSurgery > 8) {
        return "EMERGENCY_OVERTIME_ALLOWED";
    }

    // --- STEP 3: STANDARD AVAILABILITY LOGIC ---
    if (currentSurgeries < 4 && isOnCall === true && hoursSinceLastSurgery >= 2) {
        return true;
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(canSurgeonOperate(3, true, 3));
console.log(canSurgeonOperate(4, true, 10));