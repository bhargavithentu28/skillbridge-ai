# 🧠 SkillBridge-AI

> An intelligent AI-powered platform that helps users identify skill gaps, follow guided career roadmaps, and prepare for job readiness with AI-driven tools.

---

## 📌 Table of Contents
- [About the Project](#about-the-project)
- [Goals](#goals)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📖 About the Project

**SkillBridge-AI** is an intelligent career development platform designed to help users:
- Learn in-demand skills with personalized learning paths.
- Practice job interviews with AI-powered voice analysis.
- Track progress and get personalized feedback.
- Bridge the gap between learning and job readiness.

---

## 🎯 Goals

### ✅ Current:
- Offer career roadmaps with curated resources.
- Provide domain-specific mock interview practice.
- Enable user profile and progress tracking.
- Present a centralized learning library.

### 🔜 Future:
- Add more career tracks (Data Science, Product Management).
- Implement an AI-powered resume builder.
- Enable real-time project collaboration between users.

---

## ✨ Features

### ✅ Career Roadmaps
- Structured paths for UX/UI Design, Digital Marketing, and Finance.
- Step-by-step learning phases with resources.
- Progress tracking and completion indicators.

### ✅ AI Mock Interviews
- Domain-specific questions with GPT-4.
- User voice responses analyzed via Whisper API.
- Feedback and suggestions based on AI evaluation.

### ✅ User Management
- Firebase authentication (register/login).
- User profiles with skill & progress tracking.

### ✅ Resource Library
- Curated content specific to each learning track.

---

## 🛠 Tech Stack

### 🔧 Backend:
- Node.js + Express
- Firebase (Firestore, Authentication)
- OpenAI API (Whisper + GPT-4)

### 🎨 Frontend (if implemented):
- React / Next.js
- Tailwind CSS
- Web Audio API

### ⚙️ DevOps:
- Firebase Hosting & Functions
- GitHub Actions (CI/CD)

---

## ⚙️ Installation

### 🖥 Backend Setup

```bash
git clone https://github.com/bhargavithentu28/skillbridge-ai.git
cd skillbridge-backend
npm install

# Create .env file
echo "FIREBASE_API_KEY=your_key" > .env
echo "OPENAI_API_KEY=your_key" >> .env

# Run server
node server.js
🚀 Usage
Visit the following URLs after running the app locally:

Roadmaps: http://localhost:3000/roadmap/ux-ui

Interview Questions: http://localhost:3000/api/interview/questions/ux-ui

📸 Screenshots
(Add real screenshots here once UI is implemented.)

Roadmap Page


Interview Practice


🤝 Contributing
Contributions are welcome!
Please fork the repository and submit a pull request. For significant changes, open an issue first to discuss what you’d like to improve.

📄 License
MIT License

sql
Copy
Edit
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
📬 Contact
Bhargavi Thentu
📧 bhargavithentu28@gmail.com
🌐 GitHub
