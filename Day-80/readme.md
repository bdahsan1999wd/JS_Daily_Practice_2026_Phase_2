# 🌙 JS DAILY PRACTICE – DAY-80

📅 **Goal:** Object Transformation & Data Grouping
🎯 **Focus:** Array.reduce() • Object.entries() • Nested Validation • Deep Copying

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📊 Ticket Sales Grouper

⚠️ **Function Name:** `groupTicketsByCategory()`

You need to organize a flat list of tickets into categories for your dashboard.

| Input      | `tickets` (Array of objects with `category` and `price`). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return an Object grouped by category.                     |

**Rules:**

- **Validation:** Input must be an array of objects.
- **Logic:** Create an object where keys are category names and values are arrays of ticket objects belonging to that category.

| Challenge 📢 | If a ticket object is missing a `category` property, skip it. If the `category` is an empty string, group it under `"Uncategorized"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `groupTicketsByCategory([{category: "VIP", price: 500}, {category: "", price: 100}])` ➔ `{ VIP: [{...}], Uncategorized: [{...}] }`

---

## 🧩 PROBLEM–02: 🕒 Multi-Format Time Converter

⚠️ **Function Name:** `formatDuration()`

Convert total seconds into a readable "HH:MM:SS" format for bus travel duration.

| Input      | `totalSeconds` (number).        |
| :--------- | :------------------------------ |
| **Output** | Return string (Formatted time). |

**Rules:**

- **Validation:** Input must be a non-negative number.
- **Logic:** Calculate hours, minutes, and seconds. Format as `00:00:00`.

| Challenge 📢 | If the total hours exceed 24, return the string `"Over 24 Hours"`. |
| :----------- | :----------------------------------------------------------------- |

**Sample Input & Output:**

- `formatDuration(3661)` ➔ `"01:01:01"`
- `formatDuration(90000)` ➔ `"Over 24 Hours"`

---

## 🧩 PROBLEM–03: 🔍 Nested Property Finder

⚠️ **Function Name:** `getDeepValue()`

Safely extract a value from a nested user profile object without crashing the app.

| Input      | `userObj` (Object) and `keyPath` (string). |
| :--------- | :----------------------------------------- |
| **Output** | Return the found value or `"Not Found"`.   |

**Rules:**

- **Validation:** `userObj` must be an object, `keyPath` a string.
- **Logic:** Access nested keys using dot notation (e.g., `"address.city"`).

| Challenge 📢 | If the extracted value is `null` or `undefined`, return `"Empty Value"`. |
| :----------- | :----------------------------------------------------------------------- |

**Sample Input & Output:**

- `getDeepValue({profile: {name: "Ahsan"}}, "profile.name")` ➔ `"Ahsan"`
- `getDeepValue({id: 1}, "profile.email")` ➔ `"Not Found"`

---

## 🧩 PROBLEM–04: 🔄 Object Key Swapper

⚠️ **Function Name:** `swapKeysAndValues()`

Invert an object so that its values become keys and its keys become values.

| Input      | `dataObj` (Object).           |
| :--------- | :---------------------------- |
| **Output** | Return a new inverted Object. |

**Rules:**

- **Validation:** Input must be a valid object where values are strings or numbers.
- **Logic:** Use `Object.entries()` to swap pairs.

| Challenge 📢 | If two keys have the same value, the last key processed should be the final value for that new key. |
| :----------- | :-------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `swapKeysAndValues({a: 1, b: 2})` ➔ `{ "1": "a", "2": "b" }`

---

## 🧩 PROBLEM–05: 🧾 Tax Invoice Generator

⚠️ **Function Name:** `generateTaxInvoice()`

Calculate the final bill for a customer, including variable tax rates.

| Input      | `items` (Array of objects with `price` and `isTaxable`).      |
| :--------- | :------------------------------------------------------------ |
| **Output** | Return a summary Object: `{ subtotal: 0, tax: 0, total: 0 }`. |

**Rules:**

- **Validation:** Input must be an array of objects.
- **Logic:** Tax is 15% only for items where `isTaxable` is `true`.

| Challenge 📢 | Round all results to exactly 2 decimal places using `toFixed(2)`, but return them as **numbers**, not strings. |
| :----------- | :------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `generateTaxInvoice([{price: 100, isTaxable: true}, {price: 50, isTaxable: false}])` ➔ `{ subtotal: 150.00, tax: 15.00, total: 165.00 }`

---
