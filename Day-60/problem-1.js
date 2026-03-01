/* 🧩 PROBLEM–01: getDaysBetweenDates()

This function leverages the JavaScript Date object to calculate time differences by converting dates into epoch milliseconds.
*/

function getDaysBetweenDates(startDate, endDate) {

    // --- STEP 1: VALIDATION ---
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Check if the provided strings result in valid dates
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return "Invalid Input";
    }

    // --- STEP 2: LOGIC ---
    // Calculate the difference in milliseconds
    const diffInMs = Math.abs(end - start);

    // Convert milliseconds to days: ms / (1000ms * 60s * 60m * 24h)
    const msInADay = 24 * 60 * 60 * 1000;
    const totalDays = diffInMs / msInADay;

    return totalDays;
}

// --- EXAMPLE USAGE ---
console.log(getDaysBetweenDates("2026-03-01", "2026-03-30"));
console.log(getDaysBetweenDates("2026-03-10", "2026-03-10"));