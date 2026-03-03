# 🌙 JS DAILY PRACTICE – DAY 62

📅 **Goal:** Community & Mosque Management Systems
🎯 **Focus:** String Manipulation • Logical Comparisons • Object Mapping • Conditionals

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕌 Prayer Row Organizer

⚠️ **Function Name:** `organizeMusalliRows()`

In a mosque, a maximum of 10 people can stand in a single row (katar). Calculate how many full rows are formed and how many people remain for the last incomplete row based on the total number of attendees.

| Input      | `totalMusallis` (number).                                           |
| :--------- | :------------------------------------------------------------------ |
| **Output** | Return an object `{ fullRows: number, remainingMusallis: number }`. |

**Rules:**

- **Logic:** `fullRows` is the count of rows with exactly 10 people. `remainingMusallis` is the remainder.

| Challenge 📢 | `totalMusallis` must be a non-negative integer. |
| :----------- | :---------------------------------------------- |

**Sample Input & Output:**

- `organizeMusalliRows(37)` ➔ `{ fullRows: 3, remainingMusallis: 7 }`

---

## 🧩 PROBLEM–02: 🌙 Ramadan Iftar Timer

⚠️ **Function Name:** `isIftarTime()`

Check if it is time for Iftar (breaking the fast) using 24-hour format time strings.

| Input      | `currentTime` (string "HH:MM") and `iftarTime` (string "HH:MM").             |
| :--------- | :--------------------------------------------------------------------------- |
| **Output** | Return `true` if current time is equal to or after iftar time, else `false`. |

**Rules:**

- **Logic:** Compare the times logically. String parsing (like `.split(':')`) is recommended.

| Challenge 📢 | Input strings must be valid "HH:MM" formats (exactly 5 characters). |
| :----------- | :------------------------------------------------------------------ |

**Sample Input & Output:**

- `isIftarTime("18:15", "18:10")` ➔ `true`
- `isIftarTime("17:50", "18:10")` ➔ `false`

---

## 🧩 PROBLEM–03: 📦 Relief Eligibility Filter

⚠️ **Function Name:** `filterEligibleFamilies()`

Identify families eligible for relief distribution whose monthly income is less than 5000 BDT.

| Input      | `families` (array of objects, e.g., `[{name: "Rahim", income: 4500}]`). |
| :--------- | :---------------------------------------------------------------------- |
| **Output** | Return an array of names (strings) of the eligible families.            |

**Rules:**

- **Logic:** Use `.filter()` to check the income and `.map()` to return only the names.

| Challenge 📢 | If `families` is not an array or income is not a number, return "Invalid Input". |
| :----------- | :------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `filterEligibleFamilies([{name: "A", income: 4000}, {name: "B", income: 6000}])` ➔ `["A"]`

---

## 🧩 PROBLEM–04: 📚 Maktab Attendance Calculator

⚠️ **Function Name:** `getAttendanceRate()`

Calculate the attendance percentage for the morning Maktab based on total students and present students.

| Input      | `totalStudents` (number) and `presentStudents` (number). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return a formatted string `"Attendance: [X]%"`.          |

**Rules:**

- **Logic:** Use formula: $$(presentStudents / totalStudents) \times 100$$.
- **Formatting:** Use `Math.round()` to return the nearest integer.

| Challenge 📢 | `presentStudents` cannot exceed `totalStudents`, and `totalStudents` must be > 0. |
| :----------- | :-------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getAttendanceRate(50, 40)` ➔ `"Attendance: 80%"`

---

## 🧩 PROBLEM–05: 🔊 Azan Time Adjuster

⚠️ **Function Name:** `adjustAzanTime()`

Due to seasonal changes, adjust the Azan time by delaying it by exactly 5 minutes.

| Input      | `originalTime` (string "HH:MM").     |
| :--------- | :----------------------------------- |
| **Output** | Return adjusted time string "HH:MM". |

**Rules:**

- **Logic:** Add 5 minutes. Handle rollover for minutes (60) and hours (24).
- **Format:** Ensure the output uses `padStart(2, '0')` to keep the "HH:MM" format.

| Challenge 📢 | Output must always be 5 characters (e.g., "00:03" instead of "0:3"). |
| :----------- | :------------------------------------------------------------------- |

**Sample Input & Output:**

- `adjustAzanTime("18:57")` ➔ `"19:02"`
- `adjustAzanTime("23:58")` ➔ `"00:03"`

---
