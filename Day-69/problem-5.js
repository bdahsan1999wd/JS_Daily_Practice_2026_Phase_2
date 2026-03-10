/**
 * ⚠️ Function Name: getSpecialSalami()

 * Logic: Find oldest and youngest members, handling ties alphabetically.
 */

function getSpecialSalami(relatives) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(relatives) || relatives.length < 2) {
        return "Invalid Input";
    }

    // --- STEP 2: SORT BY AGE THEN NAME ---
    // sort the array once to make finding min/max easier
    const sorted = [...relatives].sort((a, b) => {
        if (a.age !== b.age) {
            return a.age - b.age; // Sort by age ascending
        }
        return a.name.localeCompare(b.name); // Sort by name alphabetically
    });

    // --- STEP 3: EXTRACT ---
    // Youngest is at index 0, Oldest is at the last index
    // Note: For oldest tie, need alphabetical first, but the last person in a simple
    // age sort would be the last alphabetically. To get alphabetical first in a tie
    // for the OLD person, we have to be careful with the logic.

    // Re-sorting specifically for oldest to ensure alphabetical first in case of tie
    const oldestSorted = [...relatives].sort((a, b) => {
        if (b.age !== a.age) return b.age - a.age; // Descending age
        return a.name.localeCompare(b.name); // Alphabetical name
    });

    return {
        youngest: sorted[0].name,
        oldest: oldestSorted[0].name
    };
}

// --- EXAMPLE USAGE ---
console.log(getSpecialSalami([
    { name: "Abir", age: 25 },
    { name: "Zayan", age: 5 },
    { name: "Dadi", age: 70 }
]));