/* 🧩 PROBLEM–03: getHydrationGoal()

A simple mathematical subtraction function with a floor cap at zero.
*/

function getHydrationGoal(totalGoal, drankAmount) {

    // --- STEP 1: VALIDATION ---
    // Ensure both inputs are numbers and positive
    if (typeof totalGoal !== 'number' || totalGoal <= 0 || typeof drankAmount !== 'number' || drankAmount < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: LOGIC ---
    // If goal is met or exceeded, return 0
    if (drankAmount >= totalGoal) {
        return 0;
    }

    // Otherwise, return the remaining difference
    return totalGoal - drankAmount;
}

// --- EXAMPLE USAGE ---
console.log(getHydrationGoal(3000, 1500));
console.log(getHydrationGoal(2000, 2500));
console.log(getHydrationGoal(-500, 1000));