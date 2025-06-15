# TypeScript Naming Conventions Guide

This guide provides recommended naming conventions for variables, functions, classes, files, and folders in TypeScript projects.

---

## Variables

- Use **camelCase** for variable names.
- Names should be descriptive and concise.
- Avoid single-letter names except for loop counters.

**Example:**

```ts
let userAge: number = 30;
let isActive: boolean = true;
```

---

## Functions

- Use **camelCase** for function names.
- Function names should be verbs or verb phrases.
- Be descriptive about the function's purpose.

**Example:**

```ts
function fetchUserProfile(id: string): UserProfile { ... }
function calculateTotal(price: number, tax: number): number { ... }
```

---

## Classes, Interfaces, Types, and Enums

- Use **PascalCase** (capitalize each word, no underscores).
- Class, interface, type, and enum names should be nouns or noun phrases.

**Example:**

```ts
class UserProfile { ... }

interface UserSettings { ... }

type UserID = string;

enum UserRole {
  Admin,
  User,
  Guest
}
```

---

## Constants

- Use **UPPER_CASE_SNAKE_CASE** for constants.
- Only use for values that never change.

**Example:**

```ts
const MAX_USERS = 100;
const DEFAULT_TIMEOUT_MS = 5000;
```

---

## Files

- Use **kebab-case** for file names.
- File names should reflect their contents or purpose.
- Use `.ts` or `.tsx` extensions as appropriate.

**Example:**

```
user-profile.ts
user-settings.ts
calculate-total.ts
```

---

## Folders

- Use **kebab-case** for folder names.
- Keep folder names short and descriptive.

**Example:**

```
/components
/user-services
/utils
```

---

## General Tips

- Be descriptive and consistent.
- Avoid using reserved words.
- Use meaningful names that convey intent.
- Prefer singular names for files and folders unless they contain multiple items (e.g., `utils`).

---

**Following these conventions helps improve code readability and maintainability across your TypeScript projects.**
