# 🌙 JS DAILY PRACTICE – DAY 56

📅 **Goal:** Smart Islamic Community Hub
🎯 **Focus:** Object Mapping • Nested Validation • Array Search • Logical Edge Cases

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🍲 Iftar Donor Matcher

⚠️ **Function Name:** `matchIftarDonor()`

A community hub maintains a list of donors. You need to find the first donor who can provide at least a specific number of meals.

| Input      | `donors` (array of objects) and `requiredMeals` (number). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return the donor name (string).                           |

**Rules:**

- **Structure:** `donors` looks like `[{ name: "Karim", capacity: 50 }, { name: "Rahim", capacity: 120 }]`.
- **Logic:** Find the **first** donor where `capacity >= requiredMeals`.
- **Not Found:** If no donor meets the requirement, return `"No donor available"`.

| Challenge 📢 | `requiredMeals` must be positive. `donors` must be a non-empty array. |
| :----------- | :-------------------------------------------------------------------- |

**Sample Input & Output:**

- `matchIftarDonor([{name: "Ali", capacity: 30}, {name: "Hassan", capacity: 100}], 50)` ➔ `"Hassan"`
- `matchIftarDonor([{name: "Omar", capacity: 10}], 50)` ➔ `"No donor available"`
- `matchIftarDonor([], 100)` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🕌 Prayer Row Capacity Planner

⚠️ **Function Name:** `canAccommodatePrayers()`

A mosque manager needs to check if the prayer hall can accommodate a specific number of people.

| Input      | `rows` (number), `spacePerRow` (number), and `totalPeople` (number). |
| :--------- | :------------------------------------------------------------------- |
| **Output** | Return `true` or `false` (boolean).                                  |

**Rules:**

- **Formula:** `Total Capacity = rows * spacePerRow`.
- **Logic:** Return `true` if the capacity is greater than or equal to `totalPeople`.
- **Validation:** All inputs must be positive integers.

| Challenge 📢 | Return `"Invalid Input"` if any input is non-numeric or less than 1. |
| :----------- | :------------------------------------------------------------------- |

**Sample Input & Output:**

- `canAccommodatePrayers(10, 20, 150)` ➔ `true`
- `canAccommodatePrayers(5, 10, 100)` ➔ `false`
- `canAccommodatePrayers(-1, 20, 100)` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–03: 📅 Eid Moon Sighting Probability

⚠️ **Function Name:** `getEidSightingChance()`

Calculate the probability of sighting the moon based on visibility scores and weather conditions.

| Input      | `visibilityScore` (number 0-100) and `isCloudy` (boolean). |
| :--------- | :--------------------------------------------------------- |
| **Output** | Return `"High"`, `"Medium"`, or `"Low"`.                   |

**Rules:**

- **High:** `visibilityScore > 80` AND `isCloudy` is `false`.
- **Medium:** `visibilityScore` is between `50` and `80` (inclusive) OR (`visibilityScore > 80` AND `isCloudy` is `true`).
- **Low:** Any other valid case where the score is below 50.

| Challenge 📢 | `visibilityScore` must be between 0 and 100. `isCloudy` must be a boolean. |
| :----------- | :------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getEidSightingChance(90, false)` ➔ `"High"`
- `getEidSightingChance(85, true)` ➔ `"Medium"`
- `getEidSightingChance(30, false)` ➔ `"Low"`

---

## 🧩 PROBLEM–04: 🎁 Sadaqah Distribution Logic

⚠️ **Function Name:** `distributeSadaqah()`

Calculate how much money goes to a specific category based on fixed percentage rules.

| Input      | `totalAmount` (number) and `priorityCategory` (string).  |
| :--------- | :------------------------------------------------------- |
| **Output** | Return the calculated amount for that category (number). |

**Rules:**

- **Distribution Rates:**
  - `"Poor"`: 50% of `totalAmount`.
  - `"Orphan"`: 30% of `totalAmount`.
  - `"Education"`: 20% of `totalAmount`.
- **Case Insensitivity:** The category name must be case-insensitive (e.g., `"poor"` should work).

| Challenge 📢 | If category doesn't match, return `"Invalid Category"`. `totalAmount` must be positive. |
| :----------- | :-------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `distributeSadaqah(1000, "Orphan")` ➔ `300`
- `distributeSadaqah(500, "poor")` ➔ `250`
- `distributeSadaqah(100, "Travel")` ➔ `"Invalid Category"`

---

## 🧩 PROBLEM–05: 📚 Hadith Book Search

⚠️ **Function Name:** `findBookByVolume()`

Search a digital library for a specific volume and return its availability status.

| Input      | `library` (array of objects) and `volNumber` (number). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return `"[BookName] is [status]"` (string).            |

**Rules:**

- **Structure:** `[{ title: "Bukhari", volume: 1, available: true }]`.
- **Logic:** Find the object where `volume === volNumber`.
  - If `available` is `true`: Return `"[Title] is Available"`.
  - If `available` is `false`: Return `"[Title] is Out of Stock"`.
- **Not Found:** If the volume doesn't exist, return `"Book Not Found"`.

| Challenge 📢 | `library` must be a valid non-empty array. `volNumber` must be a positive integer. |
| :----------- | :--------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `findBookByVolume([{title: "Muslim", volume: 2, available: false}], 2)` ➔ `"Muslim is Out of Stock"`
- `findBookByVolume([{title: "Bukhari", volume: 1, available: true}], 5)` ➔ `"Book Not Found"`
- `findBookByVolume([], 1)` ➔ `"Invalid Input"`

---
