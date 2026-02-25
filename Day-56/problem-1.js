/* 🧩 PROBLEM–01: matchIftarDonor()

This function searches through an array of objects to find a donor with enough capacity.
*/

function matchIftarDonor(donors, requiredMeals) {

    // --- STEP 1: VALIDATION ---
    // Check if donors is a non-empty array and requiredMeals is a positive number
    if (!Array.isArray(donors) || donors.length === 0 || typeof requiredMeals !== 'number' || requiredMeals <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: SEARCH LOGIC ---
    // Using the .find() method to look for the first donor whose capacity matches the requirement
    const suitableDonor = donors.find(donor => {
        // Validate object structure inside the array
        return donor && typeof donor.capacity === 'number' && donor.capacity >= requiredMeals;
    });

    // --- STEP 3: RETURN RESULT ---
    // If a donor is found, return their name; otherwise, return the "not available" message
    return suitableDonor ? suitableDonor.name : "No donor available";
}

// --- EXAMPLE USAGE ---
console.log(matchIftarDonor([{ name: "Ali", capacity: 30 }, { name: "Hassan", capacity: 100 }], 50));
console.log(matchIftarDonor([{ name: "Omar", capacity: 10 }], 50));
console.log(matchIftarDonor([], 100));