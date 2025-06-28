Built Portfolio With GitHub
Amarjeet Kumar's Developer Portfolio
Looking to build a standout portfolio? Dive into this user-friendly and customizable template, designed especially for developers and freelancers. Take a look at my personalized portfolio to get inspired!
Demo :movie_camera:


🔗 Live Preview

Table of Contents :scroll:
Sections

Demo

Installation

Getting Started

Usage

Deployment

Tutorials

Packages Used

Sections :bookmark:
HERO SECTION

ABOUT ME

EXPERIENCE

SKILLS

PROJECTS

EDUCATION

BLOG

CONTACT

Installation :arrow_down:
Ensure you have Git and Node installed:

bash
Copy
Edit
node --version
git --version
Clone and run:

bash
Copy
Edit
git clone https://github.com/<YOUR_USERNAME>/developer-portfolio.git
cd developer-portfolio
npm install
npm run dev
Visit: http://localhost:3000

Run with Docker
bash
Copy
Edit
docker-compose up --build
OR

bash
Copy
Edit
docker build -t nextjs-app -f Dockerfile.dev .
docker run -p 3000:3000 nextjs-app
Usage :joystick:
Create a .env file based on .env.example and update with your credentials:

env
Copy
Edit
NEXT_PUBLIC_GTM=
NEXT_PUBLIC_APP_URL=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GMAIL_PASSKEY=
EMAIL_ADDRESS=
Customize the data in utils/data/personal-data.js:

js
Copy
Edit
export const personalData = {
  name: "Amarjeet Kumar",
  profile: "/profile.png",
  designation: "Software Developer | ML Enthusiast",
  description: "Passionate about building scalable software and contributing to open source.",
  email: "ak7462514@gmail.com",
  phone: "+91-9798447398",
  address: "Mohali, Punjab, India",
  github: "https://github.com/AmarjeetJyotis",
  facebook: "",
  linkedIn: "https://www.linkedin.com/in/amarjeet-jyotish/",
  twitter: "",
  stackOverflow: "",
  leetcode: "https://leetcode.com/u/AmarjeetJyotish/",
  devUsername: "AmarjeetJyotis",
  resume: "https://drive.google.com/file/d/1XJjlWq6_fE5E8ra58KoQbukHk7IVzwc8/view?usp=sharing",
};
Deployment :rocket:
On Vercel:
Log in to Vercel

Import your GitHub repo

Set up environment variables

Deploy!

On Netlify:
Log in to Netlify

Select repo to deploy

Add environment variables

Build & Deploy!

Projects :computer:
AI Rubik’s Cube Solver
Solves 3x3 cube using computer vision + Kociemba’s algorithm

Real-time cube face color detection with OpenCV

Pneumonia Detection using CNN
Hybrid CNN + Random Forest diagnostic model

Presented at ICICC-2025, Springer conference

Alternative Routes in Road Networks
Simulated Dijkstra's algorithm in C++ & OpenGL

Included dynamic speed control and collision avoidance

Ecomzy: E-Commerce App
Built with React.js, Redux Toolkit & FakeStore API

Deployed on Vercel

Certifications & Trainings
Intel Learn Student Ambassador, Intel

IBM DevOps and Software Engineering

Google Cloud Solutions Architect

Google Cybersecurity Certificate

IoT by NPTEL (IIT Kharagpur)

Google UX Design

Microsoft Power BI Data Analyst

Technical Skills :hammer_and_wrench:
Languages: C++, Python, Java, SQL, JavaScript, PHP, HTML/CSS

Frameworks: React, Redux, Next.js, OAuth, JWT

Databases: MySQL, PostgreSQL

Cloud: AWS

Tools: GitHub, Docker, Jenkins, Redis, Selenium, Postman, VS Code

Soft Skills: Leadership, Teamwork, Public Speaking

Open Source :heart:
Over 1200+ solutions shared on LeetCode & GeeksForGeeks

FAQ:
Having trouble running the app?

bash
Copy
Edit
npm install -g next
Then rerun:

bash
Copy
Edit
npm run dev
