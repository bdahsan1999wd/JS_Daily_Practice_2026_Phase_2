/**
 * 🧩 PROBLEM–02: isValidTripChain()

 * Logic: Compare the current destination with the next departure using sanitization.
 */

function isValidTripChain(trips) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(trips) || trips.length < 2) {
        return "Invalid Input";
    }

    // --- STEP 2: ITERATE THROUGH CHAIN ---
    for (let i = 0; i < trips.length - 1; i++) {
        const currentTrip = trips[i];
        const nextTrip = trips[i + 1];

        if (typeof currentTrip.to !== 'string' || typeof nextTrip.from !== 'string') {
            return "Invalid Input";
        }

        // --- STEP 3: SANITIZED COMPARISON (Challenge) ---
        // Rule: Case-insensitive and ignore whitespace
        const currentDest = currentTrip.to.trim().toLowerCase();
        const nextStart = nextTrip.from.trim().toLowerCase();

        if (currentDest !== nextStart) {
            return false;
        }
    }

    return true;
}

// --- EXAMPLE USAGE ---
console.log(isValidTripChain([{ from: "Dhaka", to: "Sylhet" }, { from: "sylhet ", to: "Chittagong" }]));