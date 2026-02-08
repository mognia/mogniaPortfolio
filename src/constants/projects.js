const projects = [
    {
        title: "OfferLog",
        value: "Production-grade personal CRM for job hunting with strict lifecycle rules and dashboard-driven workflows.",
        techTags: [
            "Next.js App Router",
            "TypeScript",
            "Prisma",
            "Neon Postgres",
            "HttpOnly Cookies",
            "Session Tokens",
        ],
        img:'/projects/offerLog.webp',
        githubUrl :'https://github.com/mognia/offerlog',
        liveDemoUrl: "https://mognia.dev/offerlog"
    },
    {
        title: "JD Roaster",
        value: "Job description linter that runs deterministic checks and returns audit-style receipts with highlighted findings.",
        techTags: [
            "Next.js",
            "TypeScript",
            "Rule Engine",
            "Deterministic Linting",
            "Report UI",
            "Highlight Receipts",
        ],
        img:'/projects/jdRoaster.webp',
        githubUrl :'https://github.com/mognia/jdroaster',
        liveDemoUrl: "https://mognia.dev/jdroaster"
    },
    {
        title: "Mrello",
        value: "Mrello is a full-stack task management tool inspired by Trello.\n" +
            "It’s built using Next.js, Supabase, and Clerk, offering a complete real-time drag-and-drop workflow for managing boards, columns, and tasks.\n",
        techTags: [
            "Next.js",
            "Supabase",
            "TailwindCSS",
            "Clerk",
            "@dnd-kit",
        ],
        img:'/projects/mrello.webp',
        githubUrl :'https://github.com/mognia/mrello',
        liveDemoUrl: "https://mrello-i8u5.vercel.app"
    },
    {
        title: "Signalio",
        value: "Stock Market app built with Next.js, Shadcn, Better Auth. Track prices, set alerts, explore insights, manage watchlist, and automate workflows for notifications and analytics.",
        techTags: [
            "Next.js",
            "Shadcn",
            "Better Auth",
        ],
        img:'/projects/stocks.webp',
        githubUrl :'https://github.com/mognia/stock-app',
        liveDemoUrl: "https://stock-app-murex.vercel.app/"
    },
    {
        title: "Mognia Portfolio",
        value: " A modern and animated portfolio built with React.js and Vite, using styled components.",
        techTags: [
            "React.js",
            "TailwindCSS",
            "Styled components",
        ],
        img:'/projects/mogniaPortfolio.webp',
        githubUrl :'https://github.com/mognia/mognia-portfolio',
        liveDemoUrl: "https://mognia.dev"
    },
    {
        title: "SOPIX",
        value: "Headless SOP execution backend for multi-tenant teams with immutable publish flows and run-step reporting exports.",
        techTags: [
            "Multi-tenant Auth",
            "RBAC",
            "SOP Versioning",
            "Runs/RunSteps",
            "JSON Reports",
            "Excel Export",
        ],
        githubUrl :'https://github.com/mognia/sopix',
    },


];

export default projects;
