// 🧩 PROBLEM–01: sortSurgeryQueue()

// Logic: Sort surgeries by priority (High > Medium > Low) and then by duration.

function sortSurgeryQueue(surgeries) {

    // --- STEP 1: VALIDATION ---
    // Input must be a non-empty array
    if (!Array.isArray(surgeries) || surgeries.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: DEFINE PRIORITY WEIGHTS ---
    const priorityMap = { "High": 3, "Medium": 2, "Low": 1 };

    // --- STEP 3: SORTING LOGIC ---
    // Creating a copy of the array to avoid mutating the original one
    const sortedQueue = [...surgeries].sort((a, b) => {
        const priorityA = priorityMap[a.priority];
        const priorityB = priorityMap[b.priority];

        // If priorities are different, sort by priority (Descending)
        if (priorityA !== priorityB) {
            return priorityB - priorityA;
        }

        // --- STEP 4: CHALLENGE HANDLING ---
        // If priority is same, sort by duration (Shorter duration first - Ascending)
        if (a.duration !== b.duration) {
            return a.duration - b.duration;
        }

        // If both same, keep original order (Stable sort)
        return 0;
    });

    return sortedQueue;
}

// --- EXAMPLE USAGE ---
const list = [{ p: "A", duration: 60, priority: "Medium" }, { p: "B", duration: 30, priority: "High" }];

console.log(sortSurgeryQueue(list));