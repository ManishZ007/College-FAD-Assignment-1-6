# Full Stack Development Assignments

Six frontend assignments exploring JavaScript functions, DOM manipulation, form validation, and React components and state. A central index page provides access to all six projects.

## Assignment Collection

| No. | Assignment | Main concepts | Entry page |
| --- | --- | --- | --- |
| 01 | Simple Calculator | Functions, arithmetic, input handling | [Open](1.Assignment/index.html) |
| 02 | Daily Tasks | DOM manipulation and event listeners | [Open](2.Assignment/index.html) |
| 03 | Account Setup | Form validation and error feedback | [Open](3.Assignment/index.html) |
| 04 | Developer Profile | Reusable React components and props | [Open](4.Assignment/dist/index.html) |
| 05 | Let's Connect | Controlled inputs, live preview, and React state | [Open](5.Assignment/dist/index.html) |
| 06 | Make It Count | React `useState` and event handlers | [Open](6.Assignment/dist/index.html) |

## Run the Complete Collection

You need Python and a modern browser to serve the included pages and prebuilt React apps. No npm installation is needed just to view the existing builds.

Open PowerShell in the project folder:

```powershell
cd D:\college\FSDAssignment
python -m http.server 8001
```

Open **[http://localhost:8001](http://localhost:8001)** and choose an assignment from the index page. Each assignment includes an **All assignments** link back to the collection.

Keep the terminal open while browsing. Press **Ctrl+C** in that terminal to stop the server. If the project is saved elsewhere, replace the folder path above with its location.

Use the local server to view the collection, since the React builds use JavaScript modules.

## Design

The collection uses a shared navy-and-teal theme with responsive layouts, rounded panels, consistent form controls, visible keyboard focus indicators, and reduced-motion support.

- `theme.css` defines shared colors, typography, controls, and common styles.
- `index.css` styles the assignment collection page.
- Each assignment has its own layout stylesheet.
- React apps import the shared theme through `src/index.css`; Vite bundles it into their production builds.

## Assignment Features

### 01 — Simple Calculator

Enter two numbers and choose addition, subtraction, multiplication, or division. The calculator displays the result, handles invalid input and division by zero, and includes a reset button.

### 02 — Daily Tasks

Add tasks with the button or Enter key, mark them complete, and delete them. The task count and empty-state message update automatically. Tasks are held in the current page and are not saved after a reload.

### 03 — Account Setup

A registration form with full name, email, phone number, password, and password confirmation. JavaScript checks the inputs and displays field-level errors or success feedback. This is a frontend validation demonstration; it does not create a real account.

### 04 — Developer Profile

A reusable `ProfileCard` component receives the developer's name, role, description, and initials through props. It displays an initials avatar and a responsive profile layout. The existing View Profile button is presentational.

### 05 — Let's Connect

Name, email, and message fields are controlled with React state. A live preview updates while typing, and Clear resets the inputs. Submission shows local feedback; it does not send email or save a message to a backend.

### 06 — Make It Count

A React counter with increment, decrement, and reset controls. The displayed value updates through `useState` and can go below zero.

## Project Structure

```text
FSDAssignment/
├── index.html                 # Collection page linking to all assignments
├── index.css                  # Collection layout
├── theme.css                  # Shared visual styles
├── README.md
├── 1.Assignment/              # HTML, CSS, JavaScript calculator
├── 2.Assignment/              # HTML, CSS, JavaScript task list
├── 3.Assignment/              # HTML, CSS, JavaScript validation form
├── 4.Assignment/              # React profile card
│   ├── src/
│   ├── dist/                  # Built app linked from the collection
│   └── package.json
├── 5.Assignment/              # React controlled form
│   ├── src/
│   ├── dist/
│   └── package.json
└── 6.Assignment/              # React counter
    ├── src/
    ├── dist/
    └── package.json
```

## Develop the Assignments

### JavaScript assignments (1–3)

Edit the assignment's `index.html`, `style.css`, or `script.js`, then refresh its page on the Python server. Shared theme changes also apply to these pages on refresh.

### React assignments (4–6)

Install Node.js and npm before developing the React projects. Each assignment has its own dependencies and npm commands.

For example, to work on the profile card:

```powershell
cd D:\college\FSDAssignment\4.Assignment
npm ci
npm run dev
```

Open the local URL printed by Vite. Repeat in `5.Assignment` or `6.Assignment` to develop those apps. If a configured port is occupied, use the actual URL printed in the terminal.

The root collection links to the production files in `dist`, so source edits will appear there only after rebuilding. Use the Python server and root index for navigation across the full collection.

## Rebuild and Check React Apps

Run these commands inside the React assignment you changed:

```powershell
npm run build
npm run lint
```

To install dependencies, rebuild, and lint all three React assignments from the project root:

```powershell
foreach ($assignment in 4..6) {
    Push-Location "$assignment.Assignment"
    try {
        npm ci
        npm run build
        npm run lint
    }
    finally {
        Pop-Location
    }
}
```

Rebuild all three apps after changing `theme.css`. Then refresh the collection served on port 8001 to view the updated builds.

## Technologies

- **Assignments 1–3:** HTML, CSS, JavaScript, and the browser DOM API.
- **Assignments 4–6:** React, JSX, CSS, and Vite.
- **Local collection preview:** Python's built-in HTTP server.

These assignments are intended for frontend development practice and academic learning.
