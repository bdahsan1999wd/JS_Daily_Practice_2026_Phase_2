// 🧩 PROBLEM–03: checkPrayerSlot()
// Logic: Convert all times to minutes to detect overlap with 13:15–13:45.

function checkPrayerSlot(startTime, endTime) {

    // --- STEP 1: VALIDATION ---
    const toMinutes = (time) => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    };

    const start = toMinutes(startTime);
    const end = toMinutes(endTime);

    if (start >= end) return "Invalid Input";

    // Dhuhr window in minutes
    const dhuhrStart = 13 * 60 + 15; // 795 mins
    const dhuhrEnd = 13 * 60 + 45;   // 825 mins

    // --- STEP 2: OVERLAP CHECK ---
    // Meeting clashes if it starts before Dhuhr ends AND ends after Dhuhr starts
    if (start < dhuhrEnd && end > dhuhrStart) {
        return "Clash Detected";
    }

    return "Slot Available";
}

// --- EXAMPLE USAGE ---
console.log(checkPrayerSlot("12:00", "13:30"));
console.log(checkPrayerSlot("14:00", "15:00"));