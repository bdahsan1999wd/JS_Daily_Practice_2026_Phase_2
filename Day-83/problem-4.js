/**
 * 🧩 PROBLEM–04: hasScheduleConflict()

 * Logic: Check for time overlap between appointments and doctor breaks.
 */

function hasScheduleConflict(appointmentTime, breakStart, breakEnd) {

    // --- STEP 1: VALIDATION ---
    const isValid = (n) => Number.isInteger(n) && n >= 0 && n <= 23;
    if (!isValid(appointmentTime) || !isValid(breakStart) || !isValid(breakEnd) || breakStart >= breakEnd) {
        return "Invalid Input";
    }

    // --- STEP 2: CONFLICT LOGIC ---
    if (appointmentTime >= breakStart && appointmentTime <= breakEnd) {
        return true;
    }

    // --- STEP 3: NEAR BREAK CHECK (Challenge) ---
    // If appointment is exactly 1 hour before breakStart
    if (appointmentTime === breakStart - 1) {
        return "Urgent: Near Break Time";
    }

    return false;
}

// --- EXAMPLE USAGE ---
console.log(hasScheduleConflict(14, 13, 15));
console.log(hasScheduleConflict(12, 13, 15));