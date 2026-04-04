// 🧩 PROBLEM–04: findFirstAvailableSlot()

// Logic: Identify the first available appointment slot with specific hospital priority rules.

function findFirstAvailableSlot(slots) {

    // --- STEP 1: VALIDATION ---
    // Array must have exactly 8 elements (representing 8 slots in a day)
    if (!Array.isArray(slots) || slots.length !== 8) {
        return "Invalid Input";
    }

    // --- STEP 2: FIND THE FIRST AVAILABLE (NULL) SLOT ---
    // indexOf(null) will give us the first index where a slot is available.
    const firstNullIndex = slots.indexOf(null);

    // --- STEP 3: HANDLE "FULLY_BOOKED" CHALLENGE ---
    // If indexOf returns -1, it means there are no nulls (all slots taken).
    if (firstNullIndex === -1) {
        return "FULLY_BOOKED";
    }

    // --- STEP 4: HANDLE "EMERGENCY_ONLY_SLOTS" CHALLENGE ---
    /* Logic: If the FIRST null found is at index 6 or 7, we need to check
       if there were any nulls before them. But since indexOf finds the FIRST one,
       if it returns 6 or 7, it's guaranteed that 0-5 are already filled.
    */
    if (firstNullIndex === 6 || firstNullIndex === 7) {
        return "EMERGENCY_ONLY_SLOTS";
    }

    // --- STEP 5: RETURN REGULAR SLOT INDEX ---
    // If the first null is between 0 and 5, just return that index.
    return firstNullIndex;
}

// --- EXAMPLE USAGE ---
const todaySlots1 = ["P1", "P2", null, "P3", "P4", "P5", "P6", "P7"];
console.log(findFirstAvailableSlot(todaySlots1));

const todaySlots2 = ["P1", "P2", "P3", "P4", "P5", "P6", null, null];
console.log(findFirstAvailableSlot(todaySlots2));

const todaySlots3 = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"];
console.log(findFirstAvailableSlot(todaySlots3));