/**
 * 🧩 PROBLEM–03: normalizeLabResult()

 * Logic: Categorize lab values and detect critical levels (50% deviation).
 */

function normalizeLabResult(value, min, max) {

    // --- STEP 1: VALIDATION ---
    if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number' || min >= max || value < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CRITICAL CHECK (Challenge) ---
    if (value > max + (max * 0.5)) return "CRITICAL HIGH";
    if (value < min - (min * 0.5)) return "CRITICAL LOW";

    // --- STEP 3: NORMAL RANGE LOGIC ---
    if (value < min) return "Low";
    if (value > max) return "High";
    return "Normal";
}

// --- EXAMPLE USAGE ---
console.log(normalizeLabResult(9, 20, 50));
console.log(normalizeLabResult(10, 20, 50));
console.log(normalizeLabResult(55, 20, 50));
console.log(normalizeLabResult(80, 20, 50));