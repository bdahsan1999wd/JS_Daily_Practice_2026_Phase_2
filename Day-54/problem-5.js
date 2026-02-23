/**
 *🧩 PROBLEM–05: getTaraweehStatus()

 * Tracks Taraweeh progress based on school of thought.
 * Logic: Evaluates 'Sunnah' completion differently for Shafi followers.
 */

function getTaraweehStatus(rakahsDone, isShafi) {

    // --- STEP 1: VALIDATION ---
    // Rakahs must be a non-negative even number
    if (!Number.isInteger(rakahsDone) || rakahsDone < 0 || rakahsDone % 2 !== 0 ||
        typeof isShafi !== 'boolean') {
        return "Invalid Input";
    }

    // --- STEP 2: STATUS LOGIC ---
    // 20 is complete for everyone; 8 is complete for Shafi
    if (rakahsDone === 20 || (rakahsDone === 8 && isShafi)) {
        return "Sunnah Complete";
    } else if (rakahsDone === 8) {
        // Standard 8 rakahs for non-Shafi
        return "Standard";
    } else {
        // Any other valid even number (2, 4, 6, 10, etc.)
        return "Incomplete";
    }
}

// --- EXAMPLE USAGE ---
console.log(getTaraweehStatus(8, false));
console.log(getTaraweehStatus(8, true));
console.log(getTaraweehStatus(20, false));
console.log(getTaraweehStatus(4, false));