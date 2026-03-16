# 🌙 JS DAILY PRACTICE – DAY-75

📅 **Goal:** Advanced Logic & Data Security
🎯 **Focus:** Object Transformation • Regex Basics • Cryptic Logic • Sorting

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 🔐 Sensitive Data Masker

⚠️ **Function Name:** `maskEmail()`

For user privacy in your "Smart Ticketing" app, you need to hide part of the user's email address.

| Input      | `email` (string).             |
| :--------- | :---------------------------- |
| **Output** | Return string (Masked email). |

**Rules:**

- **Validation:** Input must be a valid string containing an `@` symbol.
- **Logic:** Keep the first 2 characters and the part after `@`. Replace everything else in between with `***`.

| Challenge 📢 | If the part before the `@` is only 2 characters or less, do not mask the name part; just return the original email. |
| :----------- | :------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `maskEmail("ahsan@webdev.com")` ➔ `"ah***@webdev.com"`
- `maskEmail("js@example.com")` ➔ `"js@example.com"`

---

## 🧩 PROBLEM–02: 🏷️ Product Discount Categorizer

⚠️ **Function Name:** `getDiscountCategory()`

You are managing a list of items for a dev-store. Categorize the discount based on the percentage.

| Input      | `originalPrice` (number) and `discountPrice` (number). |
| :--------- | :----------------------------------------------------- |
| **Output** | Return string category.                                |

**Rules:**

- **Logic:** Calculate discount %: `((Original - Discount) / Original) * 100`.
  - `> 50%` ➔ `"Flash Sale"`
  - `20% - 50%` ➔ `"Great Deal"`
  - `< 20%` ➔ `"Standard"`
- **Validation:** Prices must be positive. `discountPrice` cannot be greater than `originalPrice`.

| Challenge 📢 | If the discount is exactly 0%, return `"Full Price"`. |
| :----------- | :---------------------------------------------------- |

**Sample Input & Output:**

- `getDiscountCategory(1000, 400)` ➔ `"Flash Sale"` (60% off)
- `getDiscountCategory(1000, 1000)` ➔ `"Full Price"`

---

## 🧩 PROBLEM–03: 🔍 Duplicate Dependency Checker

⚠️ **Function Name:** `findDuplicatePlugins()`

When configuring Node.js projects, sometimes you accidentally add the same plugin twice. Find the duplicates.

| Input      | `pluginList` (Array of strings).   |
| :--------- | :--------------------------------- |
| **Output** | Return array of duplicate strings. |

**Rules:**

- **Validation:** Input must be an array.
- **Logic:** Return an array containing only the items that appear more than once.

| Challenge 📢 | The result array should only contain unique values (no duplicates of the duplicates). |
| :----------- | :------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `findDuplicatePlugins(["Tailwind", "DaisyUI", "Tailwind", "Git"])` ➔ `["Tailwind"]`

---

## 🧩 PROBLEM–04: 📊 UI Performance Score

⚠️ **Function Name:** `getPerformanceRating()`

Calculate a performance score based on "First Contentful Paint" (FCP) and "Time to Interactive" (TTI).

| Input      | `fcp` (number in ms) and `tti` (number in ms).          |
| :--------- | :------------------------------------------------------ |
| **Output** | Return string: `"Excellent"`, `"Average"`, or `"Poor"`. |

**Rules:**

- **Validation:** Both must be positive numbers.
- **Logic:** - If `fcp < 1000` AND `tti < 3000` ➔ `"Excellent"`
  - If `fcp < 2500` AND `tti < 5000` ➔ `"Average"`
  - Else ➔ `"Poor"`

| Challenge 📢 | If `tti` is more than 3x the `fcp`, downgrade the rating by one level (e.g., Excellent becomes Average). |
| :----------- | :------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `getPerformanceRating(800, 2000)` ➔ `"Excellent"`
- `getPerformanceRating(800, 3000)` ➔ `"Average"` (TTI is > 3x FCP)

---

## 🧩 PROBLEM–05: 🔡 Password Strength Validator

⚠️ **Function Name:** `isPasswordSecure()`

Check if a password for your admin panel meets security standards.

| Input      | `password` (string). |
| :--------- | :------------------- |
| **Output** | Return boolean.      |

**Rules:**

- **Validation:** Must be a string.
- **Logic:** Return `true` if:
  1. Length is at least 8 characters.
  2. Contains at least one number.
  3. Contains at least one uppercase letter.

| Challenge 📢 | If the password contains the word "password" or "123" (case-insensitive), return `false` regardless of other rules. |
| :----------- | :------------------------------------------------------------------------------------------------------------------ |

**Sample Input & Output:**

- `isPasswordSecure("AhsanCode7")` ➔ `true`
- `isPasswordSecure("MyPassword123")` ➔ `false`

---
