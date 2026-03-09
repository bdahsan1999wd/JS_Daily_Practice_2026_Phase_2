/**
 * 🧩 PROBLEM–05: getTimeUntilPrayer()

 * * Logic: Convert time strings to total minutes to calculate the difference.
 */

function getTimeUntilPrayer(currentTime, prayerTime) {

    // --- STEP 1: VALIDATION ---
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeFormat.test(currentTime) || !timeFormat.test(prayerTime)) {
        return "Invalid Input";
    }

    // Helper function to convert "HH:MM" to total minutes
    const toMinutes = (timeStr) => {
        const [hrs, mins] = timeStr.split(":").map(Number);
        return hrs * 60 + mins;
    };

    const currentMins = toMinutes(currentTime);
    const prayerMins = toMinutes(prayerTime);

    // Ensure prayer time hasn't passed
    if (prayerMins <= currentMins) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE DIFFERENCE ---
    const diff = prayerMins - currentMins;

    // --- STEP 3: CONDITIONAL RETURN ---
    // Challenge: Use specific wording for less than 10 minutes
    if (diff < 10) {
        return `Hurry! Only ${diff} minutes left`;
    } else {
        return `${diff} minutes remaining`;
    }
}

// --- EXAMPLE USAGE ---
console.log(getTimeUntilPrayer("07:30", "08:00"));
console.log(getTimeUntilPrayer("07:55", "08:00"));