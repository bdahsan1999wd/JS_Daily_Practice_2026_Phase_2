/**
 * ⚠️ Function Name: updateTicketStatus()

 * Logic: Locate a ticket by ID, update its status, and add a timestamp for cancellations.
 */

function updateTicketStatus(tickets, ticketId, newStatus) {

    // --- STEP 1: VALIDATION ---
    if (!Array.isArray(tickets) || typeof ticketId !== 'number' || ticketId <= 0 || typeof newStatus !== 'string') {
        return "Invalid Input";
    }

    // --- STEP 2: ARRAY MAPPING (State Management) ---
    return tickets.map(ticket => {
        if (ticket.id === ticketId) {
            // Create a copy of the ticket with the new status (Immutability)
            const updatedTicket = { ...ticket, status: newStatus };

            // --- STEP 3: CHALLENGE LOGIC ---
            // Rule: If status is "Cancelled", add cancelledAt property with current time
            if (newStatus === "Cancelled") {
                updatedTicket.cancelledAt = Date.now();
            }
            return updatedTicket;
        }
        // Return original ticket if ID doesn't match
        return ticket;
    });
}

// --- EXAMPLE USAGE ---
console.log(updateTicketStatus([{ id: 1, status: "Pending" }], 1, "Confirmed"));
console.log(updateTicketStatus([{ id: 1, status: "Pending" }], 1, "Cancelled"));