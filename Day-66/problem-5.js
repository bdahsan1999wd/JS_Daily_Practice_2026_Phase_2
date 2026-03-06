/**
 * 🧩 PROBLEM–05: getPriorityLaundry()

 * * Logic: Filter items based on a boolean flag or a threshold number.
 */

function getPriorityLaundry(clothes) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(clothes) || clothes.length === 0) {
        return "Invalid Input";
    }

    // --- STEP 2: FILTER AND MAP ---
    // Challenge: Use .filter() for priority logic and .map() to extract names
    const priorityItems = clothes
        .filter(item => item.isEidDayWear === true || item.dirtyLevel > 7)
        .map(item => item.item);

    return priorityItems;
}

// --- EXAMPLE USAGE ---
const myClothes = [
    { item: "Panjabi", dirtyLevel: 5, isEidDayWear: true },
    { item: "Shirt", dirtyLevel: 2, isEidDayWear: false },
    { item: "Jeans", dirtyLevel: 9, isEidDayWear: false }
];

console.log(getPriorityLaundry(myClothes));