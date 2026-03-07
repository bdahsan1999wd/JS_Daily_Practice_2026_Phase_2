/*
🧩 PROBLEM–01: calculateWrapNeeded()

Logic: Calculate surface area of a box and add a 20% buffer.
 */

function calculateWrapNeeded(length, width, height) {

    // --- STEP 1: VALIDATION ---
    // Dimensions must be positive numbers
    if (typeof length !== 'number' || typeof width !== 'number' || typeof height !== 'number' ||
        length <= 0 || width <= 0 || height <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE SURFACE AREA ---
    // Formula: 2 * (lw + lh + wh)
    const surfaceArea = 2 * (length * width + length * height + width * height);

    // --- STEP 3: APPLY BUFFER ---
    // Challenge: Add 20% extra for overlaps
    const totalNeeded = surfaceArea * 1.2;

    return totalNeeded;
}

// --- EXAMPLE USAGE ---
console.log(calculateWrapNeeded(10, 5, 2));