# 🌙 JS DAILY PRACTICE – DAY-74

📅 **Goal:** Frontend Optimization & Deployment Logic
🎯 **Focus:** String Manipulation • Performance Logic • Array Sorting • Asset Management

---

## ⚠️ General Rules

- Solve every problem using a **function**.
- **Return** the result (❌ do not use `console.log` inside the function).
- Proper **input validation** is mandatory (type and range checks).
- If input is invalid → return `"Invalid Input"`.

---

## 🧩 PROBLEM–01: 📄 Ticket ID Generator

⚠️ **Function Name:** `generateTicketId()`

For your "Smart Ticketing" project, you need a function that generates a unique ID based on the route and a serial number.

| Input      | `routeName` (string) and `serial` (number). |
| :--------- | :------------------------------------------ |
| **Output** | Return string: `"[ROUTE]-ID-[SERIAL]"`.     |

**Rules:**

- **Validation:** `routeName` must be a non-empty string. `serial` must be a positive integer.
- **Logic:** The `routeName` should be converted to uppercase.

| Challenge 📢 | If the serial number is less than 100, pad it with leading zeros so it is always 3 digits (e.g., 5 ➔ 005). |
| :----------- | :--------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `generateTicketId("Dhaka", 45)` ➔ `"DHAKA-ID-045"`
- `generateTicketId("Sylhet", 120)` ➔ `"SYLHET-ID-120"`

---

## 🧩 PROBLEM–02: 📉 CSS File Minifier (Mock-up)

⚠️ **Function Name:** `minifyCss()`

To optimize your Tailwind builds, you want to remove unnecessary whitespace from a string of CSS.

| Input      | `cssCode` (string).           |
| :--------- | :---------------------------- |
| **Output** | Return string (Minified CSS). |

**Rules:**

- **Validation:** Input must be a string.
- **Logic:** Remove all spaces and line breaks from the string.

| Challenge 📢 | If the input string is empty after trimming, return `"Empty Stylesheet"`. |
| :----------- | :------------------------------------------------------------------------ |

**Sample Input & Output:**

- `minifyCss(" .btn { color: red; } ")` ➔ `".btn{color:red;}"`

---

## 🧩 PROBLEM–03: 🖼️ Image Aspect Ratio Checker

⚠️ **Function Name:** `getAspectRatioType()`

When building UI components with DaisyUI, you need to know if an image is Portrait, Landscape, or Square to apply the correct CSS class.

| Input      | `width` (number) and `height` (number).                    |
| :--------- | :--------------------------------------------------------- |
| **Output** | Return string: `"Landscape"`, `"Portrait"`, or `"Square"`. |

**Rules:**

- **Validation:** Both inputs must be positive numbers.

| Challenge 📢 | If the width is more than double the height, return `"Ultra-Wide"`. |
| :----------- | :------------------------------------------------------------------ |

**Sample Input & Output:**

- `getAspectRatioType(1920, 1080)` ➔ `"Landscape"`
- `getAspectRatioType(2500, 1000)` ➔ `"Ultra-Wide"`

---

## 🧩 PROBLEM–04: ⚡ Deployment Success Rate

⚠️ **Function Name:** `calculateDeploymentHealth()`

You are tracking your automated Git deployments. You want to know the success percentage.

| Input      | `successful` (number) and `failed` (number). |
| :--------- | :------------------------------------------- |
| **Output** | Return number (Percentage of success).       |

**Rules:**

- **Validation:** Both must be non-negative integers. Total deployments (`successful + failed`) cannot be 0.
- **Logic:** Calculate `(successful / total) * 100`.

| Challenge 📢 | If the success rate is below 80%, return a string: `"Action Required: [Rate]%"`. Otherwise, return the percentage rounded to 1 decimal place. |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `calculateDeploymentHealth(9, 1)` ➔ `90`
- `calculateDeploymentHealth(7, 3)` ➔ `"Action Required: 70%"`

---

## 🧩 PROBLEM–05: 🏷️ Feature Flag Toggle

⚠️ **Function Name:** `isFeatureEnabled()`

In your local environment (Node v22.14.0), you use feature flags to enable/disable specific modules.

| Input      | `flags` (Array of strings) and `targetFeature` (string). |
| :--------- | :------------------------------------------------------- |
| **Output** | Return boolean.                                          |

**Rules:**

- **Validation:** `flags` must be an array, `targetFeature` must be a string.
- **Logic:** Return `true` if the feature is in the list.

| Challenge 📢 | If the feature name starts with "BETA\_", return `true` only if there are at least 3 other flags already enabled in the array. |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------- |

**Sample Input & Output:**

- `isFeatureEnabled(["Dark_Mode", "Sidebar"], "Dark_Mode")` ➔ `true`
- `isFeatureEnabled(["Auth", "Logs"], "BETA_Ticketing")` ➔ `false` (Needs 3+ existing flags)

---
