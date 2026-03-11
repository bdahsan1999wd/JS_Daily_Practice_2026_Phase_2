/**
 * ⚠️ Function Name: findBestJamaat()

 * Logic: Convert times to minutes and find the first session fitting travel time.
 */

function findBestJamaat(leavingTime, jamaatTimes) {

    // --- STEP 1: VALIDATION ---
    const timeRegex = / ^ ( [0-1]? [0-9] | 2 [0-3] ) : [0-5] [0-9] $ /;

    if (!timeRegex.test(leavingTime) || !Array.isArray(jamaatTimes) || jamaatTimes.length === 0) {
        return "Invalid Input";
    }

    // Helper: Convert string "HH:MM" to total minutes
    const getMinutes = (str) => {
        const [h, m] = str.split(":").map(Number);
        return h * 60 + m;
    };

    const arrivalTime = getMinutes(leavingTime) + 45;

    // --- STEP 2: FIND FIRST ELIGIBLE JAMAAT ---
    for (let time of jamaatTimes) {
        if (getMinutes(time) >= arrivalTime) {
            return `Attend ${time}`;
        }
    }

    return "Too Late";
}

// --- EXAMPLE USAGE ---
console.log(findBestJamaat("07:00", ["07:30", "08:00", "09:00"]));
console.log(findBestJamaat("08:30", ["07:00", "08:00"]));