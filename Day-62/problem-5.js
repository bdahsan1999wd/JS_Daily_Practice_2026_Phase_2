// 🧩 PROBLEM–05: adjustAzanTime()

// Logic: Add 5 minutes to the time and handle hour/minute overflow.

function adjustAzanTime(originalTime) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof originalTime !== 'string' || !originalTime.includes(':')) {
        return "Invalid Input";
    }

    // --- STEP 2: SPLIT AND ADJUST ---
    let [hours, minutes] = originalTime.split(':').map(Number);

    // Add the 5-minute seasonal delay
    minutes += 5;

    // --- STEP 3: HANDLE OVERFLOW ---
    // If minutes are 60 or more, move 1 to hours
    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }

    // If hours reach 24, reset to 0 (midnight)
    if (hours >= 24) {
        hours = 0;
    }

    // --- STEP 4: FORMATTING ---
    // Ensure 2-digit format using padStart (e.g., 5 -> "05")
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');

    return `${hh}:${mm}`;
}

// --- EXAMPLE USAGE ---
console.log(adjustAzanTime("18:57"));
console.log(adjustAzanTime("23:58"));