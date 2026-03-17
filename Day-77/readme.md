# 🌙 JS DAILY PRACTICE – DAY-77

📅 **Goal:** Object Property Control & Advanced Filtering
🎯 **Focus:** Object.keys() • Array Filtering • Property Deletion • Math Methods

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🛍️ Inventory Stock Alert

⚠️ **Function Name:** `getLowStockItems()`

You need to check which items in your "Smart Ticketing" merchandise shop are running low.

| Input      | `inventory` (Object where key is item name and value is stock count). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return Array of strings (Names of low stock items).                   |

**Rules:**

- **Validation:** `inventory` must be a non-null object.
- **Logic:** An item is "Low Stock" if its count is less than 10.

| Challenge 📢 | If an item has 0 stock, add "(Out of Stock)" after the name (e.g., "Cap (Out of Stock)"). |
| :----------- | :---------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getLowStockItems({Tshirt: 15, Cap: 0, Sticker: 5})` ➔ `["Cap (Out of Stock)", "Sticker"]`

---

## 🧩 PROBLEM–02: 🔐 API Key Masker (Config)

⚠️ **Function Name:** `maskConfigSecret()`

Before saving your Node.js config to a log file, you must mask the API keys for security.

| Input      | `config` (Object).                      |
| :--------- | :-------------------------------------- |
| **Output** | Return a new Object with masked values. |

**Rules:**

- **Validation:** Input must be an object.
- **Logic:** Find keys named `apiKey` or `secret` and replace their values with `"HIDDEN"`.

| Challenge 📢 | The check should be case-insensitive (e.g., `API_KEY`, `Secret`, `apiKey` should all be masked). |
| :----------- | :----------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `maskConfigSecret({port: 3000, apiKey: "12345"})` ➔ `{port: 3000, apiKey: "HIDDEN"}`

---

## 🧩 PROBLEM–03: 🎟️ Dynamic Ticket Pricing

⚠️ **Function Name:** `calculateDynamicPrice()`

Your ticketing app increases the price based on demand (number of seats already booked).

| Input      | `basePrice` (number) and `bookedSeats` (number). |
| :--------- | :----------------------------------------------- |
| **Output** | Return number (New Price).                       |

**Rules:**

- **Validation:** Both must be positive numbers.
- **Logic:** - If `bookedSeats > 50` ➔ Increase price by 10%.
  - If `bookedSeats > 100` ➔ Increase price by 20%.

| Challenge 📢 | If the booking is made on a weekend (Saturday/Sunday), add an extra 50 BDT "Weekend Fee" after the percentage increase. (Assume a third parameter `isWeekend` boolean). |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateDynamicPrice(1000, 60, true)` ➔ `1150` (1000 + 10% = 1100 + 50)

---

## 🧩 PROBLEM–04: 📧 Newsletter Filter

⚠️ **Function Name:** `filterValidEmails()`

Clean up your subscriber list by removing invalid entries.

| Input      | `emails` (Array of strings).            |
| :--------- | :-------------------------------------- |
| **Output** | Return Array of strings (Valid emails). |

**Rules:**

- **Validation:** Input must be an array.
- **Logic:** An email is valid if it contains both `@` and `.com`.

| Challenge 📢 | Convert all valid emails to lowercase before returning the array. |
| :----------- | :---------------------------------------------------------------- |

**Sample Input & Output:**

- `filterValidEmails(["Ahsan@Gmail.com", "invalid-email", "test@web.co"])` ➔ `["ahsan@gmail.com"]`

---

## 🧩 PROBLEM–05: 🕒 Work Hour Tracker

⚠️ **Function Name:** `isOvertimeDone()`

Check if a developer has completed overtime hours for the week.

| Input      | `dailyHours` (Array of 7 numbers). |
| :--------- | :--------------------------------- |
| **Output** | Return boolean.                    |

**Rules:**

- **Validation:** Array must have exactly 7 numbers.
- **Logic:** Total hours must be greater than 40 for the result to be `true`.

| Challenge 📢 | If the developer worked more than 10 hours in any single day, they get an "Instant Bonus." Return the string `"Bonus Eligible"` instead of `true`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isOvertimeDone([8, 8, 8, 8, 8, 0, 0])` ➔ `false` (Total 40)
- `isOvertimeDone([11, 8, 8, 8, 8, 0, 0])` ➔ `"Bonus Eligible"`

---
