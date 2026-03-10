/**
 * ⚠️ Function Name: calculateDessertServings()

 * Logic: Calculate if the volume is sufficient for 150ML servings per guest.
 */

function calculateDessertServings(totalVolumeML, guestCount) {

    // --- STEP 1: VALIDATION ---
    if (typeof totalVolumeML !== 'number' || typeof guestCount !== 'number' ||
        totalVolumeML <= 0 || guestCount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    const requiredVolume = guestCount * 150;

    // --- STEP 3: LOGIC GATES ---
    // Challenge: Check for exactly double (Seconds)
    if (totalVolumeML === requiredVolume * 2) {
        return "Enough for Seconds!";
    }

    if (totalVolumeML >= requiredVolume) {
        return "Enough";
    } else {
        const shortage = requiredVolume - totalVolumeML;
        return `Need ${shortage} ML more`;
    }
}

// --- EXAMPLE USAGE ---
console.log(calculateDessertServings(1500, 10));
console.log(calculateDessertServings(3000, 10));
console.log(calculateDessertServings(1000, 10));