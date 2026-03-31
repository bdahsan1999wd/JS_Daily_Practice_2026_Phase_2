// 🧩 PROBLEM–02: isShiftDoubleBooked()

// Logic: Compare two shifts to find if they overlap in time.

function isShiftDoubleBooked(shift1, shift2) {

    // --- STEP 1: VALIDATION ---
    // Hours must be numbers between 0 and 23
    const isValid = (s) => typeof s.start === 'number' && s.start >= 0 && s.start <= 23 &&
        typeof s.end === 'number' && s.end >= 0 && s.end <= 23;

    if (!shift1 || !shift2 || !isValid(shift1) || !isValid(shift2)) {
        return "Invalid Input";
    }

    // --- STEP 2: OVERLAP LOGIC ---
    // Logic: Two shifts overlap if one starts before the other ends,
    // AND it ends after the other starts.
    // Challenge: Handover (start === end) is NOT an overlap.
    const overlap = shift1.start < shift2.end && shift2.start < shift1.end;

    return overlap;
}

// --- EXAMPLE USAGE ---
console.log(isShiftDoubleBooked({ start: 9, end: 14 }, { start: 13, end: 17 }));
console.log(isShiftDoubleBooked({ start: 8, end: 12 }, { start: 12, end: 16 }));