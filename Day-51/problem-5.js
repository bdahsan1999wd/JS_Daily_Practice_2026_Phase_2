// 🧩 PROBLEM–05: manageMosquePower()

// Logic: Switch power sources based on time, battery, and prayer status.

function manageMosquePower(batteryLevel, isPrayerTime, isNight) {

    // --- STEP 1: VALIDATION ---
    if (typeof batteryLevel !== 'number' || batteryLevel < 0 || batteryLevel > 100 ||
        typeof isPrayerTime !== 'boolean' || typeof isNight !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: APPLY POWER HIERARCHY ---

    // Rule 1: Night-time critical battery
    if (isNight && batteryLevel < 20) {
        return "Use Grid";
    }

    // Rule 2: Prayer Time Logic
    if (isPrayerTime) {
        // High battery during prayer allows Hybrid mode
        return batteryLevel > 50 ? "Hybrid Mode" : "Use Grid";
    }

    // Rule 3: Daylight Solar Logic
    if (!isNight && batteryLevel > 30) {
        return "Use Solar";
    }

    // Default Fallback
    return "Use Grid";
}

// --- EXAMPLE USAGE ---
console.log(manageMosquePower(60, true, false));
console.log(manageMosquePower(80, false, false));
console.log(manageMosquePower(15, false, true));