/**
 * data/portfolioData.js
 * --------------------------------------------------------------------------
 * To update the site, edit this file - no need to touch any component.
 * 
 * Structure:
 *   OWNER      - personal info used in the About section and nav
 *   PROJECTS   - array of project objects, rendered in order
 *   NAV_LABELS - ordered labels matching [Hero, ...Projects, About]
 */

/* --------------------------------------------------------------------------
   Personal Info
   -------------------------------------------------------------------------- */
export const OWNER = {
    firstName:  "Jeric",
    middleName: "Ryan",
    lastName:   "Locquiao",
    initials:   "JRL",

    tagline: 
        "CS & Software Engineering @ UW Bothell — building things at every layer " +
        "of the stack, from ARM assembly to full-stack web platforms.",

    bio: 
        "CS & Software Engineering student at UW Bothell with roots at Mt. San Jacinto " +
        "College. I write code at every level of abstraction — from buddy allocators in " +
        "ARM assembly to Netflix-inspired web platforms. I care about systems that are " +
        "fast, correct, and actually enjoyable to use.",

    location:  "Lynnwood, WA",
    email:     "ryanlocquiao16@gmail.com",
    github:    "https://github.com/ryanlocquiao",
    linkedin:  "https://www.linkedin.com/in/jericryanlocquiao/",

    resumeUrl: "/RyanLocquiao_SWE_resume_v2_1", /** Place path to resume PDF */

    details: [
        { label: "Based In",  value: "Lynnwood, WA" },
        { label: "Education", value: "B.S. CS & SWE, UWB, A.S. Mathematics & Physics, MSJC" },
        { label: "Languages", value: "C++, C, ARM Asm, JS, TS, Python, SQL" },
        { label: "Open To",   value: "Internships · Collaborations" },
        { label: "Tools",     value: "React, Node, Flask, MySQL, Azure, Git, Linux" },
        { label: "Contact",   value: "ryanlocquiao16@gmail.com" },
    ],
};

/* --------------------------------------------------------------------------
   Projects
   --------------------------------------------------------------------------
   Each project maps to one full-screen panel in the portfolio

   Fields:
     tag        - Category label shown in the blinking badge
     title      - Displayed as a large heading
     year       - Shown as metadata
     bullets    - Array of strings, rendered as description
     tech       - Array of technology chips shown beneath the description
     bg         - Background image for the panel
     link       - GitHub or live URL for the CTA button
     cta        - Label text for the CTA button
     progress   - 0-100, controls the red progress bar at the top of the panel
   -------------------------------------------------------------------------- */
export const PROJECTS = [
    {
        tag:        "Full-Stack · Personal Project",
        title:      "MangaList",
        year:       "2026",
        bullets: [
            "Designed and implemented a high-performance manga discovery and reading platform " +
                "using Node.js, Express, and the MangaDex API, featuring a custom \"Theater Mode\" reader " +
                "and a Python-based backend built with Flask.",
            "Developed a state-managed reading engine supporting dual-page layouts and RTL navigation, " +
                "using Local Storage and Firebase for cross-device progress synchronisation.",
            "Engineered a responsive, Netflix-inspired UI with CSS3 and JavaScript — dynamic modal " +
                "layouts, custom scrollbars, and a scrubbing progress bar for seamless page navigation.",
        ],
        tech:       ["Node.js", "Express", "Flask", "Python", "MangaDex API", "Firebase", "CSS3", "JavaScript"],
        bg:         "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1600&q=80", /** Placeholder Image */
        link:       "https://github.com/ryanlocquiao",
        cta:        "View on GitHub",
        progress:   33,
    },

    {
        tag:        "Back-End · Database Engineering",
        title:      "AutoBase\nSolutions",
        year:       "2025",
        bullets: [
            "Designed and implemented a comprehensive relational database for an automotive dealership " +
                "using MySQL and Azure, supporting vehicle inventory, sales records, and maintenance workflows.",
            "Developed a fully normalised schema with 9+ interconnected tables, enforcing referential " +
                "integrity through complex foreign key constraints and domain validations.",
            "Built a web-based interface using Flask, HTML, and CSS to support real-time inventory " +
                "queries and customer service history access.",
        ],
        tech:       ["MySQL", "Azure", "Flask", "HTML", "CSS", "Database Design", "ER Modeling"],
        bg:         "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&q=80", /** Placeholder Image */
        link:       "https://github.com/ryanlocquiao",
        cta:        "View on GitHub",
        progress:   66,
    },

    {
        tag:        "Systems · Low-Level Engineering",
        title:      "ARM Kernel\n& Allocator",
        year:       "2025",
        bullets: [
            "Implemented a complete system call mechanism in ARM Thumb-2 assembly on a TM4C129 " +
                "microcontroller using software interrupts (SVC) and a custom kernel jump table.",
            "Developed user-level system calls integrating with the kernel, and designed a recursive " +
                "buddy memory allocator with block splitting and coalescing logic.",
            "Built a low-level timer and signal handling infrastructure from scratch.",
        ],
        tech:       ["ARM Thumb-2", "C", "Assembly", "Buddy Allocator", "TM4C129", "SVC / Interrupts"],
        bg:         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80", /** Placeholder Image */
        link:       "https://github.com/ryanlocquiao",
        cta:        "View on GitHub",
        progress:   100,
    },
];

/* --------------------------------------------------------------------------
   Nav Labels

   Must be in sync with panel order
   -------------------------------------------------------------------------- */
export const NAV_LABELS = ["Home", "MangaList", "AutoBase", "ARM Kernel", "About"];