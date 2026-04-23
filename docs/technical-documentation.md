# Technical Documentation – Assignment 4

## 1. Technologies Used
- HTML5 for website structure
- CSS3 for styling, layout, and responsive design
- JavaScript for interactivity, dynamic features, and application logic
- Advice Slip API for fetching a developer quote
- Lighthouse for performance testing
- Canvas Confetti (for animation effects)

---

## 2. Project Structure
202271660-YasmeenAlshehri-assignment4/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── skills/
│       └── (project images)
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf
│   └── demo-video.mp4
└── .gitignore

---

## 3. Layout & Styling
- Used Flexbox and CSS Grid to organize the layout.
- Implemented CSS variables to manage theme colors.
- Organized styles into logical sections such as Navbar, Hero, Projects, Activities, and Contact.
- Used hover effects, transitions, and overlays to improve visual interaction.
- Added responsive styling to ensure the website works well on different screen sizes.

---

## 4. JavaScript Interactivity
Several interactive features were implemented using JavaScript:

- Dark/light theme toggle.
- Mobile navigation menu toggle.
- Project filtering by category using data attributes.
- Project search functionality that filters cards dynamically.
- Project sorting functionality (A–Z and Z–A).
- Expandable project cards that reveal additional details.
- Image click-to-enlarge feature for project screenshots.
- Active navigation highlighting based on scroll position.
- A fade-up animation is used for the About section when it becomes visible during scrolling.
- A site timer that tracks how long the user stays on the website.
- Confetti animation triggered on successful form submission to enhance user feedback.

---

## 5. API Integration
- Integrated the **Advice Slip API** to display a developer quote in the contact section.
- Used the JavaScript `fetch()` function to retrieve data from the API.
- Implemented error handling to display a user-friendly message if the API request fails.

---

## 6. Complex Logic
The website includes advanced logic that combines conditions and multiple steps:

- Projects can be filtered by category and searched by keyword.
- Projects can also be sorted alphabetically.
- The contact form validates multiple conditions before allowing submission.
- The website includes a timer that updates every second to show how long the visitor has been on the site.

These features demonstrate step-by-step logic beyond simple one-click actions.

---

## 7. Form Interaction and Validation
- Implemented a contact form with required input validation.
- Added checks to ensure that all fields are filled in.
- Added JavaScript validation to confirm that the email address is valid.
- Required the message to be at least 10 characters long before submission.
- Displayed a success message only after all validation checks were passed.

---

## 8. State Management
- Implemented dark/light theme persistence using `localStorage`.
- The selected theme is saved and restored after page reload.
- Used UI state changes such as expanding and collapsing project cards.
- Updated the active navigation state dynamically based on the user’s scroll position.

---

## 9. User Experience Improvements
- Added clear guidance in the Projects section to explain how to filter, search, and view project details.
- Added guidance in the Contact section to explain how to use the form.
- Added hover guidance over project preview images.
- Enhanced existing labels such as “Academic Project” and “Extracurricular” by adding explanatory tooltips.
- Added image enlargement support for better project preview interaction.
- Redesigned the activities section by enhancing activity cards with a club logo and tool/skill indicators.
- Improved visual feedback by making the interface more dynamic and interactive.
- Added a confetti animation after form submission to provide a more engaging user experience.

---

## 10. Responsive Design
- Used CSS media queries to adapt the layout for smaller screens.
- Adjusted navigation behavior for mobile devices.
- Ensured images, cards, and form sections scale properly across different screen sizes.
- Supported both desktop and mobile interaction patterns.

---

## 11. Performance Optimization
- Removed duplicated code and cleaned up unused elements.
- Organized CSS and JavaScript into clearly structured sections for maintainability and efficiency.
- Tested the website using Lighthouse to evaluate performance and loading speed.
- The website achieved good Lighthouse results in performance, accessibility, best practices, and SEO.
- Used a lightweight animation library (canvas-confetti) to ensure performance is not affected.

---

## 12. Code Quality
- Organized CSS into clearly labeled sections.
- Added comments to HTML, CSS, and JavaScript for readability.
- Kept file structure simple and consistent.
- Refactored code to improve structure and remove duplication  
- Verified that the project runs without console errors.
- Improved UI component consistency after adding new features  