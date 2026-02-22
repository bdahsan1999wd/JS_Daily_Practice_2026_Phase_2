/**
 * 🧩 PROBLEM–02: getPrayerStatus()

 * * Logic: Returns the prayer name based on the hour of the day (24-hour format).
 */

function getPrayerStatus(hour24) {

    // --- STEP 1: VALIDATION ---
    // hour24 must be an integer between 0 and 23
    if (!Number.isInteger(hour24) || hour24 < 0 || hour24 > 23) {
        return "Invalid Input";
    }

    // --- STEP 2: TIME SLOT CHECKING ---
    if (hour24 >= 5 && hour24 <= 6) return "Fajr";
    if (hour24 >= 12 && hour24 <= 13) return "Dhuhr";
    if (hour24 >= 16 && hour24 <= 17) return "Asr";
    if (hour24 >= 18 && hour24 <= 19) return "Maghrib";
    if (hour24 >= 20 && hour24 <= 21) return "Isha";

    // --- STEP 3: DEFAULT CASE ---
    return "Sunnah / Nafl Time";
}

// --- EXAMPLE USAGE ---
console.log(getPrayerStatus(5));
console.log(getPrayerStatus(14));
console.log(getPrayerStatus(25));