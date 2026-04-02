# ⬇️ Download Progress Bar

A lightweight, animated **Download Progress Bar** built with pure HTML, CSS, and JavaScript — no libraries or frameworks needed. A clean dark UI with a smooth green bar that fills from 0% to 100%.

---

## 📸 Screenshots

> _Add your screenshots here_

| Initial State | In Progress | Completed |
|---|---|---|
| ![Start](./images/Screenshot%202026-04-02%20110615.png) | ![Progress](./images/Screenshot%202026-04-02%20110436.png) | ![Done](./images/Screenshot%202026-04-02%20110443.png) |

---

## ✨ Features

- 📈 **Smooth Animation** — Progress bar fills gradually with a percentage counter updating in real time
- ✅ **Completion Message** — Heading changes to "Download Completed Successfully" once it hits 100%
- 🎨 **Dark Themed UI** — Sleek dark gradient card with white text and a green progress bar
- 📱 **Responsive** — Adjusts text size for smaller screens (320px–420px)
- ⚡ **Zero Dependencies** — Pure vanilla HTML, CSS, and JavaScript

---

## 🚀 Getting Started

### No installation needed!

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/download-progress-bar.git
   cd download-progress-bar
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```
   Or just double-click `index.html` — it runs directly in any browser.

---

## 🧠 How It Works

The progress bar is controlled entirely by a JavaScript `setInterval` loop.

```js
let interval = setInterval(() => {
  if (percent <= 99) {
    percent++;
    bar.style.width = percent + "%";
    p.textContent = `${percent}%`;
    if (percent >= 100) {
      h3.textContent = "Download Completed Successfully";
    }
  }
}, 20); // runs every 20ms → completes in ~2 seconds
```

Every **20 milliseconds**, the percentage goes up by 1 and the bar width grows. When it reaches 100%, the heading updates to show the completion message. The interval keeps running but the condition stops any further changes.

### Two Approaches Explored

The project includes two working approaches (Way-1 is commented out):

| | Way-1 | Way-2 |
|---|---|---|
| **Step size** | +33.33% per tick | +1% per tick |
| **Interval** | Every 1000ms (1 sec) | Every 20ms |
| **Feel** | Jumpy, 3 big steps | Smooth, continuous |
| **Used** | ❌ Commented out | ✅ Active |

---

## 📁 Project Structure

```
download-progress-bar/
├── index.html       # Markup and styles
├── script.js        # Progress bar logic
└── README.md
└── images📁
```

---

## 🛠️ Built With

- **HTML5** — Structure
- **CSS3** — Styling, gradient background, responsive media query
- **Vanilla JavaScript** — `setInterval` animation logic

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

## 🙋‍♂️ Author

**Your Name**
- GitHub: [MANEEVAR1](https://github.com/MANEEVAR1)