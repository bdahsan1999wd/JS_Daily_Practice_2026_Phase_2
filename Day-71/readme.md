# 🌙 JS DAILY PRACTICE – DAY-71

📅 **Goal:** Post-Eid Party Planning & Gift Logistics
🎯 **Focus:** Array Filtering • Object Mapping • Logic Branching • Time Manipulation

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🎁 The "Eidi" Budget Balancer

⚠️ **Function Name:** `calculateGiftBudget()`

You have a total budget for buying gifts. You need to calculate how many cousins can receive a gift and the leftover amount.

| Input      | `totalBudget` (number) and `giftCost` (number).     |
| :--------- | :-------------------------------------------------- |
| **Output** | Return string: `"Can buy [X] gifts, [Y] BDT left"`. |

**Rules:**

- **Validation:** Both must be positive numbers. `giftCost` cannot be 0.

| Challenge 📢 | If you can buy more than 10 gifts, apply a 5% discount on the `giftCost` before calculating. |
| :----------- | :------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateGiftBudget(1000, 200)` ➔ `"Can buy 5 gifts, 0 BDT left"`
- `calculateGiftBudget(2000, 150)` ➔ `"Can buy 14 gifts, 5 BDT left"` (After 5% discount, cost is 142.5)

---

## 🧩 PROBLEM–02: 🍛 Guest List Invitation Filter

⚠️ **Function Name:** `filterGuestList()`

You are hosting a dinner. Only friends with "Coming" status should be invited to the final list.

| Input      | `guests` (Array of objects: `[{name: "Abir", status: "Coming"}]`). |
| :--------- | :----------------------------------------------------------------- |
| **Output** | Return array of strings: `["Name1", "Name2"]`.                     |

**Rules:**

- **Validation:** Input must be an array. If empty or no one is coming, return `[]`.

| Challenge 📢 | If the final guest list has more than 5 people, return only the first 5 names and add "Limited Capacity" as the last element. |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `filterGuestList([{name: "A", status: "Coming"}, {name: "B", status: "Busy"}])` ➔ `["A"]`

---

## 🧩 PROBLEM–03: 🍬 Sweet Box Distribution

⚠️ **Function Name:** `calculateSweetBoxes()`

Pack sweets into boxes. Large (12 sweets) and Small (4 sweets).

| Input      | `totalSweets` (number).                                          |
| :--------- | :--------------------------------------------------------------- |
| **Output** | Return object: `{ largeBoxes: X, smallBoxes: Y, remaining: Z }`. |

**Rules:**

- **Validation:** `totalSweets` must be a positive number.

| Challenge 📢 | If `remaining` sweets are 3, add 1 more to `remaining` and call it a "Small Box" instead. |
| :----------- | :---------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateSweetBoxes(27)` ➔ `{ largeBoxes: 2, smallBoxes: 0, remaining: 3 }` (Wait, per challenge: `{ largeBoxes: 2, smallBoxes: 1, remaining: 0 }`)

---

## 🧩 PROBLEM–04: ⏰ The "Eid Nap" Timer

⚠️ **Function Name:** `getWakeUpTime()`

Calculate wake-up time based on nap duration.

| Input      | `sleepTime` (string "HH:MM") and `durationMins` (number). |
| :--------- | :-------------------------------------------------------- |
| **Output** | Return string: `"Wake up at HH:MM"`.                      |

**Rules:**

- **Validation:** `sleepTime` must be "HH:MM". `durationMins` must be positive.

| Challenge 📢 | Ensure the output is always in 24-hour format (e.g., "00:05" instead of "0:5"). |
| :----------- | :------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `getWakeUpTime("23:45", 20)` ➔ `"Wake up at 00:05"`
- `getWakeUpTime("14:30", 30)` ➔ `"Wake up at 15:00"`

---

## 🧩 PROBLEM–05: 📸 Memory Storage Checker

⚠️ **Function Name:** `checkPhotoSpace()`

Check if your phone has enough space for 12MB 4K photos.

| Input      | `remainingGB` (number) and `photoCount` (number). |
| :--------- | :------------------------------------------------ |
| **Output** | Return `true` (boolean) or string error.          |

**Rules:**

- **Validation:** Both must be positive. (1 GB = 1024 MB).

| Challenge 📢 | If space is not enough, return: `"Need [X] MB more space"`. (X should be rounded to 2 decimal places). |
| :----------- | :----------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `checkPhotoSpace(0.1, 5)` ➔ `true` (0.1GB = 102.4MB, 5 photos = 60MB)
- `checkPhotoSpace(0.02, 10)` ➔ `"Need 99.52 MB more space"`

---
