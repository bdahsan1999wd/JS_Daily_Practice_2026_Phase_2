// 🧩 PROBLEM–02: 🕌 Mosque Distance Finder

/*⚠️ Function Name: getNearestMosque()

 Identifies the closest mosque based on the smallest distance value.
*/

function getNearestMosque(mosques) {

    // --- STEP 1: VALIDATION ---
    // Check if input is a valid non-empty array
    if (!Array.isArray(mosques) || mosques.length === 0) {
        return "Invalid Input";
    }

    // Assume the first mosque is the nearest initially
    let nearest = mosques[0];

    // --- STEP 2: COMPARISON LOGIC ---
    for (let i = 0; i < mosques.length; i++) {
        const m = mosques[i];

        // Validate that each object has a valid name and non-negative distance
        if (!m.name || typeof m.distance !== 'number' || m.distance < 0) {
            return "Invalid Input";
        }

        // If current mosque is closer than the 'nearest' we've stored, update it
        if (m.distance < nearest.distance) {
            nearest = m;
        }
        // Note: Tie-breaker (first one found) is handled naturally by using '<' instead of '<='
    }

    // Return the name of the found nearest mosque
    return nearest.name;
}

// --- EXAMPLE USAGE ---
console.log(getNearestMosque([{ name: "A", distance: 10 }, { name: "B", distance: 2 }]));
console.log(getNearestMosque([{ name: "X", distance: 5 }, { name: "Y", distance: 5 }]));
console.log(getNearestMosque([]));