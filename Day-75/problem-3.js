/**
 * ⚠️ Function Name: findDuplicatePlugins()

 * Logic: Array filtering to identify redundant dependencies.
 */

function findDuplicatePlugins(pluginList) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(pluginList)) {
        return "Invalid Input";
    }

    // --- STEP 2: IDENTIFY DUPLICATES ---
    const duplicates = pluginList.filter((item, index) =>
        pluginList.indexOf(item) !== index
    );

    // --- STEP 3: RETURN UNIQUE DUPLICATES (Challenge) ---
    // Rule: Use Set to ensure the result array doesn't have duplicates of its own.
    return [...new Set(duplicates)];
}

// --- EXAMPLE USAGE ---
console.log(findDuplicatePlugins(["Tailwind", "DaisyUI", "Tailwind", "Git"]));