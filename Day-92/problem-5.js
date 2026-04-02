// 🧩 PROBLEM–05: detectGlucoseSpike()

// Logic: Compare consecutive readings to identify a 40% or higher increase.

function detectGlucoseSpike(readings) {

    // --- STEP 1: VALIDATION ---
    // Array must contain at least 2 numeric readings
    if (!Array.isArray(readings) || readings.length < 2) {
        return "Invalid Input";
    }

    for (let val of readings) {
        if (typeof val !== 'number') return "Invalid Input";
    }

    // --- STEP 2: LOOP AND DETECT SPIKE ---
    // stop at the second-to-last index to compare i with i+1
    for (let i = 0; i < readings.length - 1; i++) {
        const current = readings[i];
        const next = readings[i + 1];

        // Logic: Spike = Next reading is >= 140% of Current reading
        if (next >= current * 1.4) {
            // --- STEP 3: CHALLENGE RETURN ---
            // Return index of the FIRST reading of the spike pair
            return `SPIKE_DETECTED_AT_INDEX_${i}`;
        }
    }

    // --- STEP 4: DEFAULT CASE ---
    // If no spike is found in the entire array
    return false;
}

// --- EXAMPLE USAGE ---
console.log(detectGlucoseSpike([100, 110, 160, 120]));