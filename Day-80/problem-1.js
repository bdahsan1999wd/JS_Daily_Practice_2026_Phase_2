/**
 * 🧩 PROBLEM–01: groupTicketsByCategory()

 * Logic: Use .reduce() to build an object, grouping items by their category name.
 */

function groupTicketsByCategory(tickets) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(tickets)) {
        return "Invalid Input";
    }

    // --- STEP 2: GROUPING LOGIC ---
    return tickets.reduce((acc, ticket) => {
        // Validation: skip if not an object or if category property is missing
        if (typeof ticket !== 'object' || ticket === null || !('category' in ticket)) {
            return acc;
        }

        // --- STEP 3: CATEGORY SANITIZATION (Challenge) ---
        let cat = ticket.category;
        if (cat === "") {
            cat = "Uncategorized";
        }

        // Initialize the array for the category if it doesn't exist yet
        if (!acc[cat]) {
            acc[cat] = [];
        }

        // Add the ticket to its respective category
        acc[cat].push(ticket);

        return acc;
    }, {});
}

// --- EXAMPLE USAGE ---
console.log(groupTicketsByCategory([{ category: "VIP", price: 500 }, { category: "", price: 100 }]));