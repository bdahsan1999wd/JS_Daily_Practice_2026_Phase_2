/**
 * ⚠️ Function Name: checkPhotoSpace()

 * Logic: Convert GB to MB and calculate if there's enough space for photos.
 */

function checkPhotoSpace(remainingGB, photoCount) {

    // --- STEP 1: VALIDATION ---
    if (typeof remainingGB !== 'number' || remainingGB <= 0 ||
        typeof photoCount !== 'number' || photoCount <= 0) {
        return "Invalid Input";
    }

    // --- STEP 2: UNIT CONVERSION ---
    const availableMB = remainingGB * 1024;
    const requiredMB = photoCount * 12;

    // --- STEP 3: SPACE CHECK ---
    if (availableMB >= requiredMB) {
        return true;
    } else {
        // --- STEP 4: CALCULATE DEFICIT (Challenge) ---
        const deficit = (requiredMB - availableMB).toFixed(2);
        return `Need ${deficit} MB more space`;
    }
}

// --- EXAMPLE USAGE ---
console.log(checkPhotoSpace(0.1, 5));
console.log(checkPhotoSpace(0.02, 10));