# 🌙 JS DAILY PRACTICE – DAY 60

📅 **Goal:** Advanced Systems & Data Parsing
🎯 **Focus:** Date Manipulation • Object Grouping • String Patterns • Mathematical Logic

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📅 Ramadan Duration Calculator

⚠️ **Function Name:** `getDaysBetweenDates()`

Calculate the total number of days between two specific dates (e.g., Start of Ramadan and Eid).

| Input      | `startDate` (string "YYYY-MM-DD") and `endDate` (string "YYYY-MM-DD"). |
| :--------- | :--------------------------------------------------------------------- |
| **Output** | Return the total number of days (number).                              |

**Rules:**

- **Logic:** Use the `new Date()` constructor to find the difference in milliseconds.
- **Conversion:** Convert milliseconds to days ($1 \text{ day} = 24 \times 60 \times 60 \times 1000 \text{ ms}$).
- **Rounding:** Use `Math.abs()` to ensure the result is positive.

| Challenge 📢 | Inputs must be valid date strings. If `Invalid Date`, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getDaysBetweenDates("2026-03-01", "2026-03-30")` ➔ `29`
- `getDaysBetweenDates("2026-03-10", "2026-03-10")` ➔ `0`

---

## 🧩 PROBLEM–02: 📊 Mosque Expense Auditor

⚠️ **Function Name:** `getCategorizedTotal()`

An auditor needs to sum up expenses for a mosque, but only for a specific category.

| Input      | `expenses` (array of objects) and `targetCategory` (string). |
| :--------- | :----------------------------------------------------------- |
| **Output** | Return the total sum of costs for that category (number).    |

**Rules:**

- **Structure:** `expenses` = `[{ category: "Food", cost: 500 }, { category: "Light", cost: 100 }]`.
- **Logic:** Filter the objects matching the `targetCategory` and sum their `cost`.
- **Case Sensitivity:** Matching must be case-insensitive.

| Challenge 📢 | `expenses` must be an array. `targetCategory` must be a non-empty string. |
| :----------- | :------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getCategorizedTotal([{category: "Food", cost: 200}, {category: "food", cost: 300}], "FOOD")` ➔ `500`
- `getCategorizedTotal([{category: "Utilities", cost: 100}], "Food")` ➔ `0`

---

## 🧩 PROBLEM–03: ⏳ Iftar Time Adjuster (Time Offset)

⚠️ **Function Name:** `adjustIftarTime()`

Sometimes Iftar times vary slightly by location (e.g., adding 2 minutes for a specific city).

| Input      | `baseTime` (string "HH:MM") and `offsetMinutes` (number). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return the adjusted time in "HH:MM" format (string).      |

**Rules:**

- **Logic:** Convert `baseTime` to total minutes, add the `offsetMinutes`, then convert back to `"HH:MM"`.
- **Formatting:** Hours and minutes must always be two digits (e.g., `09:05` instead of `9:5`).
- **Overflow:** If the time exceeds `23:59`, it should wrap around (e.g., `24:05` becomes `00:05`).

| Challenge 📢 | `baseTime` must be in valid "HH:MM" format. `offsetMinutes` can be positive or negative. |
| :----------- | :--------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `adjustIftarTime("18:15", 5)` ➔ `"18:20"`
- `adjustIftarTime("23:55", 10)` ➔ `"00:05"`

---

## 🧩 PROBLEM–04: 🏷️ Charity ID Generator

⚠️ **Function Name:** `generateCharityID()`

Create a unique ID for a donor based on their name and year of donation.

| Input      | `donorName` (string) and `year` (number). |
| :--------- | :---------------------------------------- |
| **Output** | Return a string ID.                       |

**Rules:**

- **Format:** `[First 3 letters of Name in Uppercase]-[Last 2 digits of Year]-[Random 3-digit number]`.
- **Randomness:** The random number should be between `100` and `999`.
- **Validation:** `donorName` must be at least 3 letters long.

| Challenge 📢 | `donorName` must be string. `year` must be a 4-digit positive integer. |
| :----------- | :--------------------------------------------------------------------- |

**Sample Input & Output:**

- `generateCharityID("Abdullah", 2026)` ➔ `"ABD-26-482"` (Random part varies)
- `generateCharityID("Ali", 2026)` ➔ `"ALI-26-105"`

---

## 🧩 PROBLEM–05: 🥘 Sehri Nutrition Grade

⚠️ **Function Name:** `getSehriGrade()`

Grade a Sehri meal plan based on its fiber, protein, and hydration content.

| Input      | `nutrition` (object).          |
| :--------- | :----------------------------- |
| **Output** | Return `"A"`, `"B"`, or `"C"`. |

**Rules:**

- **Structure:** `nutrition` = `{ fiber: 10, protein: 15, water: 2 }` (water in Liters).
- **Grade A:** `fiber >= 10` AND `protein >= 15` AND `water >= 1`.
- **Grade B:** At least two of the conditions for Grade A are met.
- **Grade C:** Only one or zero conditions are met.

| Challenge 📢 | Object must contain all three keys with non-negative values. |
| :----------- | :----------------------------------------------------------- |

**Sample Input & Output:**

- `getSehriGrade({fiber: 12, protein: 20, water: 1.5})` ➔ `"A"`
- `getSehriGrade({fiber: 5, protein: 20, water: 2})` ➔ `"B"`
- `getSehriGrade({fiber: 2, protein: 5, water: 0.5})` ➔ `"C"`

---
