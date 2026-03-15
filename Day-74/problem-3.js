/**
 * ⚠️ Function Name: getAspectRatioType()

 * Logic: Determine the orientation of an image based on dimensions.
 */

function getAspectRatioType(width, height) {

    // --- STEP 1: VALIDATION ---
    if (typeof width !== 'number' || width <= 0 ||
        typeof height !== 'number' || height <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: CHECK ULTRA-WIDE (Challenge) ---
    if (width > height * 2) {
        return "Ultra-Wide";
    }

    // --- STEP 3: DETERMINE STANDARD ORIENTATION ---
    if (width > height) {
        return "Landscape";
    } else if (height > width) {
        return "Portrait";
    } else {
        return "Square";
    }
}

// --- EXAMPLE USAGE ---
console.log(getAspectRatioType(1920, 1080));
console.log(getAspectRatioType(2500, 1000));