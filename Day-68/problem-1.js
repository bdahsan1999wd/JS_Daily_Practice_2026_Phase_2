/**
 * 🧩 PROBLEM–01: checkJamaatStatus()

 * * Logic: Determine entry status based on remaining capacity and group size.
 */

function checkJamaatStatus(capacity, enrolled, groupSize) {

    // --- STEP 1: VALIDATION ---
    if (!Number.isInteger(capacity) || !Number.isInteger(enrolled) || !Number.isInteger(groupSize) ||
        capacity < 0 || enrolled < 0 || groupSize < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: GROUP SIZE CHALLENGE ---
    if (groupSize > capacity) {
        return "Invalid Group Size";
    }

    // --- STEP 3: CAPACITY LOGIC ---
    if (enrolled >= capacity) {
        return "Capacity Full";
    }

    if (enrolled + groupSize <= capacity) {
        return "Entry Granted";
    } else {
        return "Wait for Next";
    }
}

// --- EXAMPLE USAGE ---
console.log(checkJamaatStatus(500, 498, 5));
console.log(checkJamaatStatus(500, 450, 10));