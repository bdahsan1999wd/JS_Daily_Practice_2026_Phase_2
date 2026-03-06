# 🌙 JS DAILY PRACTICE – DAY 65

📅 **Goal:** The Last 10 Days & Eid Logistics
🎯 **Focus:** Logic Gates • Array Mapping • Object State • Complex Math

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 👕 The "Perfect Fit" Finder

⚠️ **Function Name:** `getGarmentStatus()`

Your body chest size is **46**. The standard rule is that a Panjabi should be exactly **2 inches looser** than the body size for a perfect fit.

| Input      | `bodySize` (number) and `garmentSize` (number).      |
| :--------- | :--------------------------------------------------- |
| **Output** | Return `"Perfect"`, `"Too Tight"`, or `"Too Loose"`. |

**Rules:**

- **Logic:** `bodySize + 2` is the ideal size. Compare `garmentSize` to this.
- **Validation:** Both inputs must be positive numbers.

| Challenge 📢 | If the garment is exactly the body size (0" loose), return `"Skin Tight: Danger"`. |
| :----------- | :--------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getGarmentStatus(46, 48)` ➔ `"Perfect"`
- `getGarmentStatus(46, 46)` ➔ `"Skin Tight: Danger"`
- `getGarmentStatus(46, 47)` ➔ `"Too Tight"`

---

## 🧩 PROBLEM–02: 👟 Shoe Size Stock Checker

⚠️ **Function Name:** `isShoeAvailable()`

Check if your size **11US** is available and identify its section.

| Input      | `stockList` (array of numbers) and `mySize` (number). |
| :--------- | :---------------------------------------------------- |
| **Output** | Return a string message.                              |

**Rules:**

- **Logic:** Check if `mySize` exists in `stockList`. If `mySize >= 11`, it is "Big & Tall".
- **Validation:** `stockList` must be an array, and `mySize` must be positive.

| Challenge 📢 | Use the `.includes()` method and a **Ternary Operator** to return the result in one line of logic. |
| :----------- | :------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isShoeAvailable([9, 10, 11, 12], 11)` ➔ `"Available in Big & Tall Section"`
- `isShoeAvailable([8, 9, 10], 9)` ➔ `"Available in Regular Section"`
- `isShoeAvailable([8, 9, 10], 11)` ➔ `"Out of Stock"`

---

## 🧩 PROBLEM–03: 🕯️ Laylatul Qadr Effort Tracker

⚠️ **Function Name:** `getIbadahEfficiency()`

Track productivity during the last 10 days based on worship vs. rest.

| Input      | `ibadahHours` (number) and `sleepHours` (number).                 |
| :--------- | :---------------------------------------------------------------- |
| **Output** | Return `"Super Productive"`, `"Balanced"`, or `"Need More Rest"`. |

**Rules:**

- **Logic:** Prioritize `sleepHours < 4`. Otherwise, check if `ibadahHours > 10`.
- **Validation:** Total hours (`ibadah + sleep`) cannot exceed 24.

| Challenge 📢 | If `ibadahHours` is more than double the `sleepHours`, append `" | Warning: High Burnout"` to the string. |
| :----------- | :--------------------------------------------------------------- | -------------------------------------- |

**Sample Input & Output:**

- `getIbadahEfficiency(12, 5)` ➔ `"Super Productive | Warning: High Burnout"`
- `getIbadahEfficiency(14, 2)` ➔ `"Need More Rest"`
- `getIbadahEfficiency(6, 7)` ➔ `"Balanced"`

---

## 🧩 PROBLEM–04: 💰 Fitra (Zakat-ul-Fitr) Aggregator

⚠️ **Function Name:** `calculateFitraTotal()`

Calculate total family Fitra with an extra 10% for children under 12.

| Input      | `memberAges` (array of numbers) and `baseRate` (number). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return the total amount (number).                        |

**Rules:**

- **Logic:** Loop through ages. If `age < 12`, add `baseRate * 1.1`. Else, add `baseRate`.
- **Validation:** `baseRate` must be positive. `memberAges` must be a non-empty array.

| Challenge 📢 | Use the `.reduce()` method to calculate the total sum in a single functional block. |
| :----------- | :---------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateFitraTotal([30, 25, 8], 115)` ➔ `356.5`
- `calculateFitraTotal([10, 5], 100)` ➔ `220`

---

## 🧩 PROBLEM–05: 🌙 Eid Moon Sighting Probability

⚠️ **Function Name:** `predictEidDay()`

Predict Eid based on visibility and weather.

| Input      | `visibilityPercent` (0-100) and `weatherCondition` (string).  |
| :--------- | :------------------------------------------------------------ |
| **Output** | Return `"Eid Tomorrow"`, `"One More Roja"`, or `"Uncertain"`. |

**Rules:**

- **Logic:** Clear weather + >80% visibility = Eid. Rainy/Cloudy = Uncertain.
- **Validation:** `visibilityPercent` between 0-100.

| Challenge 📢 | Make the `weatherCondition` check **Case-Insensitive** (e.g., "CLEAR", "clear", and "ClEaR" should all work). |
| :----------- | :------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `predictEidDay(85, "CLEAR")` ➔ `"Eid Tomorrow"`
- `predictEidDay(90, "Cloudy")` ➔ `"Uncertain"`
- `predictEidDay(30, "clear")` ➔ `"One More Roja"`

---
