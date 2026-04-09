// 🧩 PROBLEM–03: syncHeartRateData()

// Logic: Filter out noise from sensor data and detect hardware malfunction.

function syncHeartRateData(readings) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(readings)) return "Invalid Input";

    // --- STEP 2: FILTERING ---
    const validReadings = readings.filter(hr => typeof hr === 'number' && hr >= 40 && hr <= 200);

    // --- STEP 3: MALFUNCTION CHALLENGE ---
    // If more than 50% data is invalid
    const invalidCount = readings.length - validReadings.length;
    if (invalidCount > readings.length / 2) {
        return "DEVICE_MALFUNCTION";
    }

    return validReadings;
}

// --- EXAMPLE USAGE ---
console.log(syncHeartRateData([72, 250, 80, 10]));
console.log(syncHeartRateData([10, 20, 80, 15]));