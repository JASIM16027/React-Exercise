# React-Exercise

# 1.3 Writing Markup with JSx



---

## 🧩 1. Why React Mixes Markup with Rendering Logic

### 🧠 Traditional Web Development (Before React)

In a typical setup before React, you would write:

* **HTML** for structure (what the user sees)
* **CSS** for styling (how it looks)
* **JavaScript** for behavior (how it works)

Example:

```html
<!-- HTML -->
<div id="user"></div>

<!-- JS -->
<script>
  const user = { name: "Jasim" };
  document.getElementById("user").textContent = "Hello, " + user.name;
</script>
```

Here, your **HTML and JS live separately**, but both describe the same thing: *what to show on the page.*

---

### ⚙️ React’s Philosophy: UI = Function of State

React sees the UI as a **function of data (state)**.

```jsx
UI = f(state)
```

This means:

* Your user interface **should update automatically** when your data changes.
* To make this efficient, React uses **components** — small, reusable pieces of UI that describe how things look **and behave** together.

---

### 🎯 Why Combine Logic + Markup?

React **doesn’t really “mix” logic and markup** — it **combines them** inside a single *component* because they are **part of the same concern**.

For example, a “user card” needs:

* The layout (`<div>`, `<h2>`, etc.)
* The data (name, age, etc.)
* Some logic (maybe hide if user is inactive)

Keeping them in separate files makes it harder to maintain.

So React says:

> “Let’s put markup and logic together, **because they belong together**.”

Example:

```jsx
function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      {user.isOnline ? <p>🟢 Online</p> : <p>🔴 Offline</p>}
    </div>
  );
}
```

Here:

* **Markup**: `<div>`, `<h2>`, `<p>`
* **Logic**: `{user.isOnline ? ... : ...}`
* **Data**: `user.name`

All in one place — **clean, logical, and reusable**.

---

## 🧮 2. How JSX Is Different from HTML

JSX stands for **JavaScript XML** — it *looks like* HTML, but it’s actually **JavaScript syntax sugar**.

React uses JSX to let you **write what the UI should look like**, and then **turns it into JavaScript code** that builds the actual UI.

---

### ⚙️ How It Works Under the Hood

If you write:

```jsx
const element = <h1>Hello, world!</h1>;
```

Babel (a compiler) converts it to:

```js
const element = React.createElement("h1", null, "Hello, world!");
```

And React interprets this object to create a real `<h1>` in the DOM.

---

### 🔍 Key Differences Between JSX and HTML

| Feature               | JSX                                         | HTML                                    | Why                           |
| --------------------- | ------------------------------------------- | --------------------------------------- | ----------------------------- |
| **Language Type**     | JavaScript extension                        | Markup language                         | JSX can contain logic         |
| **Attributes**        | Use camelCase (e.g. `className`, `onClick`) | Use lowercase (e.g. `class`, `onclick`) | Follows JS naming conventions |
| **Dynamic Data**      | Use `{}` to insert JS values                | Not supported                           | Lets you display variables    |
| **Self-closing tags** | Required (`<img />`)                        | Optional (`<img>`)                      | JS syntax requirement         |
| **Return value**      | Produces a JS object                        | Just static markup                      | JSX compiles into JS          |

---

### 🧠 JSX Is Not a Template Engine

Unlike template systems (like Handlebars, EJS, etc.), JSX allows **any valid JavaScript expression** inside `{}` — not just variable names.

Example:

```jsx
<h1>{user.name.toUpperCase()}</h1>
```

or even:

```jsx
<p>{user.friends.length > 0 ? "Has friends" : "No friends"}</p>
```

---

## 🖼️ 3. How to Display Information with JSX (Detailed Example)

Let’s build a small **User Profile** component step by step.

### Step 1️⃣: Define the Data

We have a simple object:

```jsx
const user = {
  name: "Jasim Uddin",
  age: 25,
  country: "Bangladesh",
  isOnline: true
};
```

---

### Step 2️⃣: Create a React Component

```jsx
function UserProfile() {
  const user = {
    name: "Jasim Uddin",
    age: 25,
    country: "Bangladesh",
    isOnline: true
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Country: {user.country}</p>
      <p>Status: {user.isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}
```

### Step 3️⃣: What Happens Here?

| JSX Part                      | What It Does                                |
| ----------------------------- | ------------------------------------------- |
| `<div>` `<h1>` `<p>`          | These are markup elements                   |
| `{user.name}` `{user.age}`    | These embed JavaScript variables            |
| `{user.isOnline ? ... : ...}` | Inline logic using the **ternary operator** |
| Entire block                  | Returns one **React element tree**          |

---

### Step 4️⃣: Render It to the Screen

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UserProfile />);
```

---

### ✅ Output on the Page

```
Jasim Uddin
Age: 25
Country: Bangladesh
Status: 🟢 Online
```

---

## 🧠 JSX with Expressions, Functions, and Conditional Logic

You can use **any JavaScript expression** inside `{}` in JSX:

* Math operations
* Function calls
* Conditional (ternary) expressions
* Array maps (for rendering lists)

Examples:

```jsx
// Math
<p>Next year: {user.age + 1}</p>

// Function call
<p>{user.name.toUpperCase()}</p>

// Conditional
<p>{user.isOnline ? "Online" : "Offline"}</p>

// Array rendering
<ul>
  {["React", "Next.js", "Node"].map((skill) => (
    <li key={skill}>{skill}</li>
  ))}
</ul>
```

---

## 🧭 Summary Table

| Concept                               | Explanation                                          | Example                                  |
| ------------------------------------- | ---------------------------------------------------- | ---------------------------------------- |
| **Why React mixes markup with logic** | UI and logic are part of one concern (components)    | `{user.isOnline ? "Online" : "Offline"}` |
| **JSX vs HTML**                       | JSX is JavaScript syntax, not markup                 | `className`, `{}` for expressions        |
| **Displaying info with JSX**          | Use `{}` to insert variables or expressions into JSX | `<h1>{user.name}</h1>`                   |

---

Would you like me to show the **Babel-transformed version** of the JSX example (so you can see exactly what React creates behind the scenes)? It helps you understand how JSX becomes JavaScript at runtime.
