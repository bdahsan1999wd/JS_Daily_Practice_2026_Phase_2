/**
 * 🧩 PROBLEM–04: getFileType()

 * Logic: Extract extension after the last dot and categorize developer files.
 */

function getFileType(fileName) {
    
    // --- STEP 1: VALIDATION ---
    if (typeof fileName !== 'string' || !fileName.includes('.')) {
        return "Invalid Input";
    }

    // --- STEP 2: EXTRACT EXTENSION ---
    const parts = fileName.split('.');
    const extension = parts[parts.length - 1].toLowerCase();

    // --- STEP 3: CATEGORIZATION (Challenge) ---
    // Rule: js or ts returns "Developer File"
    if (extension === "js" || extension === "ts") {
        return "Developer File";
    }

    return extension;
}

// --- EXAMPLE USAGE ---
console.log(getFileType("script.JS"));
console.log(getFileType("photo.JPG"));