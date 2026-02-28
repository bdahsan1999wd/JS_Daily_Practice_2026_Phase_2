/* 🧩 PROBLEM–04: getStudyStatus()

This problem uses percentage thresholds to determine academic or religious study performance.
*/

function getStudyStatus(pagesRead, targetPages) {

    // --- STEP 1: VALIDATION ---
    if (typeof pagesRead !== 'number' || pagesRead < 0 || typeof targetPages !== 'number' || targetPages <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: PERFORMANCE CHECK ---
    // Calculate the percentage of the goal achieved
    const performance = (pagesRead / targetPages) * 100;

    if (performance >= 120) {
        return "Excellence";
    }
    else if (performance >= 100) {
        return "Goal Met";
    }
    else {
        return "Needs Improvement";
    }
}

// --- EXAMPLE USAGE ---
console.log(getStudyStatus(120, 100));
console.log(getStudyStatus(105, 100));
console.log(getStudyStatus(80, 100));