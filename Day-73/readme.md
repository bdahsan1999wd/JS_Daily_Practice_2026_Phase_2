# 🌙 JS DAILY PRACTICE – DAY-73

📅 **Goal:** Post-Eid Career Growth & Workspace Optimization
🎯 **Focus:** String Parsing • Objects & Arrays • Percentage Logic • State Management

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 💻 Coding Streak Milestone

⚠️ **Function Name:** `checkStreakMilestone()`

Your target is to solve 5 problems daily. You need to verify your streak and calculate your performance consistency.

| Input      | `daysSolved` (number) and `totalProblems` (number).         |
| :--------- | :---------------------------------------------------------- |
| **Output** | Return string: `"Streak: [X] days, Avg: [Y] problems/day"`. |

**Rules:**

- **Validation:** Both must be non-negative numbers. `daysSolved` cannot be 0.
- **Logic:** Calculate the average number of problems solved per day.

| Challenge 📢 | If the average is exactly 5 or more, append "🔥 Super Consistent" to the end of the string. |
| :----------- | :------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `checkStreakMilestone(10, 50)` ➔ `"Streak: 10 days, Avg: 5 problems/day 🔥 Super Consistent"`
- `checkStreakMilestone(5, 12)` ➔ `"Streak: 5 days, Avg: 2.4 problems/day"`

---

## 🧩 PROBLEM–02: 📦 GitHub Repository Organizer

⚠️ **Function Name:** `getRepoPhase()`

You create a new GitHub repository every 50 days (Phase 1, Phase 2, etc.) to keep your practice organized. Given a day count, determine which Phase it belongs to.

| Input      | `currentDay` (number).        |
| :--------- | :---------------------------- |
| **Output** | Return string: `"Phase [X]"`. |

**Rules:**

- **Validation:** `currentDay` must be a positive integer between 1 and 365.
- **Logic:** Days 1-50 = Phase 1, Days 51-100 = Phase 2, and so on.

| Challenge 📢 | If it is within the last 5 days of any Phase (e.g., Days 46-50, 96-100), return: `"Phase [X] - Time to create new Repo!"`. |
| :----------- | :------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getRepoPhase(70)` ➔ `"Phase 2"`
- `getRepoPhase(100)` ➔ `"Phase 2 - Time to create new Repo!"`

---

## 🧩 PROBLEM–03: 🛠️ Tech Stack Validator

⚠️ **Function Name:** `isProjectReady()`

Before starting a new web project, check if your required Tech Stack (Tailwind, Node, and Git) is present in your configuration array.

| Input      | `currentStack` (Array of strings). |
| :--------- | :--------------------------------- |
| **Output** | Return boolean: `true` or `false`. |

**Rules:**

- **Validation:** Input must be an array.
- **Logic:** Return `true` only if "Tailwind", "Node", and "Git" are all present in the array.

| Challenge 📢 | The check must be **case-insensitive** (e.g., "tailwind", "NODE", or "gIt" should all be recognized). |
| :----------- | :---------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isProjectReady(["Git", "Node", "React", "Tailwind"])` ➔ `true`
- `isProjectReady(["node", "git"])` ➔ `false`

---

## 🧩 PROBLEM–04: ⚡ PC Power Usage Tracker

⚠️ **Function Name:** `calculateElectricityBill()`

As a developer, your workstation runs for long hours. Calculate the electricity cost for your PC for a 30-day month.

| Input      | `wattage` (number), `hoursPerDay` (number), and `unitPrice` (number). |
| :--------- | :-------------------------------------------------------------------- |
| **Output** | Return number (Total bill for 30 days).                               |

**Rules:**

- **Formula:** $\text{Units (kWh)} = \frac{\text{Wattage} \times \text{Hours}}{1000}$.
- **Validation:** All inputs must be positive numbers.

| Challenge 📢 | If total monthly units exceed 100 kWh, apply a 15% "High Usage Tax" to the final bill amount. |
| :----------- | :-------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateElectricityBill(200, 10, 10)` ➔ `600` (2 units/day _ 30 days _ 10 BDT)
- `calculateElectricityBill(500, 12, 10)` ➔ `2070` (180 units total + 15% tax)

---

## 🧩 PROBLEM–05: 🕒 Coding Task Deadline

⚠️ **Function Name:** `getDeadlineStatus()`

You need a system to track how urgent a coding task is based on the remaining hours.

| Input      | `remainingHours` (number). |
| :--------- | :------------------------- |
| **Output** | Return string status.      |

**Rules:**

- **Logic:** - `> 48 hours` ➔ `"Relax"`
  - `24 - 48 hours` ➔ `"Keep Working"`
  - `< 24 hours` ➔ `"Urgent"`
- **Validation:** `remainingHours` must be a non-negative number.

| Challenge 📢 | If the remaining hours are exactly 0, return `"Deadline Over! Deploy Now!"`. |
| :----------- | :--------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getDeadlineStatus(30)` ➔ `"Keep Working"`
- `getDeadlineStatus(0)` ➔ `"Deadline Over! Deploy Now!"`

---
