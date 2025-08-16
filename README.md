# E-commerce
# Aura E-Commerce Front-End Prototype

![Project Status](https://img.shields.io/badge/status-complete-success)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A modern, interactive, and visually appealing front-end prototype for an e-commerce website named "Aura." This project demonstrates how to structure a web application using separate files for HTML, CSS, and JavaScript, and how to dynamically load content from a JSON file.

![Aura Website Screenshot](https://i.imgur.com/g8e1m5K.png)
*(Feel free to replace this with your own screenshot!)*

## ✨ Key Features

-   **Modern & Clean UI/UX:** A visually pleasing design with a focus on readability and user experience.
-   **Generated 3D Logo:** A pure CSS, animated 3D cube logo that adds a unique and professional touch.
-   **Interactive Product Cards:** Cards that lift up on hover with a 3D effect, providing satisfying user feedback.
-   **Multiple Section Layouts:** Includes a standard **grid layout** for featured items and a **horizontal scrolling layout** for new arrivals.
-   **Dynamic Content Loading:** Product data is stored in an external `products.json` file and loaded asynchronously using JavaScript's `fetch` API.
-   **Engaging Animations:** Uses the **GSAP (GreenSock Animation Platform)** plugin to create a smooth, staggered loading animation for the product cards.
-   **Responsive Foundation:** The layout is built to be adaptable to different screen sizes.

## 🛠️ Technologies Used

-   **HTML5:** For the core structure and content.
-   **CSS3:** For all styling, including the 3D logo, layouts, and interactive effects.
-   **JavaScript (ES6+):** For interactivity, fetching data, and dynamically creating HTML elements.
-   **GSAP (GreenSock):** A professional-grade JavaScript animation library for the "stagger" loading effect.
-   **JSON:** Used as a mock database to store and manage product information.

## 📂 Project Structure

The project is organized into clear and separate files for better maintainability:

ecommerce-site/
├── index.html # The main HTML file (the skeleton)
├── style.css # All styling rules
├── script.js # All JavaScript logic and interactivity
└── products.json # The product data (mock database)

code
Code
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
## 🚀 Setup and Installation

Because this project uses the `fetch` API to load a local JSON file, you cannot run it by simply opening `index.html` in your browser due to browser security policies (CORS). You must serve the files from a local web server.

Here are two easy ways to do this:

### Option 1: Using Node.js / NPX (Recommended)

This is the simplest method if you have Node.js installed.

1.  **Clone or download this repository.**
2.  **Navigate to the project directory** in your terminal:
    ```bash
    cd ecommerce-site
    ```
3.  **Run the `http-server` command** using `npx` (this requires no installation):
    ```bash
    npx http-server
    ```
4.  Open your web browser and go to the URL provided in the terminal (usually `http://127.0.0.1:8080` or `http://localhost:8080`).

### Option 2: Using Python

If you have Python installed, you can use its built-in web server.

1.  **Clone or download this repository.**
2.  **Navigate to the project directory** in your terminal.
3.  **Run one of the following commands**, depending on your Python version:
    -   For **Python 3**: `python -m http.server`
    -   For **Python 2**: `python -m SimpleHTTPServer`
4.  Open your web browser and go to `http://localhost:8000`.

## 💡 How It Works

1.  **`index.html`** loads the basic page structure, including empty `<div>` containers for the product sections.
2.  **`style.css`** is loaded to style the page, including the complex 3D cube animation and card hover effects.
3.  **`script.js`** executes, which then:
    -   Fetches the product data from `products.json`.
    -   Filters the products into categories (`featured`, `new`, `sale`).
    -   Dynamically generates the HTML for each product card.
    -   Injects the cards into the correct containers in `index.html`.
    -   Initializes the GSAP animations and adds event listeners for the "Add to Cart" buttons.

## 🔮 Future Improvements

This prototype provides a solid foundation. The next steps to turn this into a full-fledged application would be:

-   **Back-End API:** Replace `products.json` with a real back-end API (e.g., using Node.js/Express or Django) to manage products.
-   **Database Integration:** Connect the back-end to a database like PostgreSQL or MongoDB.
-   **User Authentication:** Add user sign-up and login functionality.
-   **Full Shopping Cart Logic:** Implement a functional shopping cart that persists across sessions.
-   **Payment Gateway Integration:** Integrate a payment service like Stripe or PayPal to handle transactions.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
