// 🧩 PROBLEM–04: hasScheduleConflict()

// Logic: Check time overlap for telemedicine appointments.

function hasScheduleConflict(existingAppt, newAppt) {

    // --- STEP 1: VALIDATION ---
    if (!existingAppt || !newAppt || typeof existingAppt.start !== 'number' || typeof newAppt.start !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: CONFLICT LOGIC ---
    // Conflict if new starts after existing starts AND before existing ends
    const startsDuring = newAppt.start >= existingAppt.start && newAppt.start < existingAppt.end;

    // Also check if existing starts during the new one (inverse overlap)
    const overlaps = (newAppt.start < existingAppt.end) && (newAppt.end > existingAppt.start);

    return overlaps;
}

// --- EXAMPLE USAGE ---
console.log(hasScheduleConflict({ start: 1000, end: 1100 }, { start: 1030, end: 1130 }));
console.log(hasScheduleConflict({ start: 1000, end: 1100 }, { start: 1100, end: 1200 }));