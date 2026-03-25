/**
 * 🧩 PROBLEM–04: generateRxSerial()

 * Logic: Create a unique serial with padded counts and uppercase codes.
 */

function generateRxSerial(clinicCode, doctorId, rxCount) {

    // --- STEP 1: VALIDATION ---
    if (typeof clinicCode !== 'string' || clinicCode.length !== 3 || doctorId <= 0 || rxCount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: FORMATTING (Challenge) ---
    const code = clinicCode.toUpperCase();
    const paddedCount = String(rxCount).padStart(5, '0');

    // --- STEP 3: COMBINE ---
    return `${code}-${doctorId}-${paddedCount}`;
}

// --- EXAMPLE USAGE ---
console.log(generateRxSerial("dmc", 101, 42));