/**
 * ⚠️ Function Name: getWakeUpTime()

 * Logic: Add duration to sleep time and format in a strict 24h style (HH:MM).
 */

function getWakeUpTime(sleepTime, durationMins) {

    // --- STEP 1: VALIDATION ---
    if (typeof sleepTime !== 'string' || !sleepTime.includes(':') ||
        typeof durationMins !== 'number' || durationMins <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: PARSE TIME ---
    let [hours, minutes] = sleepTime.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes) || hours > 23 || minutes > 59) {
        return "Invalid Input";
    }

    // --- STEP 3: CALCULATE NEW TIME ---
    let totalMinutes = hours * 60 + minutes + durationMins;
    let finalHours = Math.floor(totalMinutes / 60) % 24;
    let finalMinutes = totalMinutes % 60;

    // --- STEP 4: FORMAT OUTPUT (Challenge) ---
    // Ensure "00:05" format instead of "0:5"
    const formattedHours = String(finalHours).padStart(2, '0');
    const formattedMinutes = String(finalMinutes).padStart(2, '0');

    return `Wake up at ${formattedHours}:${formattedMinutes}`;
}

// --- EXAMPLE USAGE ---
console.log(getWakeUpTime("23:45", 20));
console.log(getWakeUpTime("14:30", 30));