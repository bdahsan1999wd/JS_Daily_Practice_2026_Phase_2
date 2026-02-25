/* 🧩 PROBLEM–02: canAccommodatePrayers()

This function performs a simple capacity calculation with strict integer validation.
*/

function canAccommodatePrayers(rows, spacePerRow, totalPeople) {

    // --- STEP 1: VALIDATION ---
    // Ensure all three inputs are numbers and are positive integers (at least 1)
    const inputs = [rows, spacePerRow, totalPeople];
    const allValid = inputs.every(val => Number.isInteger(val) && val >= 1);

    if (!allValid) {
        return "Invalid Input";
    }

    // --- STEP 2: CAPACITY CALCULATION ---
    // Multiply rows by space per row to get the total hall capacity
    const totalCapacity = rows * spacePerRow;

    // --- STEP 3: LOGIC CHECK ---
    // Return true if the mosque can fit the total number of people
    return totalCapacity >= totalPeople;
}

// --- EXAMPLE USAGE ---
console.log(canAccommodatePrayers(10, 20, 150));
console.log(canAccommodatePrayers(5, 10, 100));
console.log(canAccommodatePrayers(-1, 20, 100));