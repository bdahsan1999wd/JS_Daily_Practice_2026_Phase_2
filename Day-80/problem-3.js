/**
 * 🧩 PROBLEM–03: getDeepValue()

 * Logic: Split the string path by '.' and traverse the object using a loop.
 */

function getDeepValue(userObj, keyPath) {

    // --- STEP 1: VALIDATION ---
    if (typeof userObj !== 'object' || userObj === null || typeof keyPath !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: TRAVERSE PATH ---
    const keys = keyPath.split('.');
    let current = userObj;

    for (let key of keys) {
        // If the key doesn't exist, we can't go deeper
        if (current === null || current === undefined || !(key in current)) {
            return "Not Found";
        }
        current = current[key];
    }

    // --- STEP 3: NULL/UNDEFINED CHECK (Challenge) ---
    if (current === null || current === undefined) {
        return "Empty Value";
    }

    return current;
}

// --- EXAMPLE USAGE ---
console.log(getDeepValue({ profile: { name: "Ahsan" } }, "profile.name"));
console.log(getDeepValue({ id: 1 }, "profile.email"));