// 🧩 PROBLEM–01: 🍲 Sehri Menu Planner

/*⚠️ Function Name: getSehriRecommendation()

 Finds the first food item from a list that fits within a specific calorie budget.
*/

function getSehriRecommendation(foodItems, maxCalories) {

    // --- STEP 1: VALIDATION ---
    // Check if foodItems is a non-empty array and maxCalories is a positive number
    if (!Array.isArray(foodItems) || foodItems.length === 0 || typeof maxCalories !== 'number' || maxCalories <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SEARCH LOGIC ---
    // Loop through the food items to find the first one that fits the calorie limit
    for (let i = 0; i < foodItems.length; i++) {
        const item = foodItems[i];

        // Ensure the object has the required properties before checking
        if (item && typeof item.calories === 'number' && item.name) {
            if (item.calories <= maxCalories) {
                // Return the name as soon as a match is found
                return item.name;
            }
        } else {
            // If any object in the array is malformed, return error
            return "Invalid Input";
        }
    }

    // --- STEP 3: NOT FOUND ---
    // If the loop finishes without finding a match
    return "No suitable food found";
}

// --- EXAMPLE USAGE ---
console.log(getSehriRecommendation([{ name: "Biryani", calories: 800 }, { name: "Date", calories: 50 }], 100));
console.log(getSehriRecommendation([{ name: "Juice", calories: 120 }], 100));
console.log(getSehriRecommendation([], 200));