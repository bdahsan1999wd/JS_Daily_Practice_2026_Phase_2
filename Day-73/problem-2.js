/**
 * ⚠️ Function Name: getRepoPhase()

 * * Logic: Determine the 50-day interval phase and check for end-of-phase warnings.
 */

function getRepoPhase(currentDay) {

    // --- STEP 1: VALIDATION ---
    if (!Number.isInteger(currentDay) || currentDay < 1 || currentDay > 365) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATE PHASE ---
    const phase = Math.ceil(currentDay / 50);

    // --- STEP 3: CHECK FOR REPO CREATION WARNING (Challenge) ---
    // Rule: Check if currentDay is in the last 5 days of the current 50-day phase
    const isEndOfPhase = currentDay % 50 === 0 || (currentDay % 50 >= 46);

    if (isEndOfPhase) {
        return `Phase ${phase} - Time to create new Repo!`;
    }

    return `Phase ${phase}`;
}

// --- EXAMPLE USAGE ---
console.log(getRepoPhase(70));
console.log(getRepoPhase(100));