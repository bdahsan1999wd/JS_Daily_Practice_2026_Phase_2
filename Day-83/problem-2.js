/**
 * 🧩 PROBLEM–02: getAppointmentRecency()

 * Logic: Calculate time difference from now and return a relative string.
 */

function getAppointmentRecency(createdAt) {

    // --- STEP 1: VALIDATION ---
    if (typeof createdAt !== 'number' || createdAt > Date.now()) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE TIME DIFF ---
    const diffInMs = Date.now() - createdAt;
    const diffInHours = diffInMs / (1000 * 60 * 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // --- STEP 3: CONDITIONAL LOGIC (Challenge) ---
    if (diffInHours < 24) {
        return "Today";
    } else if (diffInHours < 48) {
        return "Yesterday";
    } else {
        return `${diffInDays} days ago`;
    }
}

// --- EXAMPLE USAGE ---
console.log(getAppointmentRecency(Date.now() - 3600000));
console.log(getAppointmentRecency(Date.now() - 172800000));