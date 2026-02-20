// 🧩 PROBLEM–03: getDhikirMilestone()

// Logic: Assign a user tier based on prayer count and daily consistency.

function getDhikirMilestone(count, consecutiveDays) {

    // --- STEP 1: VALIDATION ---
    // Ensure inputs are integers and positive
    if (!Number.isInteger(count) || count < 0 || !Number.isInteger(consecutiveDays) || consecutiveDays < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK MILESTONES (PRIORITY LOGIC) ---
    if (count >= 1000 && consecutiveDays >= 10) {
        return "Elite";
    }
    else if ((count >= 300 && count <= 999) || (consecutiveDays >= 5 && consecutiveDays <= 9)) {
        return "Consistent";
    }
    else {
        return "Beginner";
    }
}

// --- EXAMPLE USAGE ---
console.log(getDhikirMilestone(1200, 15));
console.log(getDhikirMilestone(400, 2));
console.log(getDhikirMilestone(100, 1));