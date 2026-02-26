/* 🧩 PROBLEM–02: estimateIftarSeating()

This function uses an array iteration approach to sum up the capacities of different seating arrangements.
*/

function estimateIftarSeating(matsArray) {

    // --- STEP 1: VALIDATION ---
    // Check if input is an array
    if (!Array.isArray(matsArray)) {
        return "Invalid Input";
    }

    // Return 0 if the array is empty
    if (matsArray.length === 0) {
        return 0;
    }

    // --- STEP 2: SUMMATION LOGIC ---
    let totalCapacity = 0;

    for (let i = 0; i < matsArray.length; i++) {
        const mat = matsArray[i];

        // Validate that each object has the required numeric properties
        if (mat && typeof mat.count === 'number' && typeof mat.capacityPerMat === 'number') {
            totalCapacity += (mat.count * mat.capacityPerMat);
        } else {
            return "Invalid Input";
        }
    }

    return totalCapacity;
}

// --- EXAMPLE USAGE ---
console.log(estimateIftarSeating([{count: 2, capacityPerMat: 10}, {count: 5, capacityPerMat: 4}]));
console.log(estimateIftarSeating([]));