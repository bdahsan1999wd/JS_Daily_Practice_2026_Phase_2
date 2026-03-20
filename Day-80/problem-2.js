/**
 * 🧩 PROBLEM–02: formatDuration()

 * Logic: Use Math.floor and Modulo (%) to extract hours, minutes, and seconds.
 */

function formatDuration(totalSeconds) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalSeconds !== 'number' || totalSeconds < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE UNITS ---
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // --- STEP 3: OVER 24 HOURS CHECK (Challenge) ---
    if (hours >= 24) {
        return "Over 24 Hours";
    }

    // --- STEP 4: PAD WITH ZEROS ---
    // Using padStart for the 00:00:00 format
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');

    return `${h}:${m}:${s}`;
}

// --- EXAMPLE USAGE ---
console.log(formatDuration(3661));
console.log(formatDuration(90000));