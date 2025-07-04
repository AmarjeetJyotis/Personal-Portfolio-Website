export const projectsData = [
    {
        id: 1,
        name: 'Ai-Rubiks-Cube-Solver',
        description: "I built an AI-powered program that learns to solve a scrambled Rubik's Cube using deep learning. The cube is modeled as a 6x3x3 tensor, and cube moves are implemented via NumPy operations. I used TensorFlow to train a fully-connected neural network using over 8 million training examples generated via Kociemba’s optimal solving algorithm. The model predicts the next best move to solve the cube based on its current state. Visualizations are done using Matplotlib, and the cube simulation is handled with MagicCube.",
        tools: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib', 'MagicCube', 'Kociemba Solver', 'Keras', 'UnitTest'],
        role: 'AI Developer & ML Engineer',
        code: 'https://github.com/AmarjeetJyotis/Ai-Rubiks-Cube-Solver',
        demo: 'https://github.com/AmarjeetJyotis/Ai-Rubiks-Cube-Solver',
        github: 'https://github.com/AmarjeetJyotis/Ai-Rubiks-Cube-Solver.git' ,
    },
    {
        id: 2,
        name: 'Ecomzy – Redux E-commerce App',
        description: "I developed a responsive e-commerce frontend called Ecomzy using React and Redux Toolkit. The app fetches product data dynamically from the FakeStore API, allowing users to browse, view, and add products to their cart. It demonstrates effective global state management, modular code organization, and real-time API integration. The UI is built with Tailwind CSS for styling, and the app is deployed using Vercel.",
        tools: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'FakeStore API', 'Vercel'],
        code: '',
        demo: '',
        role: 'Frontend Developer',
        github: 'https://github.com/AmarjeetJyotis/lec-28---ShopApp-Redux.git' ,
    },
    {
        id: 3,
        name: 'Razorpay Integrated Payment Suite Clone',
        description: "I built a frontend clone of Razorpay's modern payment and business banking platform using HTML, Tailwind CSS, and JavaScript. The interface replicates key sections of the official Razorpay site, showcasing features like payment links, hosted pages, smart collect, and RazorpayX payroll solutions. It serves as a UI/UX demonstration of a real-world fintech product and illustrates responsive design with Tailwind.",
        tools: ['HTML', 'Tailwind CSS', 'JavaScript', 'Vercel'],
        code: 'https://github.com/AmarjeetJyotis/lec-11---Razorpay-Clone',
        demo: 'https://lec-11-razorpay-clone-62tf.vercel.app/',
        role: 'Frontend Developer',
        github: 'https://github.com/AmarjeetJyotis/lec-11---Razorpay-Clone.git' ,
    },
    {
        id: 4,
        name: 'Real-time Chat App',
        description: 'I developed a web-based Real-time Chat Application using HTML, CSS, and JavaScript, with Firebase Firestore for real-time database functionality. The app allows users to send and receive messages instantly in a chatroom interface. It features user authentication, a clean UI, and live data updates without page reload. The project is deployed on Netlify and demonstrates my proficiency in full-stack web development using serverless technologies.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Firebase Firestore', 'Netlify'],
        code: 'https://github.com/AmarjeetJyotis/Real-time-chat-app-master',
        role: 'Frontend Developer',
        demo: 'https://romantic-feynman-e009cc.netlify.app/',
        github: 'https://github.com/AmarjeetJyotis/Real-time-chat-app-master'
    },
    // {
    //     id: 4,
    //     name: 'Predict Pneumonia Disease',
    //     description: 'I co-authored and presented a research paper titled To improve pneumonia detection accuracy by combining the strengths of Convolutional Neural Networks (CNN) and Random Forest classifiers at the 8th International Conference on Innovative Computing and Communication (ICICC-2025). The paper highlights a hybrid deep learning approach to enhance pneumonia detection accuracy using medical imaging data. The conference was organized by Shaheed Sukhdev College of Business Studies, University of Delhi, in collaboration with NIT Patna and the University of Valladolid, Spain.',
    //     tools: ['CNN', 'Random Forest', 'Python', 'Medical Imaging', 'Deep Learning'],
    //     code: '',
    //     role: 'Researcher / Co-Author',
    //     demo: '',
    //     github: 'https://drive.google.com/file/d/1XJjlWq6_fE5E8ra58KoQbukHk7IVzwc8/view?usp=sharing' ,
    // },
    // {
    //     id: 5,
    //     name: 'Discord-Clone',
    //     description: "I created a modern, responsive clone of Discord using React.js and Tailwind CSS. The interface simulates key features such as server organization, text channels, and Google Authentication using Firebase. While the real-time chat is currently UI-based, it sets the stage for future integration with Firebase Firestore or Socket.io for messaging. The project mimics the core design of Discord, providing a clean and interactive experience.",
    //     tools: ['React.js', 'Tailwind CSS', 'Firebase', 'Vercel'],
    //     code: 'https://github.com/AmarjeetJyotis/lec-12---Discord-Clone',
    //     demo: 'https://lec-12-discord-clone.vercel.app/',
    //     role: 'Frontend Developer',
    //     github: 'https://github.com/AmarjeetJyotis/lec-12---Discord-Clone.git' ,
    // },
    // {
    //     id: 6,
    //     name: 'Tippy - Tip Calculator App',
    //     description: "Tippy is a clean and intuitive Android app that lets users calculate tips and total bills easily. Developed using Kotlin and XML in Android Studio, it features a responsive UI, a tip percentage slider (SeekBar), and real-time updates of tip and total amounts. It also provides feedback like 'Poor', 'Good', or 'Great' based on the tip percentage to enhance the user experience.",
    //     tools: ['Kotlin', 'XML', 'Android Studio'],
    //     role: 'Android Developer',
    //     code: 'https://github.com/AmarjeetJyotis/Android-Studio-Project-4-Android-Tippy-App',
    //     demo: '', // No hosted demo for mobile app; consider adding a YouTube video or GIF if available
    //     github: 'https://github.com/AmarjeetJyotis/Android-Studio-Project-4-Android-Tippy-App.git' ,
    // },
    // {
    //     id: 7,
    //     name: 'Tic-Tac-Toe Game',
    //     description: "A classic 2-player Tic-Tac-Toe game built with HTML, CSS, and JavaScript. It features a clean UI, real-time turn switching, win/draw detection, and a responsive grid layout. Players can alternate turns and restart the game with a single click using the 'New Game' button.",
    //     tools: ['HTML', 'CSS', 'JavaScript'],
    //     role: 'Frontend Developer',
    //     code: 'https://github.com/AmarjeetJyotis/lec-17---Tic-Tac-Toe',
    //     demo: 'https://lec-17-tic-tac-toe.vercel.app/',
    //     github: 'https://github.com/AmarjeetJyotis/lec-17---Tic-Tac-Toe.git' ,
    // },
    // {
    //     id: 8,
    //     name: 'Face-Recognition-Attendance-System',
    //     description: 'I developed a face recognition-based attendance tracking system using OpenCV, Tkinter, and SQLite. The system captures and recognizes student faces in real-time and automatically logs their attendance into a CSV file and database. It includes modules for student registration, face dataset generation, model training, and secure admin login. The app features a dashboard for managing student records and attendance, using Haar cascade classifiers for face detection and LBPH for recognition.',
    //     tools: ['Python', 'OpenCV', 'Tkinter', 'SQLite', 'Pandas', 'Haarcascade', 'LBPH', 'CSV'],
    //     role: 'Full Stack Developer',
    //     code: 'https://github.com/AmarjeetJyotis/-Face-Recognition-Attendance-System',
    //     demo: '',
    //     github: 'https://github.com/AmarjeetJyotis/-Face-Recognition-Attendance-System.git' ,
    // },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },