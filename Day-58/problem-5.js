/* 🧩 PROBLEM–05: getHajjSavingsStatus()

This function evaluates progress toward a savings goal using percentage-based thresholds.
*/

function getHajjSavingsStatus(savedAmount, packageCost) {

    // --- STEP 1: VALIDATION ---
    // Both inputs must be positive numbers
    if (typeof savedAmount !== 'number' || savedAmount < 0 || typeof packageCost !== 'number' || packageCost <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: STATUS LOGIC ---
    // Ready: Goal reached
    if (savedAmount >= packageCost) {
        return "Ready to Apply";
    }

    // Close: Reached at least 80% of the goal
    const eightyPercentThreshold = packageCost * 0.8;
    if (savedAmount >= eightyPercentThreshold) {
        return "Almost There";
    }

    // In Progress: Anything below 80%
    return "In Progress";
}

// --- EXAMPLE USAGE ---
console.log(getHajjSavingsStatus(5000, 5000));
console.log(getHajjSavingsStatus(4200, 5000));
console.log(getHajjSavingsStatus(1000, 5000));