/* 🧩 PROBLEM–04: distributeSadaqah()

This function handles case-insensitive string matching to distribute funds according to fixed percentages.
*/

function distributeSadaqah(totalAmount, priorityCategory) {

    // --- STEP 1: VALIDATION ---
    // Check for positive amount and non-empty string for category
    if (typeof totalAmount !== 'number' || totalAmount <= 0 || typeof priorityCategory !== 'string' || priorityCategory.trim() === "") {
        return "Invalid Input";
    }

    // --- STEP 2: DATA SETUP ---
    // Convert category to lowercase to handle case-insensitivity
    const category = priorityCategory.toLowerCase();
    let percentage = 0;

    // --- STEP 3: ALLOCATION LOGIC ---
    // Assign percentage based on the rules
    if (category === "poor") {
        percentage = 0.50; // 50%
    } else if (category === "orphan") {
        percentage = 0.30; // 30%
    } else if (category === "education") {
        percentage = 0.20; // 20%
    } else {
        // Return error if category is not recognized
        return "Invalid Category";
    }

    // --- STEP 4: CALCULATION ---
    return totalAmount * percentage;
}

// --- EXAMPLE USAGE ---
console.log(distributeSadaqah(1000, "Orphan"));
console.log(distributeSadaqah(500, "poor"));
console.log(distributeSadaqah(100, "Travel"));