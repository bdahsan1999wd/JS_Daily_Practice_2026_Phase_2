/**
 * ⚠️ Function Name: minifyCss()

 * Logic: Strip whitespace and line breaks from CSS strings for optimization.
 */

function minifyCss(cssCode) {
    // --- STEP 1: VALIDATION ---
    if (typeof cssCode !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK FOR EMPTY INPUT (Challenge) ---
    if (cssCode.trim() === "") {
        return "Empty Stylesheet";
    }

    // --- STEP 3: REMOVE WHITESPACE ---
    // Uses regex to replace all whitespace characters (spaces, tabs, newlines)
    return cssCode.replace(/\s+/g, '');
}

// --- EXAMPLE USAGE ---
console.log(minifyCss(" .btn { color: red; } "));