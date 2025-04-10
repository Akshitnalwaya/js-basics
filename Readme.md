# 🚀 JavaScript Async & Promises — Complete Guide

## 🟢 1. What is Asynchronous JavaScript?

JavaScript is single-threaded, but it can delegate tasks (API calls, timers, etc.) to be done in the background.

### 🔁 Synchronous Example:
```js
console.log("1");
console.log("2");
console.log("3");
```

### 🔄 Asynchronous Example:
```js
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
```

## 🔷 2. What is a Promise?

A Promise represents a value that may be available now, in the future, or never.

```js
let promise = new Promise((resolve, reject) => {
    resolve("Success");
    // reject("Error");
});

promise
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

## 🧠 3. Promise States

| State     | Description                        |
|----------|------------------------------------|
| pending  | Still running                      |
| fulfilled| Resolved successfully              |
| rejected | Operation failed                   |

## 🔁 4. Simulating Async Work

```js
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Processing ID:", id);
            resolve("Data for ID " + id);
        }, 1000);
    });
}
```

## ⚡ 5. Using async / await

```js
async function showData() {
    let result = await getData(1);
    console.log(result);
}
```

✅ `await` pauses execution until the promise resolves.

## ⛔ 6. Common Mistakes

### ❌ Using await outside async:
```js
await getData(1); // ❌ SyntaxError
```

✅ Fix:
```js
async function main() {
    await getData(1);
}
main();
```

### ❌ Forgetting to call an async function:
```js
async function run() {
    await getData(2);
}
// No output — not called!
```

## 📊 7. Sequential vs Parallel Execution

### 🔁 Sequential:
```js
await getData(1);
await getData(2);
```

### ⚡ Parallel:
```js
const [a, b] = await Promise.all([getData(1), getData(2)]);
```

## ⚔️ 8. Promise.all, race, allSettled

```js
await Promise.all([p1, p2]);        // All must succeed
await Promise.race([p1, p2]);       // First to finish
await Promise.allSettled([p1, p2]); // Waits for all (success or fail)
```

## 🔥 9. Top-Level Await (Modules Only)

```js
const result = await fetchData(); // Only in ES Modules or browser dev tools
```

## ✅ 10. Best Practices

```js
async function safe() {
    try {
        const result = await getData(1);
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}
```

- Use `try/catch` for error handling.
- Don't mix `.then()` and `await` unless needed.
- Use `Promise.all()` for concurrent tasks.

## 🛠️ 11. Real-World Simulation

```js
function fetchUser(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (id % 2 === 0) res({ id, name: "User" + id });
            else rej("User not found: " + id);
        }, 1000);
    });
}

async function getUsers() {
    for (let i = 1; i <= 5; i++) {
        try {
            const user = await fetchUser(i);
            console.log("✅", user);
        } catch (err) {
            console.log("❌", err);
        }
    }
}
getUsers();
```

## 📚 12. Microtasks vs Macrotasks

```js
console.log("1");

setTimeout(() => console.log("2"), 0); // macrotask
Promise.resolve().then(() => console.log("3")); // microtask

console.log("4");
```

🖨 Output:
```
1
4
3
2
```

## 🎓 13. Promise Chaining

```js
getData(1)
  .then(res => {
    console.log(res);
    return getData(2);
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => console.error(err));
```

## 🧩 14. Don't Mix then & await Unnecessarily

```js
// Clean way:
const data = await getData(1);

// Mixing (works but less clean):
getData(2).then(res => console.log(res));
```

## 💡 15. async vs then

| Feature        | async/await         | .then()              |
|----------------|---------------------|-----------------------|
| Style          | Synchronous-looking | Nested / chained      |
| Error Handling | try/catch           | .catch()              |
| Readability    | Cleaner             | Harder to manage      |

## 🔁 16. Delay Function

```js
const wait = (ms) => new Promise(res => setTimeout(res, ms));

async function steps() {
    for (let i = 1; i <= 3; i++) {
        console.log("Step", i);
        await wait(1000);
    }
}
steps();
```

## 🛑 17. Avoid Callback Hell

```js
// ❌ Callback hell:
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            console.log("done");
        }, 1000);
    }, 1000);
}, 1000);

// ✅ async/await:
async function cleanWay() {
    await wait(1000);
    await wait(1000);
    await wait(1000);
    console.log("done");
}
```

## 🧾 18. Cheatsheet Summary

| Concept         | Syntax                            |
|----------------|------------------------------------|
| Create Promise | `new Promise((res, rej) => {})`    |
| Resolve        | `res("done")`                      |
| Reject         | `rej("fail")`                      |
| Await promise  | `await somePromise()`              |
| Error handling | `try { await } catch(e) {}`        |
| Run in parallel| `await Promise.all([...])`         |

## 📦 19. Real Use Cases

- API calls
- Time-based UI effects
- Retry logic
- Async loops
- Rate-limiting

---

> Built with ❤️ for async mastery. You got this 🔥
