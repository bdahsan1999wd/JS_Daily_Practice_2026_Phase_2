/**
 * 🧩 PROBLEM–05: hasShiftConflict()

 * Logic: Compare two time intervals for any overlap.
 */

function hasShiftConflict(shift1, shift2) {

    // --- STEP 1: ARRAY VALIDATION ---
    if (!Array.isArray(shift1) || !Array.isArray(shift2) || shift1.length !== 2 || shift2.length !== 2) {
        return "Invalid Input";
    }

    // --- STEP 2: DATA EXTRACTION & RANGE VALIDATION ---
    const [s1, e1] = shift1;
    const [s2, e2] = shift2;

    if (typeof s1 !== 'number' || typeof e1 !== 'number' || typeof s2 !== 'number' || typeof e2 !== 'number' || e1 <= s1 || e2 <= s2) {
        return "Invalid Input";
    }

    // --- STEP 3: OVERLAP LOGIC ---
    // Two ranges [s1, e1] and [s2, e2] overlap if:
    // s1 < e2 AND e1 > s2
    return s1 < e2 && e1 > s2;
}

// --- EXAMPLE USAGE ---
console.log(hasShiftConflict([16, 18], [17, 19]));
console.log(hasShiftConflict([14, 15], [16, 17]));