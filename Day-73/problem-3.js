/**
 * ⚠️ Function Name: isProjectReady()

 * * Logic: Perform a case-insensitive check for specific tech stack requirements.
 */

function isProjectReady(currentStack) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(currentStack)) {
        return "Invalid Input";
    }

    // --- STEP 2: CASE-INSENSITIVE MAPPING ---
    const lowerStack = currentStack.map(tech =>
        typeof tech === 'string' ? tech.toLowerCase() : ""
    );

    // --- STEP 3: CHECK REQUIREMENTS (Challenge) ---
    const hasTailwind = lowerStack.includes("tailwind");
    const hasNode = lowerStack.includes("node");
    const hasGit = lowerStack.includes("git");

    return hasTailwind && hasNode && hasGit;
}

// --- EXAMPLE USAGE ---
console.log(isProjectReady(["Git", "Node", "React", "Tailwind"]));
console.log(isProjectReady(["node", "git"]));