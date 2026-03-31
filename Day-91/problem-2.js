// 🧩 PROBLEM–02: getMedicineTimings()

// Logic: Convert daily frequency into specific arrays of time slots.

function getMedicineTimings(timesPerDay) {

    // --- STEP 1: VALIDATION ---
    // Input must be a number and only within 1 to 4
    if (typeof timesPerDay !== 'number' || ![1, 2, 3, 4].includes(timesPerDay)) {
        return "Invalid Input";
    }

    // --- STEP 2: LOGIC BASED ON FREQUENCY ---
    // 1 time: Morning only
    if (timesPerDay === 1) {
        return ["08:00"];
    }
    // 2 times: Morning and Night
    else if (timesPerDay === 2) {
        return ["08:00", "20:00"];
    }
    // 3 times: Morning, Afternoon, and Night
    else if (timesPerDay === 3) {
        return ["08:00", "14:00", "20:00"];
    }
    // --- STEP 3: APPLY INTERVAL CHALLENGE ---
    // 4 times: 6-hour intervals starting from 06:00
    else {
        return ["06:00", "12:00", "18:00", "00:00"];
    }
}

// --- EXAMPLE USAGE ---
console.log(getMedicineTimings(1));
console.log(getMedicineTimings(3));
console.log(getMedicineTimings(4));