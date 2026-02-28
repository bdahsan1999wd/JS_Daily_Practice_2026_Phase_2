/* 🧩 PROBLEM–01: calculateRequiredMats()

This function uses Math.ceil() to ensure that even a single extra person results in an additional full mat being allocated.
*/

function calculateRequiredMats(totalMusallis, peoplePerMat) {

    // --- STEP 1: VALIDATION ---
    // Both inputs must be positive integers
    if (!Number.isInteger(totalMusallis) || totalMusallis <= 0 ||
        !Number.isInteger(peoplePerMat) || peoplePerMat <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: LOGIC ---
    // Divide and round up to the nearest whole number
    const result = Math.ceil(totalMusallis / peoplePerMat);

    return result;
}

// --- EXAMPLE USAGE ---
console.log(calculateRequiredMats(10, 3));
console.log(calculateRequiredMats(100, 10));
console.log(calculateRequiredMats(0, 5));