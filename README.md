# 😊 read.cv‑explore

A full‑stack MERN web application inspired by Read.cv, designed to let users build and explore beautiful, minimalistic CV portfolios.

## 🚀 Live Demo

Explore the live version here:  
https://readcv-thisux.web.app/

## 🔍 Project Overview

read.cv‑explore is a platform for creating and browsing clean, modern CV-style profiles. Think of it as a community‑driven showcase for professional summaries, projects, and engagement — reminiscent of Read.cv’s visual design emphasis :contentReference[oaicite:1]{index=1}.

- **Frontend (React)** – Beautiful, responsive UI, enabling profile creation and browsing
- **Backend (Node.js + Express)** – Robust REST API to handle users, profiles, posts
- **Database (MongoDB)** – Stores user data, CV entries, and posts
- **Authentication** – JWT-based login/signup with secure password handling
- **Hosting (Firebase)** – Fast deployment of your demo site

## 💡 Key Features

- **User Registration & Authentication** – Sign up and sign in securely
- **Profile Creation** – Build your CV with personal info, work & education history, and showcased projects
- **Explore Mode** – Discover other users’ profiles in a minimal card layout
- **Engagement** – Like or comment on profiles in a simple social style
- **Responsive Design** – Built with mobile-first principles for a seamless experience on any device

## 🛠️ Tech Stack

| Layer         | Technology                |
|---------------|----------------------------|
| Frontend      | React, React Router, Axios |
| Backend       | Node.js, Express           |
| Database      | MongoDB / Mongoose         |
| Auth          | JSON Web Tokens (JWT)      |
| Hosting       | Firebase Hosting           |

## 🧭 Getting Started

1. **Clone the repo**  
   `git clone https://github.com/yourusername/readcv-explore.git`
2. **Install dependencies**  
   - Backend: `cd server && npm install`  
   - Frontend: `cd client && npm install`
3. **Create .env files**  
   - Server: set `MONGO_URI`, `JWT_SECRET`, etc.  
   - Client: configure Firebase keys if applicable
4. **Launch concurrently**  
   - In root directory: `npm run dev`  
   - Runs Express API (port 5000) and React client (port 3000)
5. **Visit locally**  
   - Go to `http://localhost:3000`

## 🏗️ Future Enhancements

- Profile personalization with custom templates (inspired by official Read.cv “Sites OS” custom designs) :contentReference[oaicite:2]{index=2}
- Upgrade to include custom domains, meta tags, and favicon support
- Integrate OAuth (e.g. Google, GitHub login)
- Add powerful search/sort filters in “Explore” view

## 💻 Inspiration

Built after noticing Read.cv’s shutdown and the need for a community-generated alternative :contentReference[oaicite:3]{index=3} — offering stylish profiles, easy sharing, and social features.

