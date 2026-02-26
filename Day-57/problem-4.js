/* 🧩 PROBLEM–04: allocatePrayerHall()

This uses range-based conditional logic to assign an appropriate space.
*/

function allocatePrayerHall(attendees) {

    // --- STEP 1: VALIDATION ---
    // Ensure input is a non-negative integer
    if (!Number.isInteger(attendees) || attendees < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: ALLOCATION LOGIC ---
    if (attendees <= 500) {
        return "Main Hall";
    } else if (attendees <= 800) {
        return "Basement";
    } else {
        return "Outdoor Courtyard";
    }
}

// --- EXAMPLE USAGE ---
console.log(allocatePrayerHall(450));
console.log(allocatePrayerHall(600));
console.log(allocatePrayerHall(1200));