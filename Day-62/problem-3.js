// 🧩 PROBLEM–03: filterEligibleFamilies()

// Logic: Filter the list based on income and then extract only the names.

function filterEligibleFamilies(families) {

    // --- STEP 1: VALIDATION ---
    // Must be an array
    if (!Array.isArray(families)) {
        return "Invalid Input";
    }

    // --- STEP 2: PROCESSING ---
    // Use .filter() to find families with income < 5000
    // Use .map() to return an array of just the name strings
    try {
        const eligible = families
            .filter(family => typeof family.income === 'number' && family.income < 5000)
            .map(family => family.name);

        return eligible;
    } catch (error) {
        return "Invalid Input";
    }
}

// --- EXAMPLE USAGE ---
console.log(filterEligibleFamilies([{ name: "A", income: 4000 }, { name: "B", income: 6000 }]));
console.log(filterEligibleFamilies([{ name: "X", income: 7000 }]));