/**
 * 🧩 PROBLEM–03: getReportStatus()

 * Logic: Track lab report turnaround time and flag urgent or critical delays.
 */

function getReportStatus(orderTime, expectedHours) {

    // --- STEP 1: VALIDATION ---
    const now = Date.now();
    if (typeof orderTime !== 'number' || typeof expectedHours !== 'number' ||
        orderTime > now || expectedHours <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CALCULATION ---
    const elapsedMs = now - orderTime;
    const elapsedHours = elapsedMs / (1000 * 60 * 60);
    const deadline = expectedHours;

    // --- STEP 3: STATUS LOGIC (Challenge) ---
    // Critical Delay: More than 24 hours past expected time
    if (elapsedHours > deadline + 24) return "CRITICAL DELAY";

    // Delayed: Simply past the deadline
    if (elapsedHours > deadline) return "Delayed";

    // Urgent: Within 2 hours of the deadline
    if (deadline - elapsedHours <= 2) return "Urgent";

    return "On Time";
}

// --- EXAMPLE USAGE ---
console.log(getReportStatus(Date.now() - 3600000, 5));
console.log(getReportStatus(Date.now() - 21600000, 5));