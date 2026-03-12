/**
 * ⚠️ Function Name: filterGuestList()

 * Logic: Filter confirmed guests and handle capacity limits for the final list.
 */

function filterGuestList(guests) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(guests)) {
        return "Invalid Input";
    }
    if (guests.length === 0) return [];

    // --- STEP 2: FILTER AND MAP ---
    // Filter for "Coming" status and extract only names
    const confirmedGuests = guests
        .filter(guest => guest.status === "Coming")
        .map(guest => guest.name);

    // --- STEP 3: CAPACITY CHECK (Challenge) ---
    // If more than 5, slice the first 5 and add "Limited Capacity"
    if (confirmedGuests.length > 5) {
        const limitedList = confirmedGuests.slice(0, 5);
        limitedList.push("Limited Capacity");
        return limitedList;
    }

    return confirmedGuests;
}

// --- EXAMPLE USAGE ---
console.log(filterGuestList([{ name: "A", status: "Coming" }, { name: "B", status: "Busy" }]));