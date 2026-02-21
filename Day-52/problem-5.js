/**
 * 🧩 PROBLEM–05: getEnergySavingAdvice()

 * Logic: Suggest power mode based on system load and peak time hours.
 */

function getEnergySavingAdvice(currentLoad, time24hr, isHoliday) {

    // --- STEP 1: VALIDATION ---
    if (typeof currentLoad !== 'number' || currentLoad <= 0 ||

        typeof time24hr !== 'number' || time24hr < 0 || time24hr > 23 ||

        typeof isHoliday !== 'boolean') {

        return "Invalid Input";

    }

    // --- STEP 2: CRITICAL LOAD CHECK ---
    // Overloaded system (above 5000) takes priority over time or holiday status

    if (currentLoad > 5000) {

        return "Critical Mode";

    }

    // --- STEP 3: ECO MODE LOGIC ---
    // Peak hours are 18:00 to 22:00. Eco mode triggers on workdays during peak hours
    const isPeakHour = time24hr >= 18 && time24hr <= 22;
    const isModerateLoad = currentLoad >= 2000 && currentLoad <= 5000;

    if ((isPeakHour && !isHoliday) || isModerateLoad) {

        return "Eco Mode";

    }

    // --- STEP 4: DEFAULT MODE ---
    return "Normal Mode";

}

// --- EXAMPLE USAGE ---
console.log(getEnergySavingAdvice(6000, 10, false));
console.log(getEnergySavingAdvice(2500, 12, false));
console.log(getEnergySavingAdvice(1000, 10, true));