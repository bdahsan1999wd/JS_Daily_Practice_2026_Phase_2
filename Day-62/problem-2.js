// 🧩 PROBLEM–02: isIftarTime()

// Logic: Convert both time strings into total minutes to perform a simple comparison.

function isIftarTime(currentTime, iftarTime) {

    // --- STEP 1: VALIDATION ---
    // Check if inputs are strings and have the correct format length (HH:MM)
    if (typeof currentTime !== 'string' || typeof iftarTime !== 'string' ||
        currentTime.length !== 5 || iftarTime.length !== 5) {
        return "Invalid Input";
    }

    // Helper to convert "HH:MM" to total minutes from 00:00
    const toMinutes = (timeStr) => {
        const parts = timeStr.split(':');
        const h = parseInt(parts[0]);
        const m = parseInt(parts[1]);
        return (h * 60) + m;
    };

    const currentTotal = toMinutes(currentTime);
    const iftarTotal = toMinutes(iftarTime);

    // --- STEP 2: COMPARISON ---
    // Return true if current time has reached or passed iftar time
    return currentTotal >= iftarTotal;
}

// --- EXAMPLE USAGE ---
console.log(isIftarTime("18:15", "18:10"));
console.log(isIftarTime("17:50", "18:10"));