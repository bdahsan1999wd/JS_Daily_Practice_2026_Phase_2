/**
 * 🧩 PROBLEM–03: getSpecialDietGuests()

 * * Logic: Filter guests who have dietary restrictions and return their names.
 */

function getSpecialDietGuests(guestList) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(guestList) || guestList.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: FILTER AND MAP ---
    // Challenge: Chain .filter() to find diets and .map() to get names
    return guestList
        .filter(guest => guest.diet && guest.diet.toLowerCase() !== "none")
        .map(guest => guest.name);
}

// --- EXAMPLE USAGE ---
console.log(getSpecialDietGuests([{ name: "A", diet: "none" }, { name: "B", diet: "diabetic" }]));