/**
 * ⚠️ Function Name: checkStreakMilestone()

 * * Logic: Calculate daily average and check for the consistency milestone.
 */

function checkStreakMilestone(daysSolved, totalProblems) {

    // --- STEP 1: VALIDATION ---
    if (typeof daysSolved !== 'number' || daysSolved <= 0 ||
        typeof totalProblems !== 'number' || totalProblems < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE AVERAGE ---
    const average = totalProblems / daysSolved;

    // --- STEP 3: FORMAT OUTPUT & CHALLENGE ---
    let result = `Streak: ${daysSolved} days, Avg: ${average} problems/day`;

    // Rule: Append fire emoji if average is 5 or more
    if (average >= 5) {
        result += " 🔥 Super Consistent";
    }

    return result;
}

// --- EXAMPLE USAGE ---
console.log(checkStreakMilestone(10, 50));
console.log(checkStreakMilestone(5, 12));