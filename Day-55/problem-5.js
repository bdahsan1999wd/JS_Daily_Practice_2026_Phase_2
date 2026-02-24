// 🧩 PROBLEM–05: 🚿 Sunnah Habit Tracker

/*⚠️ Function Name: checkHabitCompletion()

 Checks if a habit exists in an array using case-insensitive comparison.
*/

function checkHabitCompletion(completedHabits, requiredHabit) {
    
    // --- STEP 1: VALIDATION ---
    // Habits must be in an array; requiredHabit must be a non-empty string
    if (!Array.isArray(completedHabits) || completedHabits.length === 0 ||
        typeof requiredHabit !== 'string' || requiredHabit.trim().length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CASE NORMALIZATION ---
    // Convert target habit to lowercase to prepare for matching
    const target = requiredHabit.toLowerCase();

    // --- STEP 3: SEARCH LOGIC ---
    // Loop through the array and compare each habit in lowercase
    for (let i = 0; i < completedHabits.length; i++) {
        const habit = completedHabits[i];

        // Match found (ignoring uppercase/lowercase differences)
        if (typeof habit === 'string' && habit.toLowerCase() === target) {
            return true;
        }
    }

    // Habit not found in the list
    return false;
}

// --- EXAMPLE USAGE ---
console.log(checkHabitCompletion(["Charity", "Miswak", "Dua"], "miswak"));
console.log(checkHabitCompletion(["Recitation"], "Itekaf"));
console.log(checkHabitCompletion([], "Dua"));