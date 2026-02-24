// 🧩 PROBLEM–04: 📅 Ramadan Phase Detector

/*⚠️ Function Name: getRamadanPhase()

 Determines which Ashra (10-day phase) a specific day belongs to.
*/

function getRamadanPhase(day) {

    // --- STEP 1: VALIDATION ---
    // Day must be an integer between 1 and 30
    if (!Number.isInteger(day) || day < 1 || day > 30) {
        return "Invalid Input";
    }

    // --- STEP 2: PHASE CATEGORIZATION ---
    if (day <= 10) {
        // Days 1-10
        return "Mercy (Rahmah)";
    } else if (day <= 20) {
        // Days 11-20
        return "Forgiveness (Maghfirah)";
    } else {
        // Days 21-30
        return "Salvation (Najah)";
    }
}

// --- EXAMPLE USAGE ---
console.log(getRamadanPhase(5));
console.log(getRamadanPhase(15));
console.log(getRamadanPhase(25));
console.log(getRamadanPhase(35));