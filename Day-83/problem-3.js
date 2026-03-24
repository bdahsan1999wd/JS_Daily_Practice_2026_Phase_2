/**
 * 🧩 PROBLEM–03: categorizeTests()

 * Logic: Group test names by their respective categories into an object.
 */

function categorizeTests(testList) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(testList) || testList.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: GROUPING LOGIC ---
    const grouped = testList.reduce((acc, test) => {
        // Validation: Skip if it's not an object or if name/category is missing
        if (typeof test !== 'object' || !test.name || !test.category) {
            return acc;
        }

        const cat = test.category;
        const testName = test.name;

        // Initialize the array for the category if it doesn't exist
        if (!acc[cat]) {
            acc[cat] = [];
        }

        // Add the test name to the category array
        acc[cat].push(testName);

        return acc;
    }, {});

    // --- STEP 3: SORTING (Challenge) ---
    // Ensure the test names are sorted alphabetically within each category
    for (const category in grouped) {
        grouped[category].sort();
    }

    return grouped;
}

// --- EXAMPLE USAGE ---
const tests = [
    { name: "Widal", category: "Blood" },
    { name: "CBC", category: "Blood" },
    { name: "USG", category: "Imaging" },
    { name: "X-Ray", category: "Imaging" },
    { name: "Sugar", category: "" }
];

console.log(categorizeTests(tests));