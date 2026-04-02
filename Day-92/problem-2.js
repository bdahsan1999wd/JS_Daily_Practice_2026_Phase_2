// 🧩 PROBLEM–02: convertAppointmentTime()

// Logic: Convert BST time to GMT or EST with circular time (24h) handling.

function convertAppointmentTime(timeBST, zone) {

    // --- STEP 1: VALIDATION ---
    // timeBST must be 0-23; zone must be "GMT" or "EST" (case-insensitive)
    if (typeof timeBST !== 'number' || timeBST < 0 || timeBST > 23 || typeof zone !== 'string') {
        return "Invalid Input";
    }

    const targetZone = zone.toUpperCase();
    if (targetZone !== "GMT" && targetZone !== "EST") {
        return "Invalid Input";
    }

    // --- STEP 2: TIME CONVERSION LOGIC ---
    let convertedTime;
    if (targetZone === "GMT") {
        convertedTime = timeBST - 6; // BST to GMT: -6 hours
    } else {
        convertedTime = timeBST - 11; // BST to EST: -11 hours
    }

    // --- STEP 3: HANDLE CIRCULAR TIME (WRAPPING) ---
    // Challenge: If the result is negative, wrap it around by adding 24
    if (convertedTime < 0) {
        convertedTime = convertedTime + 24;
    }

    return convertedTime;
}

// --- EXAMPLE USAGE ---
console.log(convertAppointmentTime(2, "GMT"));
console.log(convertAppointmentTime(10, "EST"));