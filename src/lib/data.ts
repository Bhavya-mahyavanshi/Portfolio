export const PROFILE = {
  name: "Bhavya Mahyavanshi",
  title: "Junior Backend Developer",
  tagline: "Artist at the core, backend developer by trade.",
  email: "bhavyamahyavanshi1534@gmail.com",
  phone: "+1 (647) 684-3862",
  location: "Scarborough, ON, Canada",
  github: "https://github.com/Bhavya-mahyavanshi",
  linkedin: "https://linkedin.com/in/bhavyamahyavanshi",
  bio: "I believe backend engineering is an art form. Every API endpoint is a brushstroke, every database schema a chapter, every system architecture a continent waiting to be explored. Currently studying Computer Programming at Seneca Polytechnic while building real-world systems.",
  bioExtra: "When I'm not writing code, I'm painting, reading tech books, or mentally mapping out the architecture of the next thing I want to build. I thrive at the intersection of creativity and logic.",
};

export const PROJECTS = [
  {
    id: "task-api",
    title: "Task Manager REST API",
    subtitle: "Node.js · MongoDB · JWT",
    theme: "painting",
    color: "#C44B2B",
    emoji: "🎨",
    status: "Complete",
    year: "2024",
    description:
      "A full-featured RESTful API for task management. Implements JWT-based authentication, input validation middleware, and full CRUD endpoints following industry-standard practices.",
    details: [
      "JWT-based user authentication & refresh tokens",
      "Full CRUD with Express.js routing",
      "MongoDB Atlas cloud database",
      "Validated with Postman collections",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Postman"],
    github: "https://github.com/Bhavya-mahyavanshi",
  },
  {
    id: "grade-system",
    title: "Student Grade Management",
    subtitle: "Java · SQLite · Swing",
    theme: "reading",
    color: "#4A6B8A",
    emoji: "📖",
    status: "Complete",
    year: "2025",
    description:
      "A desktop application for managing student records, grades, and GPA calculations. Built with Java Swing for the UI and JDBC with SQLite for persistent storage.",
    details: [
      "Java Swing GUI with modular OOP design",
      "JDBC + SQLite with full CRUD operations",
      "Search, filter, and CSV export",
      "GPA calculator with grade analytics",
    ],
    tech: ["Java", "Java Swing", "JDBC", "SQLite", "OOP"],
    github: "https://github.com/Bhavya-mahyavanshi",
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker",
    subtitle: "Python · SQLite · Matplotlib",
    theme: "reading",
    color: "#B8953A",
    emoji: "📊",
    status: "Complete",
    year: "2025",
    description:
      "A CLI-based expense tracker using object-oriented Python. Stores transactions in SQLite with budget alerts, category summaries, and data visualized through Matplotlib charts.",
    details: [
      "CLI interface with rich user prompts",
      "SQLite transactions with categories",
      "Budget threshold alerts",
      "Monthly summary charts via Matplotlib",
    ],
    tech: ["Python", "SQLite", "Matplotlib", "OOP", "CLI"],
    github: "https://github.com/Bhavya-mahyavanshi",
  },
  {
    id: "dsa-repo",
    title: "DSA Algorithm Repository",
    subtitle: "Java · C++ · GitHub",
    theme: "travelling",
    color: "#4A6741",
    emoji: "🗺",
    status: "Active",
    year: "2025",
    description:
      "An open-source repository of 30+ data structures and algorithms in Java and C++, with full complexity analysis docs. A learning roadmap for developers preparing for technical interviews.",
    details: [
      "30+ algorithms in Java & C++",
      "Big-O time & space complexity docs",
      "Structured learning roadmaps",
      "Interview preparation guides",
    ],
    tech: ["Java", "C++", "Algorithms", "Data Structures", "GitHub"],
    github: "https://github.com/Bhavya-mahyavanshi",
  },
];

export const SKILLS = {
  foundation: {
    label: "Volume 1 — The Foundation",
    color: "#C44B2B",
    icon: "📖",
    items: [
      { name: "Java & OOP", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "C / C++", level: 68 },
      { name: "SQL", level: 78 },
    ],
  },
  flow: {
    label: "Volume 2 — The Flow",
    color: "#4A6B8A",
    icon: "📘",
    items: [
      { name: "Node.js & Express", level: 85 },
      { name: "RESTful API Design", level: 88 },
      { name: "JWT Authentication", level: 80 },
      { name: "JDBC", level: 75 },
    ],
  },
  persistence: {
    label: "Volume 3 — The Persistence",
    color: "#B8953A",
    icon: "📙",
    items: [
      { name: "MongoDB & NoSQL", level: 82 },
      { name: "MySQL / PostgreSQL", level: 78 },
      { name: "SQLite", level: 82 },
      { name: "Database Design", level: 75 },
    ],
  },
  tools: {
    label: "The Toolkit",
    color: "#4A6741",
    icon: "🛠",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Linux / CLI", level: 75 },
      { name: "Postman", level: 85 },
      { name: "VS Code / IntelliJ", level: 90 },
    ],
  },
};

