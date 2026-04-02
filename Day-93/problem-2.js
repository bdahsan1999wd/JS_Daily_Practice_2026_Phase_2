// 🧩 PROBLEM–02: getNextDoseTime()

// Logic: Calculate medicine dose time based on surgery end time and interval.

function getNextDoseTime(surgeryEndTime, interval) {

    // --- STEP 1: VALIDATION ---
    // surgeryEndTime format must be HH:MM and interval must be between 1-12
    if (typeof surgeryEndTime !== 'string' || !surgeryEndTime.includes(":") ||
        typeof interval !== 'number' || interval < 1 || interval > 12) {
        return "Invalid Input";
    }

    // --- STEP 2: PARSE TIME ---
    const timeParts = surgeryEndTime.split(":");
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);

    if (isNaN(hours) || isNaN(minutes) || hours > 23 || minutes > 59) {
        return "Invalid Input";
    }

    // --- STEP 3: ADD INTERVAL & HANDLE MIDNIGHT CHALLENGE ---
    // Logic: New hours = (Current hours + Interval) % 24
    let nextHours = (hours + interval) % 24;

    // --- STEP 4: FORMATTING ---
    // Ensure leading zeros for hours and minutes (e.g., 05:00)
    const formattedHours = String(nextHours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}

// --- EXAMPLE USAGE ---
console.log(getNextDoseTime("23:30", 2));
console.log(getNextDoseTime("08:00", 4));