/**
 * 🧩 PROBLEM–01: getGarmentStatus()

 * * Logic: Compare garment size to the ideal size (body size + 2 inches).
 */

function getGarmentStatus(bodySize, garmentSize) {

    // --- STEP 1: VALIDATION ---
    // Ensure inputs are numbers and positive
    if (typeof bodySize !== 'number' || typeof garmentSize !== 'number' || bodySize <= 0 || garmentSize <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DEFINE LOGIC CONSTANTS ---
    const idealSize = bodySize + 2;

    // --- STEP 3: COMPARE SIZES ---
    // Handle the "Skin Tight" challenge case first
    if (garmentSize === bodySize) {
        return "Skin Tight: Danger";
    }

    // Determine fit status
    if (garmentSize === idealSize) {
        return "Perfect";
    } else if (garmentSize < idealSize) {
        return "Too Tight";
    } else {
        return "Too Loose";
    }
}

// --- EXAMPLE USAGE ---
console.log(getGarmentStatus(46, 48));
console.log(getGarmentStatus(46, 46));
console.log(getGarmentStatus(46, 47));