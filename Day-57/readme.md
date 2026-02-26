# 🌙 JS DAILY PRACTICE – DAY 57

📅 **Goal:** Community & Health Management Systems
🎯 **Focus:** Object Filtering • Conditional Logic • Math Operations • Input Sanitization

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🏥 Fasting Health Screener

⚠️ **Function Name:** `checkFastingSafety()`

A health app evaluates if a person should consult a doctor before fasting based on their blood sugar level.

| Input      | `sugarLevel` (number) and `hasHistory` (boolean).      |
| :--------- | :----------------------------------------------------- |
| **Output** | Return `"Safe"`, `"Consult Doctor"`, or `"High Risk"`. |

**Rules:**

- **High Risk:** `sugarLevel > 200` OR (`sugarLevel > 150` AND `hasHistory` is `true`).
- **Consult Doctor:** `sugarLevel` is between `120` and `200` (inclusive) AND `hasHistory` is `false`.
- **Safe:** `sugarLevel < 120`.

| Challenge 📢 | `sugarLevel` must be a positive number. `hasHistory` must be a boolean. |
| :----------- | :---------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkFastingSafety(160, true)` ➔ `"High Risk"`
- `checkFastingSafety(130, false)` ➔ `"Consult Doctor"`
- `checkFastingSafety(90, false)` ➔ `"Safe"`

---

## 🧩 PROBLEM–02: 🌙 Moon Sighting Committee Vote

⚠️ **Function Name:** `getCommitteeVerdict()`

A committee decides if Eid is tomorrow based on member reports.

| Input      | `reports` (array of booleans).                |
| :--------- | :-------------------------------------------- |
| **Output** | Return `"Eid Tomorrow"` or `"Fast Tomorrow"`. |

**Rules:**

- **Logic:** If **more than 50%** of the members in the `reports` array return `true`, then it is `"Eid Tomorrow"`.
- **Otherwise:** Return `"Fast Tomorrow"`.

| Challenge 📢 | `reports` must be a non-empty array containing only booleans. |
| :----------- | :------------------------------------------------------------ |

**Sample Input & Output:**

- `getCommitteeVerdict([true, false, true])` ➔ `"Eid Tomorrow"`
- `getCommitteeVerdict([false, false, true])` ➔ `"Fast Tomorrow"`
- `getCommitteeVerdict([])` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–03: 💧 Hydration Tracker

⚠️ **Function Name:** `getHydrationGoal()`

Calculate the remaining water a person needs to drink between Iftar and Suhoor.

| Input      | `totalGoal` (number) and `drankAmount` (number). |
| :--------- | :----------------------------------------------- |
| **Output** | Return the remaining amount (number).            |

**Rules:**

- **Logic:** `totalGoal - drankAmount`.
- **Goal Reached:** If `drankAmount` is greater than or equal to `totalGoal`, return `0`.

| Challenge 📢 | Both inputs must be positive numbers. |
| :----------- | :------------------------------------ |

**Sample Input & Output:**

- `getHydrationGoal(3000, 1500)` ➔ `1500`
- `getHydrationGoal(2000, 2500)` ➔ `0`
- `getHydrationGoal(-500, 1000)` ➔ `"Invalid Input"`

---

## 🧩 PROBLEM–04: 🕌 Prayer Hall Tier Allocator

⚠️ **Function Name:** `allocatePrayerHall()`

Allocate a prayer hall based on the number of attendees for Taraweeh.

| Input      | `attendees` (number).          |
| :--------- | :----------------------------- |
| **Output** | Return the Hall Name (string). |

**Rules:**

- **Main Hall:** Up to 500 people.
- **Basement:** 501 to 800 people.
- **Outdoor Courtyard:** More than 800 people.

| Challenge 📢 | `attendees` must be a non-negative integer. |
| :----------- | :------------------------------------------ |

**Sample Input & Output:**

- `allocatePrayerHall(450)` ➔ `"Main Hall"`
- `allocatePrayerHall(600)` ➔ `"Basement"`
- `allocatePrayerHall(1200)` ➔ `"Outdoor Courtyard"`

---

## 🧩 PROBLEM–05: 🥘 Iftar Pack Calculator

⚠️ **Function Name:** `calculateIftarPacks()`

Calculate how many full packs can be made from available items. Each pack requires 2 Dates, 1 Juice, and 1 Samosa.

| Input      | `items` (object).                         |
| :--------- | :---------------------------------------- |
| **Output** | Return the number of full packs (number). |

**Rules:**

- **Structure:** `items` looks like `{ dates: 10, juice: 5, samosas: 8 }`.
- **Logic:** Find the maximum number of **complete** packs possible.
- **Formula Hint:** `Math.min(dates/2, juice/1, samosas/1)`.

| Challenge 📢 | The object must contain all three keys with non-negative numbers. |
| :----------- | :---------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateIftarPacks({dates: 10, juice: 5, samosas: 8})` ➔ `5`
- `calculateIftarPacks({dates: 20, juice: 2, samosas: 10})` ➔ `2`
- `calculateIftarPacks({dates: 5})` ➔ `"Invalid Input"`

---
