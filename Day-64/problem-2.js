/**
 * 🧩 PROBLEM–02: validateMealBoxes()

 * Logic: Use Object.values() and .every() to ensure all items are present and true.
 */

function validateMealBoxes(box) {

    // --- STEP 1: OBJECT VALIDATION ---
    if (typeof box !== 'object' || box === null) return "Invalid Input";

    // --- STEP 2: KEY CHECK ---
    const requiredKeys = ['dates', 'water', 'mainCourse'];
    const currentKeys = Object.keys(box);

    // Ensure the box object has all the required properties
    const hasAllKeys = requiredKeys.every(key => currentKeys.includes(key));
    if (!hasAllKeys) return "Invalid Box";

    // --- STEP 3: VALUE VALIDATION (CHALLENGE) ---
    // Check if every property value in the box is true
    return Object.values(box).every(item => item === true);
}

// --- EXAMPLE USAGE ---
console.log(validateMealBoxes({ dates: true, water: true, mainCourse: true }));
console.log(validateMealBoxes({ dates: true, water: false, mainCourse: true }));
console.log(validateMealBoxes({ dates: true }));