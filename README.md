# Auth & Payments Ecosystem

Exercise for Web Programming Course. Features OAuth authentication, JWT security, and Stripe payment integration.


## Technologies Used

* **Core:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **UI Framework:** [Material UI (MUI)](https://mui.com/)
* **Backend & Auth:** [Supabase (JWT + OAuth)](https://supabase.com/)
* **Payments:** [Stripe](https://stripe.com/es-us)
* **Routing:** [React Router Dom](https://reactrouter.com/)

## Installation Instructions

To run this project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kachiliquingal/Auth_Chiliquinga.git
    ```

2.  **Enter the project directory:**
    ```bash
    cd Auth_Chiliquinga
    ```

3.  **Install dependencies:**
    It is crucial to install the packages inside the project folder.
    ```bash
    npm install
    ```
    
4.  **Environment Setup (Important)**
   
    Create a file named `.env.local` in the root directory and add your Supabase credentials (provided in submission):
    ```bash
    VITE_SUPABASE_URL=your_project_url
    VITE_SUPABASE_ANON_KEY=your_anon_key
    ```

    
5.  **Run the development server:**
    ```bash
    npm run dev
    ```

6.  **Open in browser:**
    Go to `http://localhost:5173/`

## 📂 Project Structure

* `src/pages/Login.jsx`: Authentication view with GitHub OAuth button and layout.
* `src/pages/Dashboard.jsx`: Protected main view with Stripe payment logic, Payment persistence, and Token visualization (JWT/Refresh).
* `src/services/supabaseClient.js`: Supabase API configuration and client initialization.
* `src/App.jsx`: Routing logic (React Router), Auth State management, and Route Protection guards.
---

## Author

**Alejandro Chiliquinga**

* **GitHub:** [@kachiliquingal](https://github.com/kachiliquingal)

---
*Developed for the Web Programming Course - January 2026*
