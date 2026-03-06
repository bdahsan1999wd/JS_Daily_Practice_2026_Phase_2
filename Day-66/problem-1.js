/**
 * 🧩 PROBLEM–01: getPrayerTime()

 * * Logic: Compare arrival time against fixed shifts using a loop.
 */

function getPrayerTime(arrivalTime) {

    // --- STEP 1: VALIDATION ---
    // Basic regex check for HH:MM format
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (typeof arrivalTime !== 'string' || !timeRegex.test(arrivalTime)) {
        return "Invalid Input";
    }

    // --- STEP 2: SHIFT DATA ---
    const shifts = [
        { name: "1", time: "07:00" },
        { name: "2", time: "08:30" },
        { name: "3", time: "10:00" }
    ];

    // --- STEP 3: FIND AVAILABLE SHIFT ---
    // Challenge: Use for...of loop to find the first matching shift
    for (const shift of shifts) {
        if (arrivalTime <= shift.time) {
            return `Attend Shift ${shift.name}`;
        }
    }

    return "Missed All";
}

// --- EXAMPLE USAGE ---
console.log(getPrayerTime("07:45"));
console.log(getPrayerTime("10:15"));