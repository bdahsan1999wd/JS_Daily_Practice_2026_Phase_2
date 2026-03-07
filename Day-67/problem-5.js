/**
🧩 PROBLEM–05: getVisitList()

 Logic: Multi-level sorting (Seniority first, then Distance).
 */

function getVisitList(relatives) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(relatives)) {
        return "Invalid Input";
    }

    // --- STEP 2: CUSTOM SORT ---
    // Challenge: Use .sort() with custom comparison
    const sortedList = [...relatives].sort((a, b) => {
        // Priority 1: Seniority (true comes before false)
        if (a.isSr !== b.isSr) {
            return a.isSr ? -1 : 1;
        }
        // Priority 2: Distance (shorter distance first)
        return a.dist - b.dist;
    });

    // --- STEP 3: MAP TO NAMES ---
    return sortedList.map(relative => relative.name);
}

// --- EXAMPLE USAGE ---
const family = [
    { name: "A", dist: 10, isSr: false },
    { name: "B", dist: 2, isSr: true },
    { name: "C", dist: 15, isSr: true }
];

console.log(getVisitList(family));