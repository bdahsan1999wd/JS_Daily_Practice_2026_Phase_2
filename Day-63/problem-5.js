// 🧩 PROBLEM–05: getCompassCorrection()
// Logic: Determine direction and degrees needed to align with 270°.

function getCompassCorrection(currentBearing) {

    // --- STEP 1: VALIDATION ---
    if (typeof currentBearing !== 'number' || currentBearing < 0 || currentBearing > 359) {
        return "Invalid Input";
    }

    // --- STEP 2: LOGIC ---
    if (currentBearing === 270) return "Perfect Alignment";

    if (currentBearing < 270) {
        const diff = 270 - currentBearing;
        return `Turn ${diff} degrees Right`;
    } else {
        const diff = currentBearing - 270;
        return `Turn ${diff} degrees Left`;
    }
}

// --- EXAMPLE USAGE ---
console.log(getCompassCorrection(250));
console.log(getCompassCorrection(285));