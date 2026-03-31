// 🧩 PROBLEM–05: getEstimatedWaitTime()

// Logic: Calculate total wait time and format into minutes or hours/minutes.

function getEstimatedWaitTime(queuePosition, avgTimePerPatient) {

    // --- STEP 1: VALIDATION ---
    // queuePosition >= 1, avgTime >= 0
    if (typeof queuePosition !== 'number' || queuePosition < 1 ||
        typeof avgTimePerPatient !== 'number' || avgTimePerPatient < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    // Logic: Wait time is based on how many people are BEFORE the current patient
    const totalMinutes = (queuePosition - 1) * avgTimePerPatient;

    // --- STEP 3: FORMATTING CHALLENGE ---
    // Case A: 60 minutes or more -> Format as "Xh Ym"
    if (totalMinutes >= 60) {
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;
        return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
    }
    // Case B: Less than 60 minutes -> Format as "Ym"
    else {
        return `${totalMinutes}m`;
    }
}

// --- EXAMPLE USAGE ---
console.log(getEstimatedWaitTime(5, 20));
console.log(getEstimatedWaitTime(2, 15));