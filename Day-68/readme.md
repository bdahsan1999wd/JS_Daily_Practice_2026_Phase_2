# 🌙 JS DAILY PRACTICE – DAY 68

📅 **Goal:** Eid Logistics & Financial Management
🎯 **Focus:** Array Aggregation • Time Logic • Object Destructuring • Percentage Math

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🕌 Eid Jama'at Capacity Alert

⚠️ **Function Name:** `checkJamaatStatus()`

A mosque has multiple Jama'ats (prayer sessions). Each has a maximum capacity. Determine if the last person can enter or if they must wait for the next session.

| Input      | `capacity` (num), `enrolled` (num), and `groupSize` (num).         |
| :--------- | :----------------------------------------------------------------- |
| **Output** | Return `"Entry Granted"`, `"Wait for Next"`, or `"Capacity Full"`. |

**Rules:**

- **Logic:** - If `enrolled + groupSize <= capacity` ➔ `"Entry Granted"`
  - If `enrolled < capacity` but the group can't fit ➔ `"Wait for Next"`
  - If `enrolled >= capacity` ➔ `"Capacity Full"`
- **Validation:** All inputs must be non-negative integers.

| Challenge 📢 | If `groupSize` is larger than the `capacity` itself, return `"Invalid Group Size"`. |
| :----------- | :---------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkJamaatStatus(500, 498, 5)` ➔ `"Wait for Next"`
- `checkJamaatStatus(500, 450, 10)` ➔ `"Entry Granted"`

---

## 🧩 PROBLEM–02: 💸 Salami Budget Balancer

⚠️ **Function Name:** `getSalamiReport()`

You have a fixed budget for Salami. After listing your relatives, check if your budget is enough.

| Input      | `budget` (number) and `salamiList` (array of numbers). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return string: `"Balance: [X]"` or `"Shortage: [Y]"`.  |

**Rules:**

- **Logic:** Sum up the `salamiList`. Subtract total from `budget`.
- **Validation:** `budget` must be positive, `salamiList` must be an array of numbers.

| Challenge 📢 | Use the `.reduce()` method. If the balance is exactly 0, return `"Budget Exhausted"`. |
| :----------- | :------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getSalamiReport(2000, [500, 500, 1000])` ➔ `"Budget Exhausted"`
- `getSalamiReport(1000, [200, 300])` ➔ `"Balance: 500"`

---

## 🧩 PROBLEM–03: 🍽️ Eid Guest "Special Diet" Filter

⚠️ **Function Name:** `getSpecialDietGuests()`

You are hosting a dawat. You need to identify which guests have specific food allergies or preferences (e.g., "diabetic", "vegetarian").

| Input      | `guestList` (array of objects: `[{name: "Abir", diet: "none"}]`). |
| :--------- | :---------------------------------------------------------------- |
| **Output** | Return an array of names (strings).                               |

**Rules:**

- **Logic:** Find guests where `diet` is NOT `"none"`.
- **Validation:** Input must be a non-empty array.

| Challenge 📢 | Use `.filter()` and `.map()` in a single chain to return only the names of guests with special diets. |
| :----------- | :---------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getSpecialDietGuests([{name: "A", diet: "none"}, {name: "B", diet: "diabetic"}])` ➔ `["B"]`

---

## 🧩 PROBLEM–04: 🎁 Eid Gift Discount Calculator

⚠️ **Function Name:** `applyEidDiscount()`

A shop offers discounts based on the total purchase amount for Eid gifts.

| Total Purchase      | Discount |
| :------------------ | :------- |
| **>= 5000 BDT**     | 15%      |
| **2000 - 4999 BDT** | 10%      |
| **< 2000 BDT**      | 5%       |

| Input      | `totalAmount` (number).                         |
| :--------- | :---------------------------------------------- |
| **Output** | Return the final price after discount (number). |

**Rules:**

- **Validation:** `totalAmount` must be a positive number.

| Challenge 📢 | Round the final amount to the nearest whole number using `Math.round()`. |
| :----------- | :----------------------------------------------------------------------- |

**Sample Input & Output:**

- `applyEidDiscount(5000)` ➔ `4250`
- `applyEidDiscount(1500)` ➔ `1425`

---

## 🧩 PROBLEM–05: ⏱️ Eid Prayer Countdown

⚠️ **Function Name:** `getTimeUntilPrayer()`

Calculate how many minutes are left until the Eid prayer starts.

| Input      | `currentTime` (string "HH:MM") and `prayerTime` (string "HH:MM"). |
| :--------- | :---------------------------------------------------------------- |
| **Output** | Return string: `"[X] minutes remaining"`.                         |

**Rules:**

- **Logic:** Convert both times to total minutes (Hours \* 60 + Minutes) and subtract.
- **Validation:** Both strings must be in "HH:MM" format. `prayerTime` must be after `currentTime`.

| Challenge 📢 | If the difference is less than 10 minutes, return `"Hurry! Only [X] minutes left"`. |
| :----------- | :---------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getTimeUntilPrayer("07:30", "08:00")` ➔ `"30 minutes remaining"`
- `getTimeUntilPrayer("07:55", "08:00")` ➔ `"Hurry! Only 5 minutes left"`

---
