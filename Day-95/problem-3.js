// 🧩 PROBLEM–03: getVitalsSummary()

// Logic: Aggregate temperature readings into a statistical object.

function getVitalsSummary(tempReadings) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(tempReadings) || tempReadings.length === 0) {
        return "Invalid Input";
    }

    let sum = 0;
    let min = tempReadings[0];
    let max = tempReadings[0];
    let feverDetected = false;

    for (let temp of tempReadings) {
        // Check range: must be between 30 and 45
        if (typeof temp !== 'number' || temp < 30 || temp > 45) {
            return "Invalid Input";
        }

        // Calculate Min and Max
        if (temp < min) min = temp;
        if (temp > max) max = temp;

        // Challenge: Fever detection threshold
        if (temp > 39.0) feverDetected = true;

        sum += temp;
    }

    // --- STEP 2: CALCULATE AVERAGE ---
    // Challenge: Round average to 2 decimal places
    const average = Number((sum / tempReadings.length).toFixed(2));

    // --- STEP 3: CONSTRUCT RETURN OBJECT ---
    const summary = {
        min: min,
        max: max,
        average: average
    };

    if (feverDetected) {
        summary.feverDetected = true;
    }

    return summary;
}

// --- EXAMPLE USAGE ---
console.log(getVitalsSummary([36.5, 38.2, 39.5]));