export const HOBBIES = [
  {
    id: "painting",
    title: "Painting",
    subtitle: "Watercolour & Acrylic",
    color: "#C44B2B",
    icon: "🎨",
    description:
      "Before I wrote my first line of code, I was mixing colours on a canvas. Painting taught me to see systems as compositions — where balance, contrast, and flow matter just as much in UX as in art. My work gravitates toward abstract landscapes and colour-field experiments.",
    connection:
      "When I architect an API, I think of it like a painting — every endpoint a layer, the schema the underpainting, the data flow the brushstroke.",
  },
  {
    id: "reading",
    title: "Reading",
    subtitle: "Technical & Fiction",
    color: "#B8953A",
    icon: "📚",
    description:
      "I read both technical books and science fiction. Books like Clean Code, The Pragmatic Programmer, and System Design Interview shape how I write software. Novels like Dune and The Martian fuel my love for complex systems and problem-solving under constraints.",
    connection:
      "Reading taught me that every system has a narrative. Good code, like good prose, tells a story that the next reader can follow.",
  },
  {
    id: "travelling",
    title: "Exploring Architecture",
    subtitle: "System & Urban Design",
    color: "#4A6741",
    icon: "🗺",
    description:
      "I'm fascinated by how complex systems — cities, microservices, supply chains — organise themselves. I love studying distributed system architectures the way a traveller studies a new city: starting with the main arteries, then exploring the hidden alleyways.",
    connection:
      "My interest in architecture directly shaped my focus on backend systems. Both are about designing structures that are functional, resilient, and elegant under load.",
  },
  {
    id: "music",
    title: "Music",
    subtitle: "Listening & Rhythm",
    color: "#4A6B8A",
    icon: "🎵",
    description:
      "Music is the background to every coding session. I gravitate toward lo-fi, jazz, and ambient electronica — genres with structure and improvisation coexisting. There's something deeply satisfying about a well-timed chord change, just like a well-optimised query.",
    connection:
      "Writing algorithms feels like composing — you start with a motif (the problem), develop it (the logic), and resolve it (the output). Both require rhythm and restraint.",
  },
];

export const EDUCATION = [
  {
    school: "Seneca Polytechnic",
    program: "Diploma — Computer Programming",
    period: "09/2024 – 04/2026",
    location: "Scarborough, ON",
    gpa: "Active",
    highlights: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Database Design",
      "Web Development",
      "Software Engineering Principles",
    ],
  },
  {
    school: "Sincérité English Medium School",
    program: "High School Certificate — Mathematics",
    period: "06/2021 – 03/2022",
    location: "India",
    gpa: "Completed",
    highlights: ["Advanced Mathematics", "Physics", "Computer Science Fundamentals"],
  },
];

export const EXPERIENCE = [
  {
    role: "Produce Clerk",
    company: "No Frills",
    period: "06/2025 – Present",
    location: "Toronto, ON",
    points: [
      "Maintained inventory accuracy in a fast-paced environment",
      "Developed time management and attention to detail",
      "Collaborated with team members on daily workflows",
    ],
  },
];
