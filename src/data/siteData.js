/* ==========================================================================
   SITE DATA — this is the ONE file you edit to personalise the portfolio.
   Anything that looks like a placeholder (e.g. "your-username", "XXXXX",
   "example.com", or text starting with "[Edit]" / "[Add]") is shown on the
   site with a "Placeholder" marker until you replace it.
   ========================================================================== */

// Returns true when a value is still a placeholder (so the site can flag it)
export const isPlaceholder = (value) =>
  !value || /your[-._ ]|example\.com|XXXX|REPLACE/i.test(value)

// Text that begins with [Edit] or [Add] is shown in a dashed "edit me" style
export const isEditText = (text) => /^\[(Edit|Add)/i.test(text)

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const profile = {
  name: 'Jyothikala V',
  initials: 'JV',
  title: 'Java Developer | Aspiring Full Stack Developer',
  intro:
    'Java developer with 9 months of professional experience building web applications with Servlets, JDBC and MySQL, plus MERN-stack projects in React, Node.js and MongoDB. I’m looking for a Java or Junior Full Stack role in Coimbatore or Chennai.',
  location: 'Coimbatore, Tamil Nadu, India',
  openTo: 'Open to roles in Coimbatore & Chennai',
  // Download name for the resume PDF
  resumeDownloadName: 'Jyothikala_V_Resume.pdf',
}

/* --- CONTACT DETAILS (from your resume) --- */
export const contact = {
  email: 'jothikalavenkatachalam@gmail.com',
  phone: '+91 79755 88716', // set to '' to hide the phone row
  github: 'https://github.com/JYOTHIKALA123',
  linkedin: 'https://www.linkedin.com/in/jyothikala-v-221a43309/',
}

/* --- ABOUT --- */
export const about = {
  paragraphs: [
    'I completed my MSc in Computer Science on 17 March 2025 with 87.57%, after a BCA (2020–2023). Along the way I built a solid base in programming, databases and web technologies, with Java at the centre.',
    'From September 2025 to June 2026 I worked as a Junior Java Developer at Sri Software Solutions Pvt. Ltd. in Coimbatore. I built and maintained Java web applications with Servlets, JDBC and MySQL following MVC, developed CRUD modules, and worked in an Agile team alongside senior developers.',
    'Outside of work I build full-stack projects with the MERN stack, such as BookBazaar, an online book store deployed on Vercel. I enjoy practical applications with clear back-end logic, reliable data handling and a clean, usable front end.',
  ],
  highlights: [
    { label: 'Education', value: 'MSc Computer Science', detail: 'Completed March 2025 · 87.57%', icon: 'GraduationCap' },
    { label: 'Experience', value: 'Junior Java Developer', detail: 'Sep 2025 – Jun 2026 · 9 months', icon: 'Briefcase' },
    { label: 'Looking for', value: 'Java / Backend / Full Stack', detail: 'Coimbatore or Chennai', icon: 'Target' },
  ],
}

/* --- SKILLS (from your resume) --- */
export const skillGroups = [
  { title: 'Backend', icon: 'Server', skills: ['Java', 'Servlets', 'JDBC', 'Node.js', 'Express.js'] },
  { title: 'Frontend', icon: 'Layout', skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'AJAX', 'React.js'] },
  { title: 'Database', icon: 'Database', skills: ['MySQL', 'SQL', 'MongoDB'] },
  {
    title: 'Tools & Deployment',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'Maven', 'Eclipse', 'VS Code', 'SQLyog', 'MySQL Workbench', 'MongoDB Compass', 'Vercel', 'GitHub Pages'],
  },
]

/* --- PROJECTS (from your resume) ---
   status: 'real' | 'placeholder' (placeholder cards show a dashed border and a badge).
   github / demo: leave '' until you have the link; the button then explains what to add. */
export const projects = [
  {
    id: 'bookbazaar',
    status: 'real',
    title: 'BookBazaar – Online Book Store',
    role: 'Full Stack Developer (MERN Stack)',
    description:
      'A complete online bookstore with user registration, login, cart and order system. Admins can add, edit or delete books and manage customer orders. The dashboard is secured with JWT and the UI is responsive across devices.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'CSS', 'Axios'],
    github: '', // TODO: add the repository link (the button appears automatically)
    demo: 'https://online-book-store-ten-lyart.vercel.app/',
  },
  {
    id: 'smart-college-food',
    status: 'real',
    title: 'Smart College Food Management System',
    role: 'Full Stack Developer (MERN Stack)',
    description:
      'Enables a food request and approval flow among students, departments, the office and the mess, with role-based login, submission, review and status tracking.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: '', // TODO
    demo: '',
  },
  {
    id: 'skfp-shop',
    status: 'real',
    title: 'SKFP Shop – Food Ordering',
    role: 'Java Web Developer',
    description:
      'An e-commerce web app with dynamic product display and order tracking, plus an admin panel to manage and review orders.',
    tags: ['Java', 'Servlets', 'JDBC', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: '', // TODO
    demo: '',
  },
]

/* --- EXPERIENCE (from your resume) --- */
export const experience = [
  {
    role: 'Junior Java Developer',
    company: 'Sri Software Solutions Pvt. Ltd.',
    location: 'Coimbatore, India',
    period: 'September 2025 – June 2026 (9 months)',
    technologies: ['Java', 'Servlets', 'JDBC', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'AJAX', 'jQuery', 'Git', 'SQLyog'],
    responsibilities: [
      'Developed and maintained Java-based web applications using Servlets and JDBC following the MVC architecture.',
      'Designed responsive, user-friendly web interfaces using HTML5, CSS3, Bootstrap, JavaScript and jQuery.',
      'Implemented AJAX for asynchronous data loading, improving application responsiveness and user experience.',
      'Developed CRUD operations for employee and client management modules.',
      'Integrated MySQL databases using JDBC and managed database operations through SQLyog.',
      'Wrote SQL queries, joins and stored procedures, and optimised database operations for better performance.',
      'Identified and resolved application bugs while improving system performance and reliability.',
      'Used Git for version control and collaborated with team members on source code management.',
      'Took part in requirement analysis, testing, debugging, deployment and maintenance of web applications.',
      'Worked closely with senior developers, following Agile practices to deliver client requirements on time.',
    ],
  },
]

/* --- EDUCATION --- */
export const education = [
  {
    degree: 'MSc Computer Science',
    institution: 'Kaamadhenu Arts & Science College, Sathyamangalam, Erode',
    period: '2023 – 2025 · Completed 17 March 2025',
    detail: 'Score: 87.57%',
  },
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Kaamadhenu Arts & Science College, Sathyamangalam, Erode', // not on your resume: add it, or delete this card
    period: '2020 – 2023',
    detail: 'Score: 87.25%',
  },
]

/* --- CERTIFICATIONS (from your resume) --- */
export const certifications = [
  { title: 'Full Stack Development Internship', issuer: 'NoviTech R&D Pvt Ltd', date: '27 May – 25 June 2024' },
  { title: '30 Days MasterClass in Full Stack Development', issuer: 'NoviTech R&D Pvt Ltd', date: '' },
  { title: 'Innovation Ambassador (IA) – Foundation Level', issuer: 'Ministry of Education', date: '' },
]
