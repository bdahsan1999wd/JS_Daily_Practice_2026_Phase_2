# 🌙 JS DAILY PRACTICE – DAY-76

📅 **Goal:** State Management & Data Normalization
🎯 **Focus:** Object Mapping • Array Reduction • State Toggles • Search Logic

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🎟️ Ticket Status Updater

⚠️ **Function Name:** `updateTicketStatus()`

In your ticketing system, you need to update the status of a specific ticket based on its ID.

| Input      | `tickets` (Array of objects), `ticketId` (number), and `newStatus` (string). |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return updated Array of objects.                                             |

**Rules:**

- **Validation:** `tickets` must be an array, `ticketId` a positive number, and `newStatus` a string.
- **Logic:** Find the ticket with the matching ID and update its `status` property.

| Challenge 📢 | If the `newStatus` is "Cancelled", add a new property `cancelledAt` with the current timestamp (use `Date.now()`). |
| :----------- | :----------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `updateTicketStatus([{id: 1, status: "Pending"}], 1, "Confirmed")` ➔ `[{id: 1, status: "Confirmed"}]`

---

## 🧩 PROBLEM–02: 🛒 Bulk Order Price Calculator

⚠️ **Function Name:** `calculateBulkTotal()`

You are processing multiple ticket bookings at once. Calculate the total cost from an array of quantities.

| Input      | `orders` (Array of numbers) and `pricePerUnit` (number). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return number (Total Price).                             |

**Rules:**

- **Validation:** `orders` must be an array of positive numbers. `pricePerUnit` must be positive.
- **Logic:** Sum up all orders and multiply by the price.

| Challenge 📢 | If the total quantity of tickets is 10 or more, apply a flat 15% discount to the final total. |
| :----------- | :-------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateBulkTotal([2, 3, 1], 100)` ➔ `600`
- `calculateBulkTotal([5, 5], 100)` ➔ `850` (1000 - 15% discount)

---

## 🧩 PROBLEM–03: 🔍 Flight Route Search

⚠️ **Function Name:** `findAvailableRoute()`

Check if a specific flight route exists in your travel database.

| Input      | `routes` (Array of strings) and `searchQuery` (string). |
| :--------- | :------------------------------------------------------ |
| **Output** | Return string: `"Route Available"` or `"Not Found"`.    |

**Rules:**

- **Validation:** `routes` must be an array, `searchQuery` must be a string.
- **Logic:** Check if the `searchQuery` exists in the `routes` array.

| Challenge 📢 | Perform a "Partial Match" search. If the query is "Dha", it should match "Dhaka". The search must be case-insensitive. |
| :----------- | :--------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `findAvailableRoute(["Dhaka-Sylhet", "Chittagong-Khulna"], "sylhet")` ➔ `"Route Available"`

---

## 🧩 PROBLEM–04: 🛠️ Environment Config Merger

⚠️ **Function Name:** `mergeConfig()`

As a developer, you often need to merge default settings with user-defined settings for your Node.js environments.

| Input      | `defaultConfig` (Object) and `userConfig` (Object). |
| :--------- | :-------------------------------------------------- |
| **Output** | Return a single merged Object.                      |

**Rules:**

- **Validation:** Both inputs must be objects.
- **Logic:** Merge both objects. If a key exists in both, the `userConfig` value should overwrite the `defaultConfig`.

| Challenge 📢 | If the `userConfig` contains a key named `mode` with the value "production", remove any key named `debug` from the final merged object. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `mergeConfig({port: 3000, debug: true}, {port: 5000, mode: "production"})` ➔ `{port: 5000, mode: "production"}`

---

## 🧩 PROBLEM–05: 📉 Data Normalizer (Names)

⚠️ **Function Name:** `normalizeUserNames()`

Your database has messy user input. You need to clean up the names for your UI components.

| Input      | `names` (Array of strings).        |
| :--------- | :--------------------------------- |
| **Output** | Return Array of strings (Cleaned). |

**Rules:**

- **Validation:** Input must be an array of strings.
- **Logic:** Trim extra whitespace from both ends and convert to "Title Case" (e.g., " ahsan " ➔ "Ahsan").

| Challenge 📢 | If any name becomes empty after trimming, do not include it in the final returned array. |
| :----------- | :--------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `normalizeUserNames([" ahsan", "   ", "SAMI "])` ➔ `["Ahsan", "Sami"]`

---
