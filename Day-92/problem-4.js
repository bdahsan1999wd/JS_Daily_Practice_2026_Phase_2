// 🧩 PROBLEM–04: getMedicineSummary()

// Logic: Parse a legacy pipe-separated string into a structured medication object.

function getMedicineSummary(rawString) {

    // --- STEP 1: VALIDATION ---
    // String must contain all three required keys
    if (typeof rawString !== 'string' ||
        !rawString.includes("Med:") ||
        !rawString.includes("Dose:") ||
        !rawString.includes("Freq:")) {
        return "Invalid Input";
    }

    // --- STEP 2: PARSING & SPLITTING ---
    // Splitting by pipe "|" to get each segment
    const segments = rawString.split("|");

    // Helper function to extract and trim values after the colon ":"
    const getValue = (segment) => segment.split(":")[1].trim();

    // --- STEP 3: CONSTRUCT RESULT ---
    // Challenge: Trim extra whitespace and convert frequency to a Number
    const medicine = getValue(segments[0]);
    const dosage = getValue(segments[1]);
    const frequency = Number(getValue(segments[2]));

    // Check if frequency is a valid number after conversion
    if (isNaN(frequency)) return "Invalid Input";

    return {
        medicine: medicine,
        dosage: dosage,
        frequency: frequency
    };
}

// --- EXAMPLE USAGE ---
console.log(getMedicineSummary("Med: Ace | Dose: 500mg | Freq: 2"));