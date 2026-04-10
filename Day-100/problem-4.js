// 🧩 PROBLEM–04: scheduleAppointment()

// Logic: Validate slot availability, doctor leave, and daily capacity.

function scheduleAppointment(slot, isDoctorOnLeave, bookedSlots) {

    // --- STEP 1: VALIDATION ---
    if (typeof slot !== 'string' || !Array.isArray(bookedSlots)) return "Invalid Input";

    // --- STEP 2: AVAILABILITY LOGIC ---
    if (isDoctorOnLeave) return "DOCTOR_UNAVAILABLE";
    if (bookedSlots.includes(slot)) return "SLOT_ALREADY_BOOKED";

    // --- STEP 3: DAILY LIMIT CHALLENGE ---
    if (bookedSlots.length >= 10) return "DAILY_LIMIT_REACHED";

    return `SUCCESS: ${slot} Booked`;
}

// --- EXAMPLE USAGE ---
console.log(scheduleAppointment("10:00 AM", false, ["09:00 AM"]));