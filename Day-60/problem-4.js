/* 🧩 PROBLEM–04: generateCharityID()

This function combines string slicing, number formatting, and random number generation to create a unique identifier.
*/

function generateCharityID(donorName, year) {

    // --- STEP 1: VALIDATION ---
    if (typeof donorName !== 'string' || donorName.length < 3 || !Number.isInteger(year) || year < 1000 || year > 9999) {
        return "Invalid Input";
    }

    // --- STEP 2: COMPONENT GENERATION ---
    // First 3 letters in Uppercase
    const prefix = donorName.substring(0, 3).toUpperCase();

    // Last 2 digits of the year
    const yearSuffix = String(year).slice(-2);

    // Random 3-digit number (100 to 999)
    const randomNum = Math.floor(Math.random() * 900) + 100;

    // --- STEP 3: OUTPUT ---
    return `${prefix}-${yearSuffix}-${randomNum}`;
}

// --- EXAMPLE USAGE ---
console.log(generateCharityID("Abdullah", 2026));
console.log(generateCharityID("Ali", 2026));