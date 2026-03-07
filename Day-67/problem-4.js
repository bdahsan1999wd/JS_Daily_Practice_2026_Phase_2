/**
🧩 PROBLEM–04: getEidiNotes()

Logic: Breakdown total amount into specific currency denominations.
 */

function getEidiNotes(totalAmount) {

    // --- STEP 1: VALIDATION ---
    // Must be positive and multiple of 10
    if (typeof totalAmount !== 'number' || totalAmount <= 0 || totalAmount % 10 !== 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE NOTES ---
    const notes500 = Math.floor(totalAmount / 500);
    let remainingAfter500 = totalAmount % 500;

    const notes100 = Math.floor(remainingAfter500 / 100);

    // --- STEP 3: CHALLENGE LEFTOVER ---
    const remaining = remainingAfter500 % 100;

    return {
        notes500: notes500,
        notes100: notes100,
        remaining: remaining
    };
}

// --- EXAMPLE USAGE ---
console.log(getEidiNotes(1750));