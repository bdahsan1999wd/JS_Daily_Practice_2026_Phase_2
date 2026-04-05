// 🧩 PROBLEM–04: getStrokeDecision()

// Logic: FAST protocol implementation for stroke action.

function getStrokeDecision(testResults, systolicBP) {

    // --- STEP 1: VALIDATION ---
    if (typeof testResults !== 'object' || testResults === null || typeof systolicBP !== 'number') {
        return "Invalid Input";
    }

    // --- STEP 2: FAST COUNTER ---
    const { faceDroop, armWeak, speechSlur } = testResults;
    const trueCount = [faceDroop, armWeak, speechSlur].filter(res => res === true).length;

    if (trueCount >= 2) {
        return "ACTIVATE_STROKE_PROTOCOL";
    } else if (trueCount === 1) {
        return "NEUROLOGY_CONSULTATION";
    }

    // --- STEP 3: HYPERTENSIVE CRISIS CHALLENGE ---
    if (trueCount === 0 && systolicBP > 180) {
        return "HYPERTENSIVE_CRISIS_OBSERVATION";
    }

    return "No Stroke Protocol Required";
}

// --- EXAMPLE USAGE ---
console.log(getStrokeDecision({ faceDroop: true, armWeak: true, speechSlur: false }, 140));

console.log(getStrokeDecision({ faceDroop: false, armWeak: false, speechSlur: false }, 190));