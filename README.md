# ✨ WordWeaver - Real-Time Collaborative Document Editor 📝🌍

WordWeaver is a full-stack web application that allows users to **collaboratively create, edit, view, save, and translate text documents** in real-time. It supports **Google and Facebook OAuth**, **PDF downloads**, **text translation**, and **secure user authentication** using JSON Web Tokens.

---

## 🔥 Features

- 👥 User authentication (Signup/Login)
  - Google and Facebook login options
- 📄 Create, edit, save text documents
- 🕒 View recently edited documents
- 🌍 Translate documents into multiple languages
- 💾 Download as PDF
- ❤️ Favorite documents
- 🔒 Protected routes with JWT auth
- 📂 MongoDB-based document storage

---

## 🏗️ Project Structure

WordWeaver/
├── backend/ # Node.js + Express + MongoDB API
│ ├── server.js # Entry point
│ ├── config/ # DB config
│ ├── models/ # Mongoose models (User, Document)
│ ├── controllers/ # API logic
│ ├── routes/ # API endpoints
│ ├── validator/ # Validation functions
│ ├── success.html # OAuth redirect page
│ └── .env # Environment variables
│
├── frontend/ # React.js + Tailwind + Redux client
│ ├── src/
│ │ ├── components/ # UI Components (Navbar, Sidebar, Editor, Auth)
│ │ ├── pages/ # Page views (Signin, Signup, Profile, 404)
│ │ ├── redux/ # State management (docs, auth, translation)
│ │ ├── App.js # Main routing component
│ │ └── index.js # Entry point
│ ├── public/ # Static assets
│ └── .env # Frontend environment variables
