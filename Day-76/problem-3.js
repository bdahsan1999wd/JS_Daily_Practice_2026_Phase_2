/**
 * ⚠️ Function Name: findAvailableRoute()

 * Logic: Search for a route using a case-insensitive partial match.
 */

function findAvailableRoute(routes, searchQuery) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(routes) || typeof searchQuery !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: SEARCH LOGIC (Challenge) ---
    const lowerQuery = searchQuery.toLowerCase();

    // .some() returns true as soon as a match is found
    const isFound = routes.some(route => {
        if (typeof route !== 'string') return false;
        // Check if the route string contains the search query
        return route.toLowerCase().includes(lowerQuery);
    });

    return isFound ? "Route Available" : "Not Found";
}

// --- EXAMPLE USAGE ---
console.log(findAvailableRoute(["Dhaka-Sylhet", "Chittagong-Khulna"], "sylhet"));