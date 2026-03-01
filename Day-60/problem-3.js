/* 🧩 PROBLEM–03: adjustIftarTime()

This function uses the modulo operator ($%$) to handle time "wrap-around" (overflowing past 23:59) and padStart for formatting.
*/

function adjustIftarTime(baseTime, offsetMinutes) {

    // --- STEP 1: VALIDATION ---
    const timeParts = baseTime.split(":");
    if (timeParts.length !== 2 || typeof offsetMinutes !== 'number') return "Invalid Input";

    const hours = parseInt(timeParts[0]);
    const mins = parseInt(timeParts[1]);

    if (isNaN(hours) || isNaN(mins) || hours < 0 || hours > 23 || mins < 0 || mins > 59) {
        return "Invalid Input";
    }

    // --- STEP 2: TOTAL MINUTES CALCULATION ---
    // Convert everything to minutes, add offset, and handle wrap-around (1440 mins in a day)
    let totalMins = (hours * 60) + mins + offsetMinutes;

    // Handle negative offsets or overflow using modulo
    totalMins = (totalMins % 1440 + 1440) % 1440;

    // --- STEP 3: BACK TO HH:MM ---
    const finalHours = Math.floor(totalMins / 60);
    const finalMins = totalMins % 60;

    // Use padStart to ensure "09:05" format instead of "9:5"
    const formattedHours = String(finalHours).padStart(2, '0');
    const formattedMins = String(finalMins).padStart(2, '0');

    return `${formattedHours}:${formattedMins}`;
}

// --- EXAMPLE USAGE ---
console.log(adjustIftarTime("18:15", 5));
console.log(adjustIftarTime("23:55", 10));