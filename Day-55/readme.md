# 🌙 JS DAILY PRACTICE – DAY 55

📅 **Goal:** Advanced Ramadan Digital Assistant Logic
🎯 **Focus:** Objects • Array Filtering • String Formatting • Case Insensitivity

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🍲 Sehri Menu Planner

⚠️ **Function Name:** `getSehriRecommendation()`

Find the first food item from a list that fits within a specific calorie budget.

| Input      | `foodItems` (array of objects) and `maxCalories` (number). |
| :--------- | :--------------------------------------------------------- |
| **Output** | Return the food name (string).                             |

**Rules:**

- **Structure:** `foodItems` looks like
  `[{ name: "Oats", calories: 250 }, { name: "Date", calories: 50 }]`.
- **Logic:** Find the **first** object where `calories <= maxCalories`.
- **Not Found:** If no food fits, return `"No suitable food found"`.

| Challenge 📢 | `maxCalories` must be a positive number. `foodItems` must be a non-empty array of valid objects. |
| :----------- | :----------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getSehriRecommendation([{name: "Biryani", calories: 800}, {name: "Date", calories: 50}], 100)` ➔ `"Date"`
- `getSehriRecommendation([{name: "Juice", calories: 120}], 100)` ➔ `"No suitable food found"`
- `getSehriRecommendation([], 200)` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–02: 🕌 Mosque Distance Finder

⚠️ **Function Name:** `getNearestMosque()`

Identify the closest mosque based on distance.

| Input      | `mosques` (array of objects).            |
| :--------- | :--------------------------------------- |
| **Output** | Return the nearest mosque name (string). |

**Rules:**

- **Structure:**
  `[{ name: "Grand Mosque", distance: 1.2 }, { name: "Al-Noor", distance: 0.5 }]`
- **Logic:** Find the object with the **smallest distance** value.
- **Tie-breaker:** If distances are equal, return the **first one found** in the array.

| Challenge 📢 | Return `"Invalid Input"` if the array is empty, not an array, or contains invalid distance values. |
| :----------- | :------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getNearestMosque([{name: "A", distance: 10}, {name: "B", distance: 2}])` ➔ `"B"`
- `getNearestMosque([{name: "X", distance: 5}, {name: "Y", distance: 5}])` ➔ `"X"`
- `getNearestMosque([])` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–03: 💰 Zakat Status Formatter

⚠️ **Function Name:** `formatZakatReport()`

Generate a professional report string for a user's Zakat status.

| Input      | `name` (string) and `wealth` (number). |
| :--------- | :------------------------------------- |
| **Output** | Return a formatted report string.      |

**Rules:**

- **Nisab Threshold:** `$600`
- **Logic:**
  - If `wealth >= 600`:
    `"User [name], your Zakat is $[amount]."`
    (where amount = 2.5% of wealth)
  - If `wealth < 600`:
    `"User [name], you are not eligible for Zakat."`

| Challenge 📢 | `wealth` must be a number ≥ 0. `name` must be a non-empty string. |
| :----------- | :---------------------------------------------------------------- |

**Sample Input & Output:**

- `formatZakatReport("Ali", 1000)` ➔ `"User Ali, your Zakat is $25."`
- `formatZakatReport("Omar", 400)` ➔ `"User Omar, you are not eligible for Zakat."`
- `formatZakatReport("", 800)` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–04: 📅 Ramadan Phase Detector

⚠️ **Function Name:** `getRamadanPhase()`

Determine which "Ashra" (10-day phase) a specific Ramadan day belongs to.

| Input      | `day` (number).                 |
| :--------- | :------------------------------ |
| **Output** | Return the phase name (string). |

**Rules:**

- **Days 1–10:** `"Mercy (Rahmah)"`
- **Days 11–20:** `"Forgiveness (Maghfirah)"`
- **Days 21–30:** `"Salvation (Najah)"`

| Challenge 📢 | `day` must be an integer between 1 and 30. |
| :----------- | :----------------------------------------- |

**Sample Input & Output:**

- `getRamadanPhase(5)` ➔ `"Mercy (Rahmah)"`
- `getRamadanPhase(15)` ➔ `"Forgiveness (Maghfirah)"`
- `getRamadanPhase(25)` ➔ `"Salvation (Najah)"`
- `getRamadanPhase(35)` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–05: 🚿 Sunnah Habit Tracker

⚠️ **Function Name:** `checkHabitCompletion()`

Check if a specific Sunnah habit exists in a user's completed list, regardless of text casing.

| Input      | `completedHabits` (array) and `requiredHabit` (string). |
| :--------- | :------------------------------------------------------ |
| **Output** | Return `true` or `false` (boolean).                     |

**Rules:**

- **Case Insensitivity:** `"Miswak"` should match `"miswak"`, `"MISWAK"`, or `"MiSwAk"`.
- **Validation:**
  - `completedHabits` must be an array of strings.
  - `requiredHabit` must be a non-empty string.
- **Logic:**
  - Return `true` if the habit is found (ignoring case).
  - Otherwise, return `false`.

| Challenge 📢 | Must use case-insensitive comparison (e.g., `toLowerCase()`). |
| :----------- | :------------------------------------------------------------ |

**Sample Input & Output:**

- `checkHabitCompletion(["Charity", "Miswak", "Dua"], "miswak")` ➔ `true`
- `checkHabitCompletion(["Recitation"], "Itekaf")` ➔ `false`
- `checkHabitCompletion([], "Dua")` ➔ `"Invalid Input"`

---
