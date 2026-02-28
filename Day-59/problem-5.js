/* 🧩 PROBLEM–05: isLateForTaraweeh()

This function parses time strings, converts them to total minutes for comparison, and handles basic validation for the 24-hour clock.
*/

function isLateForTaraweeh(currentTime, startTime, travelMinutes) {

    // --- STEP 1: HELPER FUNCTION ---
    // Function to convert "HH:MM" string to total minutes from midnight
    function toMinutes(timeStr) {
        const parts = timeStr.split(":");
        if (parts.length !== 2) return null;

        const hours = parseInt(parts[0]);
        const mins = parseInt(parts[1]);

        // Validate 24-hour time range
        if (isNaN(hours) || isNaN(mins) || hours < 0 || hours > 23 || mins < 0 || mins > 59) {
            return null;
        }
        return (hours * 60) + mins;
    }

    // --- STEP 2: VALIDATION & PARSING ---
    const currentMins = toMinutes(currentTime);
    const startMins = toMinutes(startTime);

    if (currentMins === null || startMins === null || typeof travelMinutes !== 'number' || travelMinutes < 0) {
        return "Invalid Input";
    }

    // --- STEP 3: COMPARISON ---
    // Check if (Current Time + Travel) is after Start Time
    const arrivalTime = currentMins + travelMinutes;

    return arrivalTime > startMins;
}

// --- EXAMPLE USAGE ---
console.log(isLateForTaraweeh("19:50", "20:00", 5));
console.log(isLateForTaraweeh("19:55", "20:00", 10));
console.log(isLateForTaraweeh("25:00", "20:00", 5));