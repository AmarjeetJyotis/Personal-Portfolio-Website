# 🚀 Amarjeet Kumar – Developer Portfolio

Welcome to the official GitHub repository of my **personal developer portfolio** – a sleek, modern, and fully responsive website built using **Next.js, TailwindCSS**, and other top-notch technologies. It showcases my **projects, skills, certifications**, and more.

🌐 **Live Site**: [amarjeetkumar](https://amarjeett.vercel.app/)  
📁 **Source Code**: [GitHub Repository](https://github.com/AmarjeetJyotis/Personal-Portfolio-Website.git)

---


# Demo :movie_camera:

![image](https://github.com/user-attachments/assets/1c5527f1-380d-4a4a-9117-2a556545f682)


https://github.com/user-attachments/assets/af627c44-c11e-453c-b00d-705909d35884

## View live preview [here](https://amarjeett.vercel.app/).

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Deployment](#deployment-rocket)
- [Tutorials](#tutorials-wrench)
  - [Gmail App Password Setup](#gmail-app-password-setup)
  - [Create a Telegram Bot](#create-a-telegram-bot)
  - [Fetching Blog from dev.to](#fetching-blog-from-devto)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

bash
node --version
git --version


## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

bash
git clone https://github.com/<your-username>/Personal-Portfolio-Website.git

cd Personal-Portfolio-Website



### Install packages from the root directory

bash
npm install
# or
yarn install


Then, run the development server:

bash
npm run dev
# or
yarn dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### Running with Docker Compose

1. **Build Docker Image and Run Container**:
    
bash
    docker-compose up --build


2. **Access the Application**:
    Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

### Building the Docker Image

1. **Build the Docker Image using Dockerfile.dev**:

    
bash
    docker build -t nextjs-app -f Dockerfile.dev .


2. **Running the Docker Container**:

    
bash
    docker run -p 3000:3000 nextjs-app


3. **Access the Application**:
    Visit [http://localhost:3000](http://localhost:3000) in your web browser to view the running application.

---

# Usage :joystick:

Please create a new .env file from .env.example file.

Eg:

env
NEXT_PUBLIC_GTM =
NEXT_PUBLIC_APP_URL =
TELEGRAM_BOT_TOKEN =
TELEGRAM_CHAT_ID =
GMAIL_PASSKEY =
EMAIL_ADDRESS =


### Then, Customize data in the utils/data [folder](https://github.com/said7388/developer-portfolio/tree/main/utils/data).

Eg:

javascript
export const personalData = {
  name: "Amarjeet Kumar",
  profile: "/profile.png",
  designation: "Software Developer | ML Enthusiast",
  description: "Passionate about building scalable software and contributing to open source.",
  email: "ak7462514@gmail.com",
  phone: "+91-9798447398",
  address: "Mohali, Punjab, India",
  github: "https://github.com/AmarjeetJyotis",
  linkedIn: "https://www.linkedin.com/in/amarjeet-jyotish/",
  leetcode: "https://leetcode.com/u/AmarjeetJyotish/",
  devUsername: "AmarjeetJyotis",
  resume: "https://drive.google.com/file/d/1XJjlWq6_fE5E8ra58KoQbukHk7IVzwc8/view",
};



devUsername is used for fetching blog posts from dev.to.

---

# Deployment :rocket:

Deploying the app to platforms like Vercel or Netlify is quick and easy.

## Deploying to Vercel:

1. **Sign up or log in** to [Vercel](https://vercel.com/).
2. Once logged in, click on **"New Project"**.
3. Select your **GitHub repo** (the one that contains your forked project) and click **Import**.
4. Configure your environment variables in the Vercel dashboard by adding each key from your .env file.
   - E.g., NEXT_PUBLIC_GTM, NEXT_PUBLIC_APP_URL, TELEGRAM_BOT_TOKEN, etc.
5. Click on **Deploy**. Vercel will automatically detect your Next.js app and build it.
6. Once the deployment is complete, you can visit your live website!

### Updating After Deployment

Whenever you push changes to your GitHub repo, Vercel will automatically redeploy the app, keeping your portfolio up-to-date.

## Deploying to Netlify:

1. **Sign up or log in** to [Netlify](https://www.netlify.com/).
2. In the **Netlify Dashboard**, click **"New site from Git"**.
3. Connect your **GitHub** account and select your repo.
4. Configure your environment variables by going to **Site Settings > Build & Deploy > Environment** and adding keys from your .env file.
5. Click **Deploy Site**. Netlify will build and deploy your portfolio.

---

# 📂 Project:
🎲 AI Rubik’s Cube Solver
Computer vision-based solver using OpenCV and Kociemba algorithm.

🫁 Pneumonia Detection (CNN)
Hybrid CNN + Random Forest model, presented at ICICC-2025 (Springer).

🛣️ Alternative Road Routes
Simulated traffic-aware pathfinding using Dijkstra in C++/OpenGL.

🛒 Ecomzy – React E-Commerce App
React + Redux Toolkit-based shopping site with dynamic product APIs.

🎓 Certifications
IBM DevOps & Software Engineering

Google Cloud Solutions Architect

Google Cybersecurity Certificate

NPTEL IoT (IIT Kharagpur)

Google UX Design

Microsoft Power BI Analyst

📄 View Certificates

🧰 Technical Skills
Languages: C++, Python, Java, SQL, JS, PHP
Frameworks: React, Redux, Next.js, OAuth, JWT
Databases: MySQL, PostgreSQL
Cloud: AWS
Tools: Docker, Jenkins, GitHub, Selenium, Postman
Soft Skills: Leadership, Teamwork, Communication

---

## 🧑‍💻 Author

**Amarjeet Kumar**  
**UID:** 21BCS10768  
**Department of Computer Science & Engineering**  
**Chandigarh University**

**Portfolio:** [https://amarjeett.vercel.app/](https://amarjeett.vercel.app/)  
**LinkTree:** [https://linktr.ee/AmarjeetKumarJyotish](https://linktr.ee/AmarjeetKumarJyotish)  
**GitHub:** [https://github.com/AmarjeetJyotis](https://github.com/AmarjeetJyotis)  
**LinkedIn:** [https://www.linkedin.com/in/amarjeet-jyotish/](https://www.linkedin.com/in/amarjeet-jyotish/)  
**GeeksforGeeks:** [https://www.geeksforgeeks.org/user/amarjeetjyotish/](https://www.geeksforgeeks.org/user/amarjeetjyotish/)  
**LeetCode:** [https://leetcode.com/u/AmarjeetJyotish/](https://leetcode.com/u/AmarjeetJyotish/)


---


## Gmail App Password Setup

1. **Log in to your Google Account** at [https://myaccount.google.com/](https://myaccount.google.com/).
2. Navigate to **Security** from the left sidebar.
3. Scroll down to the **"Signing in to Google"** section and make sure **2-Step Verification** is turned ON.
4. Once 2-Step Verification is enabled, you'll see an option for **App Passwords**.
5. Click on **App Passwords**. You may need to enter your Google account password again.
6. In the **Select app** dropdown, choose "Mail", and for **Select device**, choose "Other (Custom name)" and name it appropriately (e.g., "Portfolio").
7. Click **Generate**. A 16-character app password will be displayed. Save this password for later use in your environment variables (e.g., GMAIL_PASSKEY).

## Create a Telegram Bot

1. **Open Telegram** and search for the user **@BotFather**.
2. Start a chat with BotFather and use the /newbot command to create a new bot.
3. Choose a name for your bot.
4. Set a unique username for your bot (must end with bot, e.g., PortfolioAssistantBot).
5. Once your bot is created, BotFather will send you a **Token**. Save this token, as you will need it for your environment variables (e.g., TELEGRAM_BOT_TOKEN).
6. To get your chat ID:
   - Open your bot in Telegram and send it a message.
   - Visit the following URL in your browser, replacing BOT_TOKEN with your actual bot token:  
     https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
   - Look for the chat object in the response, which contains your **chat ID** (you can use this value for TELEGRAM_CHAT_ID).

## Fetching Blog from dev.to

To display your blog posts from dev.to on the portfolio:

1. Set your devUsername in the utils/data.js file to your dev.to username.
2. The application will automatically fetch your latest blog posts and display them in the **BLOG** section.
3. Ensure your blogs are publicly visible on dev.to, and the application will fetch them using the dev.to API.

---

# Packages Used :package:

|   Used Package List    |
| :--------------------: |
|    @emailjs/browser    |
|  @next/third-parties   |
|         axios          |
|      lottie-react      |
|          next          |
|       nodemailer       |
|         react          |
|       react-dom        |
|   react-fast-marquee   |
| react-google-recaptcha |
|      react-icons       |
|     react-toastify     |
|         sharp          |
|          sass          |
|      tailwindcss       |

---

# FAQ:

1. For those facing the issue of "next is not recognized as an internal or external command, operable program or batch file."

Run the following command:

bash

npm install -g next


This installs Next.js globally

then do the usual npm run dev
