🌿 Peace Lily Path: Counseling Services

A modern, responsive counseling website built for Dr. Maya Reynolds,
Licensed Psychologist | Trauma Specialist | EMDR Certified.

The platform allows users to explore therapy services, learn about the psychologist, create accounts, and book appointments seamlessly. It is designed with a calm, accessible UI and a scalable backend architecture.

🔗 Project Overview

Peace Lily Path: Counseling Services is a full-stack web application designed for a mental health professional. The website focuses on trust, clarity, and ease of use while allowing secure data storage and appointment handling.
Used Web 3 Forms for the contact section.
✨ Features

🧠 Professional therapy services showcase

👩‍⚕️ About & credentials section for Dr. Maya Reynolds

📝 User authentication (Sign up / Sign in)

📅 Book therapy appointments

📂 View bookings & manage account

📱 Fully responsive design

🔐 Secure backend with MongoDB Atlas

⚡ Fast client-side routing and API handling

🛠 Tech Stack
Frontend

Next.js

Tailwind CSS

shadcn/ui

React Router

TanStack React Query

Lucide Icons

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

dotenv

CORS

📂 Project Structure
peace-lily-path/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── appointmentRoutes.js
│   ├── models/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── images/
│   │   ├── img1.png
│   │   ├── img2.png
│   │   └── ...
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
└── README.md

🖼 Screenshots

Screenshots of the application UI are available in the images/ folder.

images/
├── img1.png
├── img2.png
├── img3.png
├── ...
└── img12.png


These include:

Home Page

Therapy Sessions

About Page

Booking Flow

Authentication Screens

Dashboard & Account Pages

⚙️ Environment Setup
Backend .env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string

🚀 Running the Project Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/peace-lily-path.git
cd peace-lily-path

2️⃣ Backend setup
cd backend
npm install
npm run dev


Server will start on:

http://localhost:5000

3️⃣ Frontend setup
cd peace-lily-path-main
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔍 API Endpoints
User Routes
POST   /api/users/register
POST   /api/users/login
GET    /api/users/profile

Appointment Routes
POST   /api/appointments
GET    /api/appointments

🎯 Purpose of the Project

This project was built as:

A real-world healthcare web application

A full-stack assessment submission

A demonstration of clean UI + scalable backend architecture

👨‍💻 Developer

Built by: M. Bruntha
Role: Full-Stack Developer (Frontend + Backend)
Stack: MERN / Next.js / Tailwind / MongoDB
