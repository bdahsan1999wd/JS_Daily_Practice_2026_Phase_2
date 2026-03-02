# 🌙 JS DAILY PRACTICE – DAY 61

📅 **Goal:** Mosque Financial Management & Data Analysis
🎯 **Focus:** Array Methods • Date Logic • Financial Math • Object Processing

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💰 Zakat & Fitra Pooler

⚠️ **Function Name:** `getDonationTotals()`

Calculate the total amount collected for Zakat and Fitra separately.

| Input      | `donations` (array of objects, e.g., `[{type: "Zakat", amount: 500}]`). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return an object `{ totalZakat: number, totalFitra: number }`.          |

**Rules:**

- **Logic:** Iterate through the array and sum the `amount` based on the `type` ("Zakat" or "Fitra").
- **Case Sensitivity:** Matching must be case-insensitive.

| Challenge 📢 | `donations` must be an array. If empty or invalid, return `"Invalid Input"`. |
| :----------- | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getDonationTotals([{type: "Zakat", amount: 500}, {type: "Fitra", amount: 100}])` ➔ `{ totalZakat: 500, totalFitra: 100 }`

---

## 🧩 PROBLEM–02: 📅 Salary Disbursement Date

⚠️ **Function Name:** `getNextSalaryDate()`

The Imam’s salary is disbursed on the 5th of every month. Determine the next payment date.

| Input      | `currentDate` (string "YYYY-MM-DD"). |
| :--------- | :----------------------------------- |
| **Output** | Return a string "YYYY-MM-DD".        |

**Rules:**

- **Logic:** If the day of `currentDate` is before the 5th, return the 5th of the current month. If the day is 5th or later, return the 5th of the next month.
- **Handling:** Ensure the month rolls over correctly (e.g., December to January).

| Challenge 📢 | `currentDate` must be a valid date string. |
| :----------- | :----------------------------------------- |

**Sample Input & Output:**

- `getNextSalaryDate("2026-03-02")` ➔ `"2026-03-05"`
- `getNextSalaryDate("2026-03-06")` ➔ `"2026-04-05"`

---

## 🧩 PROBLEM–03: ⚡ Electricity Bill Optimizer

⚠️ **Function Name:** `checkBillStatus()`

Check if the average electricity bill is sustainable compared to the budget.

| Input      | `monthlyBudget` (number) and `billHistory` (array of 3 numbers). |
| :--------- | :--------------------------------------------------------------- |
| **Output** | Return `"High"` or `"Stable"` (string).                          |

**Rules:**

- **Logic:** Calculate the average of the 3 months. If the average is $> 110\%$ of the `monthlyBudget`, return `"High"`. Otherwise, return `"Stable"`.

| Challenge 📢 | `billHistory` must contain exactly 3 numbers. `monthlyBudget` > 0. |
| :----------- | :----------------------------------------------------------------- |

**Sample Input & Output:**

- `checkBillStatus(1000, [900, 1000, 1100])` ➔ `"Stable"`
- `checkBillStatus(1000, [1200, 1300, 1200])` ➔ `"High"`

---

## 🧩 PROBLEM–04: 📝 Daily Donation Logger

⚠️ **Function Name:** `formatDonationLog()`

Generate a standardized string for the mosque's daily registry.

| Input      | `mosjidName` (string), `amount` (number), `date` (string). |
| :--------- | :--------------------------------------------------------- |
| **Output** | Return a formatted string.                                 |

**Rules:**

- **Format:** `"Name | Amount: [amount] BDT | Date: [date]"`
- **Validation:** `amount` must be a positive number. `mosjidName` must not be empty.

| Challenge 📢 | All inputs must be valid types. |
| :----------- | :------------------------------ |

**Sample Input & Output:**

- `formatDonationLog("S.K. Bazar Jame Mosjid", 500, "2026-03-02")` ➔ `"S.K. Bazar Jame Mosjid | Amount: 500 BDT | Date: 2026-03-02"`

---

## 🧩 PROBLEM–05: 🛠️ Maintenance Reserve Tracker

⚠️ **Function Name:** `getMaintenanceBalance()`

Calculate the net balance of the mosque’s "Emergency Repair Fund."

| Input      | `donations` (array of numbers) and `expenses` (array of numbers). |
| :--------- | :---------------------------------------------------------------- |
| **Output** | Return `"Surplus: [amount]"` or `"Deficit: [amount]"`.            |

**Rules:**

- **Logic:** `Sum(donations) - Sum(expenses)`.
- **Formatting:** Ensure the output indicates whether the fund is in surplus or deficit.

| Challenge 📢 | Inputs must be arrays of numbers. If arrays are empty, treat sum as 0. |
| :----------- | :--------------------------------------------------------------------- |

**Sample Input & Output:**

- `getMaintenanceBalance([1000, 2000], [500, 500])` ➔ `"Surplus: 2000"`
- `getMaintenanceBalance([500], [1000, 200])` ➔ `"Deficit: 700"`

---
