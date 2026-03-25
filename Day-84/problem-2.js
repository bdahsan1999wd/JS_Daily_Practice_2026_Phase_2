/**
 * 🧩 PROBLEM–02: isClinicOpen()

 * Logic: Validate if current time is at least 30 mins before closing.
 */

function isClinicOpen(checkTime, closingTime) {

    // --- STEP 1: VALIDATION (HH:MM format) ---
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(checkTime) || !timeRegex.test(closingTime)) {
        return "Invalid Input";
    }

    // --- STEP 2: CONVERT TO MINUTES FOR COMPARISON ---
    const toMins = (time) => {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    };

    const checkMins = toMins(checkTime);
    const closeMins = toMins(closingTime);

    // --- STEP 3: LOGIC & CHALLENGE ---
    if (checkMins === closeMins) return "Emergency Only";

    // Return true if at least 30 mins remaining
    return (closeMins - checkMins) >= 30;
}

// --- EXAMPLE USAGE ---
console.log(isClinicOpen("18:00", "20:00"));
console.log(isClinicOpen("19:45", "20:00"));
console.log(isClinicOpen("20:00", "20:00"));