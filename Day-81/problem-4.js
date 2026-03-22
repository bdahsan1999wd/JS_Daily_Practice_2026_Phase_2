/**
 * 🧩 PROBLEM–04: isSlotAvailable()

 * Logic: Check if a requested slot is free and within the valid range (1-30).
 */

function isSlotAvailable(bookedSlots, requestedSlot) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(bookedSlots) || typeof requestedSlot !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: RANGE LOGIC (Challenge) ---
    if (requestedSlot < 1 || requestedSlot > 30) {
        return "Invalid Slot";
    }

    // --- STEP 3: AVAILABILITY CHECK ---
    // true if the slot is NOT already booked
    return !bookedSlots.includes(requestedSlot);
}

// --- EXAMPLE USAGE ---
console.log(isSlotAvailable([1, 2, 5], 3));
console.log(isSlotAvailable([1, 2, 5], 5));
console.log(isSlotAvailable([1, 2, 5], 35));