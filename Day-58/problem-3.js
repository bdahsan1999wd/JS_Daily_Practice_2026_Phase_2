/* 🧩 PROBLEM–03: calculateSadaqahShare()

This function calculates individual shares for a group donation goal.
*/

function calculateSadaqahShare(targetAmount, currentTotal, remainingFriends) {

    // --- STEP 1: VALIDATION ---
    // All inputs must be positive numbers; friends count must be at least 1
    if (typeof targetAmount !== 'number' || targetAmount <= 0 ||
        typeof currentTotal !== 'number' || currentTotal < 0 ||
        typeof remainingFriends !== 'number' || remainingFriends < 1) {
        return "Invalid Input";
    }

    // --- STEP 2: LOGIC ---
    // If the goal is already reached, no more contributions are needed
    if (currentTotal >= targetAmount) {
        return 0;
    }

    // Calculate the remaining gap and divide by the number of friends
    const gap = targetAmount - currentTotal;
    return gap / remainingFriends;
}

// --- EXAMPLE USAGE ---
console.log(calculateSadaqahShare(1000, 400, 3));
console.log(calculateSadaqahShare(500, 600, 2));
console.log(calculateSadaqahShare(1000, 400, 0));