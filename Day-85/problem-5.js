/**
 * 🧩 PROBLEM–05: getAvailableDoctors()

 * Logic: Filter active doctors and sort by queue length then name.
 */

function getAvailableDoctors(doctors) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(doctors) || doctors.length === 0) return "Invalid Input";

    // --- STEP 2: FILTER ACTIVE DOCTORS ---
    const activeDoctors = doctors.filter(doc => doc.isActive === true);

    // --- STEP 3: COMPLEX SORTING (Challenge) ---
    activeDoctors.sort((a, b) => {
        // First sort by currentQueue (Ascending)
        if (a.currentQueue !== b.currentQueue) {
            return a.currentQueue - b.currentQueue;
        }
        // If queue is same, sort by name (Alphabetical)
        return a.name.localeCompare(b.name);
    });

    return activeDoctors.map(doc => doc.name);
}

// --- EXAMPLE USAGE ---
const docs = [
    { name: "Dr. Z", isActive: true, currentQueue: 10 },
    { name: "Dr. A", isActive: true, currentQueue: 2 },
    { name: "Dr. B", isActive: true, currentQueue: 2 }
];

console.log(getAvailableDoctors(docs));