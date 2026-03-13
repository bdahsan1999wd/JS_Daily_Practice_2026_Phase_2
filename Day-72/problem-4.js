/**
 * ⚠️ Function Name: checkSeatAvailability()

 * Logic: Check if enough seats exist and validate cabin requirements for groups of 4.
 */

function checkSeatAvailability(requestedSeats, availableSeats) {

    // --- STEP 1: VALIDATION ---
    if (typeof requestedSeats !== 'number' || requestedSeats <= 0 ||
        typeof availableSeats !== 'number' || availableSeats <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: BASIC CAPACITY CHECK ---
    if (availableSeats < requestedSeats) return false;

    // --- STEP 3: CABIN LOGIC (Challenge) ---
    // Rule: If exactly 4 seats, must be a full cabin (multiple of 4)
    if (requestedSeats === 4) {
        return availableSeats % 4 === 0;
    }

    return true;
}

// --- EXAMPLE USAGE ---
console.log(checkSeatAvailability(4, 10));
console.log(checkSeatAvailability(4, 12));