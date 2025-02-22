# iNotebook Frontend Documentation

## 📌 Introduction
The frontend of **iNotebook** is built using **React.js** with **Tailwind CSS** for styling. It provides a seamless user experience for managing notes with authentication and CRUD operations.

## 🚀 Tech Stack
- **React.js** (Frontend Framework)
- **Tailwind CSS** (Styling)
- **React Router** (Navigation)
- **Context API** (State Management)
- **Fetch API** (API Calls)

## 📂 Project Structure
```
/frontend
│── public/              # Static Assets
│── src/
|   ├──assets/
│   ├── components/      # Reusable UI Components
│   ├── context/          # Global State (Auth, Notes)
│   ├── App.css/          # Helper Functions
│   ├── App.jsx           # Main App Component
│   ├── index.css         # Entry Point
│   ├── main.jsx       
│── .env                 # Environment Variables
│── package.json         # Dependencies
│── eslint.config.js   # Tailwind Configuration
│── index.html          # Main html file
│── .gitignore           # Git Ignore File
│── package-lock.json          
│── package.json          #Dependencies

```

## 📑 Environment Variables (`.env`)
Create a `.env` file and add the following:
```
VITE_HOSTNAME=http://localhost:3000
```
> Replace `http://localhost:3000` with the actual backend URL when deployed.

## 📌 Installation & Setup
1. Clone the repository:
   ```sh
   git clone <frontend-repo-url>
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## 🏗️ Features & Components
### 🔐 Authentication (Login / Signup)
- Uses **JWT-based authentication**.
- Token is stored in `localStorage`.
- Protected routes for logged-in users.

### 📝 Notes Management
- **Add Notes**: Users can create notes with a title, description, and optional tags.
- **Edit Notes**: Users can update existing notes.
- **Delete Notes**: Users can remove notes.
- **View Notes**: Fetches user-specific notes from the backend.


## 🌐 API Endpoints (Frontend Calls)
| Method | Endpoint              | Description        |
|--------|----------------------|--------------------|
| POST   | `/auth/login`        | User Login        |
| POST   | `/auth/signup`       | User Registration |
| GET    | `/notes`             | Fetch Notes       |
| POST   | `/notes/addnote`     | Add Note          |
| PUT    | `/notes/updatenote`  | Update Note       |
| DELETE | `/notes/deletenote`  | Delete Note       |

## 🚀 Deployment
### Hosting on **Vercel**
1. Install Vercel CLI:
   ```sh
   npm i -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```
3. Add `.env` variables in Vercel settings.

### Hosting on **Netlify**
1. Install Netlify CLI:
   ```sh
   npm i -g netlify-cli
   ```
2. Deploy:
   ```sh
   netlify deploy
   ```

## 💡 Notes
- Ensure the **backend is running** before testing API calls.
- Use **React DevTools** for debugging.
- **Clear localStorage** if facing auth issues.

## 📞 Contact
For any issues or contributions, feel free to **open a GitHub issue** or reach out!
