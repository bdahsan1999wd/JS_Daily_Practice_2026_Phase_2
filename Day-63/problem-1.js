// 🧩 PROBLEM–01: getTaraweehStatus()
// Logic: Calculate progress based on 30 total chapters (Para).

function getTaraweehStatus(completedPara) {

    // --- STEP 1: VALIDATION ---
    if (typeof completedPara !== 'number' || completedPara < 0 || completedPara > 30) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK COMPLETION ---
    if (completedPara === 30) return "Khatam Completed";

    // --- STEP 3: CALCULATE REMAINING ---
    const remaining = 30 - completedPara;
    return `Completed: ${completedPara} | Remaining: ${remaining}`;
}

// --- EXAMPLE USAGE ---
console.log(getTaraweehStatus(12));
console.log(getTaraweehStatus(30));