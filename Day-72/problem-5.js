/**
 * ⚠️ Function Name: predictArrival()

 * Logic: Calculate arrival time based on travel and delay, formatting for 24h clock.
 */

function predictArrival(startTime, travelMinutes, trafficDelay) {

    // --- STEP 1: VALIDATION ---
    if (typeof startTime !== 'string' || !startTime.includes(':') ||
        typeof travelMinutes !== 'number' || travelMinutes <= 0 ||
        typeof trafficDelay !== 'number' || trafficDelay < 0) {
        return "Invalid Input";
    }

    // --- STEP 2: PARSE & CALCULATE ---
    let [hours, minutes] = startTime.split(':').map(Number);
    let totalTravelTime = travelMinutes + trafficDelay;

    let totalMinutes = (hours * 60) + minutes + totalTravelTime;
    let finalHours = Math.floor(totalMinutes / 60) % 24;
    let finalMinutes = totalMinutes % 60;

    // --- STEP 3: FORMAT TIME ---
    let hh = String(finalHours).padStart(2, '0');
    let mm = String(finalMinutes).padStart(2, '0');
    let arrivalStr = `Arriving at ${hh}:${mm}`;

    // --- STEP 4: LONG JOURNEY CHECK (Challenge) ---
    if (totalTravelTime > 300) {
        return `Long Journey: ${arrivalStr}`;
    }

    return arrivalStr;
}

// --- EXAMPLE USAGE ---
console.log(predictArrival("10:00", 120, 30));
console.log(predictArrival("08:00", 250, 60));