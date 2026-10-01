/**
 * ========================================================================
 * PORTFOLIO DATA - SINGLE SOURCE OF TRUTH (FUTURE-READY)
 * ========================================================================
 * Whenever your skills, experience, projects, or certifications change:
 * Simply edit this file! All UI components, Bento cards, and the AI Assistant
 * dynamically adapt without touching any React code or CSS.
 * ========================================================================
 */

export const portfolioData = {
  personal: {
    name: "Bhaveshkumar Rathod",
    displayName: "Bhavesh Rathod",
    role: "AI Engineer",
    headline: "AI Engineer | Agentic AI • Multi-Agent Systems • RAG • LLM Applications | Senior Software Engineer | Python | AWS & GCP",
    company: "Talentica Software",
    experienceYears: "5+",
    location: "Ahmedabad, Gujarat, India (Open to Remote: India & Worldwide)",
    availability: "Open to Remote Opportunities (India & Worldwide)",
    email: "bhavesh3194@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhaveshkumar-rathod/",
    linkedinFollowers: "5K+ LinkedIn Family",
    github: "https://github.com/br-bit3194",
    resumeUrl: "/Bhavesh_Rathod_GenAI_Engineer_Resume.pdf",
    avatarUrl: "/photo.jpeg",
    featuredCert: "Google Cloud Certified Generative AI Leader",
    summary: "AI Engineer and Senior Software Engineer with 5+ years of experience building scalable backend systems and production-grade AI applications. Core focus on Generative AI, Retrieval-Augmented Generation (RAG), and Agentic AI systems (A2A, MCP), delivering client-facing AI solutions with Google Gemini, Vertex AI, BigQuery, AWS Bedrock, and FastAPI.",
    
    // 2-Second Recruiter Metrics (5+ Years Industry Exp)
    metrics: [
      { metric: "5+ Years", label: "Industry Experience", desc: "Production GenAI, Agentic AI & distributed Python systems" },
      { metric: "94%", label: "API Latency Cut", desc: "Optimized Django API from 1,200 records/min to 4 seconds" },
      { metric: "67%", label: "Agent Speedup", desc: "Cut Multi-Agent latency from 3m to 1m via OpenTelemetry & Langfuse" },
      { metric: "5K+", label: "LinkedIn Family", desc: "Active network of 5,000+ AI engineers, founders & tech leaders" }
    ],

    coreBadges: [
      "Google Cloud Certified GenAI Leader",
      "Multi-Agent AI (A2A & MCP)",
      "Google Vertex AI & Gemini",
      "Amazon Bedrock",
      "RAG & LLM Orchestration",
      "FastAPI & Python",
      "GCP & AWS Cloud"
    ]
  },

  skills: {
    categories: [
      {
        name: "Generative AI & Agentic Systems",
        color: "#4285F4", // Google Blue
        icon: "Bot",
        skills: [
          { name: "Agentic AI & Multi-Agent Systems (A2A)", level: "Production", priority: true },
          { name: "Model Context Protocol (MCP)", level: "Production", priority: true },
          { name: "Retrieval-Augmented Generation (RAG)", level: "Expert", priority: true },
          { name: "Google Vertex AI & Google Gemini", level: "Certified", priority: true },
          { name: "Amazon Bedrock", level: "Production", priority: true },
          { name: "Google ADK & AI Guardrails", level: "Production", priority: true },
          { name: "Langfuse & LLM Observability", level: "Production", priority: true },
          { name: "Prompt Engineering & Streamlit", level: "Expert", priority: true },
        ]
      },
      {
        name: "Backend Engineering & Architecture",
        color: "#34A853", // Google Green
        icon: "Server",
        skills: [
          { name: "Python", level: "Top 5% Global", priority: true },
          { name: "FastAPI", level: "Core", priority: true },
          { name: "Django & Django REST Framework", level: "Core", priority: true },
          { name: "Microservices & Distributed Systems", level: "Enterprise", priority: true },
          { name: "Multithreading & Concurrency", level: "Optimized", priority: true },
          { name: "Asymmetric Cryptography (RSA)", level: "Security", priority: false },
          { name: "Flask", level: "Proficient", priority: false },
        ]
      },
      {
        name: "Cloud Platforms, DevOps & Telemetry",
        color: "#FBBC05", // Google Yellow
        icon: "Cloud",
        skills: [
          { name: "Google Cloud Platform (Pub/Sub, BigQuery, GCS)", level: "Certified Leader", priority: true },
          { name: "Amazon Web Services (Lambda, Bedrock, S3, CloudWatch)", level: "Production", priority: true },
          { name: "OpenTelemetry Trace Analysis", level: "Observability", priority: true },
          { name: "Docker Containerization", level: "DevOps", priority: false },
          { name: "Linux / Unix & Bash Automation", level: "15+ Servers", priority: false },
          { name: "GitHub & CI/CD", level: "Core", priority: false }
        ]
      },
      {
        name: "Databases & Data Engineering",
        color: "#EA4335", // Google Red
        icon: "Database",
        skills: [
          { name: "Google BigQuery", level: "Data Warehouse", priority: true },
          { name: "Oracle (Partitioning & Indexing)", level: "FinTech Scale", priority: true },
          { name: "PostgreSQL & MySQL", level: "Relational", priority: true },
          { name: "Python ELT Pipelines", level: "Automated", priority: true },
          { name: "Pandas & Data Analysis", level: "Analytics", priority: true }
        ]
      }
    ]
  },

  projects: [
    {
      id: "maestro",
      title: "MAESTRO: Autonomous Multi-Agent IT Operations Platform",
      subtitle: "SuperHacks 2025 Hackathon powered by AWS",
      award: "🏆 Special Jury Mention Award Winner",
      tag: "GenAI & Agentic Systems",
      youtubeUrl: "https://youtu.be/eP-s9D_WXeY?si=5PPzf2HBK4fnKeXf",
      videoId: "eP-s9D_WXeY",
      description: "Built MAESTRO, an AI-powered multi-agent IT operations platform leveraging AWS and Amazon Bedrock for intelligent orchestration, proactive issue resolution, and autonomous task execution, transforming IT management into a predictive and highly efficient system.",
      highlights: [
        "Won 'Special Jury Mention Award' at SuperHacks 2025 powered by AWS",
        "Autonomous multi-agent orchestration powered by Amazon Bedrock foundation models",
        "Real-time log ingestion, root cause correlation, and autonomous issue remediation",
        "Sub-second event routing with FastAPI and event-driven architecture"
      ],
      techStack: ["Amazon Bedrock", "FastAPI", "Python", "Multi-Agent Orchestration", "RAG"]
    },
    {
      id: "makegood",
      title: "GenAI Makegood Recommendation Engine",
      subtitle: "Talentica Software",
      award: "⚡ 70% Manual Effort Reduction",
      tag: "Vertex AI & Google Cloud",
      description: "Led the development of a GenAI-powered Makegood recommendation system using Vertex AI, Google Gemini, and Google ADK. Architected event-driven GCP workflows with Pub/Sub, leveraging GCS and BigQuery for data processing and storage, and implemented AI Guardrails for Responsible AI.",
      highlights: [
        "Automated ad spot recommendations, reducing manual effort by 70%",
        "Event-driven GCP workflows with Pub/Sub, Google Cloud Storage, and BigQuery",
        "Enforced Responsible AI with custom AI Guardrails and schema validation",
        "Powered by Google Gemini 1.5 and Google ADK agent framework"
      ],
      techStack: ["Vertex AI", "Google Gemini", "Google ADK", "GCP Pub/Sub", "BigQuery", "GCS", "AI Guardrails", "Python"]
    },
    {
      id: "agent-collab",
      title: "Production Multi-Agent Platform (A2A & MCP)",
      subtitle: "Talentica Software",
      award: "🚀 67% Response Time Reduction",
      tag: "Agentic AI & Architecture",
      description: "Architected and delivered a production-grade Multi-Agent AI platform leveraging Agent-to-Agent (A2A) communication and Model Context Protocol (MCP) for tool calling, with LLM orchestration, RAG, and FastAPI for autonomous agent collaboration and intelligent task routing.",
      highlights: [
        "Autonomous agent collaboration via Agent-to-Agent (A2A) protocol",
        "Dynamic tool discovery & invocation using Model Context Protocol (MCP)",
        "OpenTelemetry and Langfuse trace observability reducing response time from 3m to 1m (67%)",
        "High-performance async FastAPI backend with pluggable LLMs"
      ],
      techStack: ["Multi-Agent A2A", "MCP Protocol", "FastAPI", "RAG", "OpenTelemetry", "Langfuse", "Python"]
    },
    {
      id: "gms-sports",
      title: "Game Management System (GMS) & Razorpay Engine",
      subtitle: "Talentica Software",
      award: "🌟 90,000+ Athletes & 7 National Championships",
      tag: "High-Scale Backend",
      description: "Developed and enhanced key solutions for the Game Management System (GMS), including Razorpay payment gateway integration, supporting seven national championships across India and serving over 90,000 athletes.",
      highlights: [
        "Revamped critical backend processes, reducing execution times from 30-40 minutes to milliseconds",
        "Migrated media storage from local EC2 instances to Amazon S3 maintaining 100% backward compatibility",
        "Automated refund-failure monitoring using AWS CloudWatch and Lambda with real-time Slack alerts",
        "Honored with company 'PAT on the Back' award for system stability and UX"
      ],
      techStack: ["Python", "Django", "Razorpay", "AWS S3", "AWS Lambda", "CloudWatch", "PostgreSQL"]
    },
    {
      id: "banking-dedup",
      title: "Banking Customer Deduplication Engine",
      subtitle: "Online PSB Loans",
      award: "🏦 14+ Indian Banks Scaled",
      tag: "FinTech & Data Architecture",
      description: "Developed Django API that served 14+ Indian Banks to find duplicate customers using their details. Designed Oracle database tables with advanced partitioning and indexing methods for high-speed queries.",
      highlights: [
        "High-throughput Django API serving 14+ Indian Banks",
        "Partitioned Oracle database design optimizing analytical lookup latency",
        "Automated CAM-pdf financial report scraping and Python ELT pipelines (saving 2 hours daily)",
        "Multithreading implementation reducing response time by 25% with RSA asymmetric encryption"
      ],
      techStack: ["Python", "Django", "Oracle DB (Partitioning)", "Multithreading", "ELT Pipelines", "RSA Cryptography"]
    }
  ],

  experience: [
    {
      id: "talentica-sr",
      role: "Senior Software Engineer",
      company: "Talentica Software",
      period: "April 2026 - Present",
      location: "Pune, India",
      badge: "Current Role",
      highlights: [
        "Architected and delivered a production-grade Multi-Agent AI platform leveraging A2A for agent-to-agent communication and MCP for tool calling.",
        "Engineered autonomous agent collaboration, intelligent task routing, RAG orchestration, and FastAPI microservices for enterprise workflow automation."
      ],
      tags: ["Multi-Agent AI (A2A)", "Model Context Protocol (MCP)", "FastAPI", "RAG", "LLM Orchestration", "Python"]
    },
    {
      id: "talentica-se2",
      role: "Software Engineer II",
      company: "Talentica Software",
      period: "January 2024 - March 2026 (2 yrs 3 mos)",
      location: "Pune, India",
      badge: "Promoted to Senior",
      highlights: [
        "Led the development of a GenAI-powered Makegood recommendation system using Vertex AI, Google Gemini, and Google ADK, architecting event-driven GCP workflows with Pub/Sub, GCS, and BigQuery; implemented AI Guardrails for Responsible AI, automated ad spot recommendations, and reduced manual effort by 70%.",
        "Implemented OpenTelemetry and Langfuse-based observability for agent workflows, analyzing traces to identify performance bottlenecks and reducing agent response time from 3 minutes to 1 minute (67%).",
        "Optimized a Django API, improving processing from 1,200 records per minute to 4 seconds and achieving a 94% performance improvement through advanced data-handling techniques.",
        "Developed and enhanced key solutions for the Game Management System (GMS), including Razorpay payment gateway integration, supporting 7 national championships across India and serving over 90,000 athletes.",
        "Revamped critical backend processes, reducing execution times from 30-40 minutes to milliseconds and significantly improving application responsiveness.",
        "Led migration of media storage from local EC2 instances to Amazon S3 with 100% backward compatibility, and automated refund-failure monitoring using AWS CloudWatch and Lambda with real-time Slack alerts."
      ],
      tags: ["Vertex AI", "Google Gemini", "Google ADK", "GCP Pub/Sub", "BigQuery", "OpenTelemetry", "Langfuse", "AWS Lambda", "Razorpay", "Django"]
    },
    {
      id: "online-psb",
      role: "Python Developer",
      company: "Online PSB Loans",
      period: "July 2022 - December 2023 (1 yr 6 mos)",
      location: "Ahmedabad, Gujarat, India",
      badge: "FinTech Scale",
      highlights: [
        "Developed Django API that served 14+ Indian Banks to find duplicate customers using their details.",
        "Designed Oracle database tables with advanced methods of partitioning & indexing such that the query is optimized and faster.",
        "CAM-pdf scraped and dumped into Excel files with insightful charts, enabling customers to understand their financials better with visuals.",
        "Designed and implemented ELT pipelines in Python to seamlessly fetch data from different databases, perform analysis processes, and generate insightful Excel files (saving 2 hours daily).",
        "Optimized application using the implementation of Multithreading, which decreased response time by 25%.",
        "Implemented the encryption and decryption (asymmetric cryptography) mechanism in the application to ensure robustness and reliability."
      ],
      tags: ["Python", "Django", "Oracle DB (Partitioning)", "Multithreading", "ELT Pipelines", "Asymmetric Cryptography", "Pandas"]
    },
    {
      id: "klearcom",
      role: "Junior Software Engineer",
      company: "Klearcom",
      period: "September 2021 - July 2022 (11 mos)",
      location: "Ireland / Remote",
      badge: "Telecom AI",
      highlights: [
        "Developed IVR-Intent-extraction algorithm with ~99% accuracy which reduced manual intervention of humans.",
        "Developed a Process logs and send email alerts script, which significantly reduced system downtime and process queues by 75% due to critical errors.",
        "Increased the IVR strings matching algorithm from 80% to 98% through enhanced preprocessing and advanced string matching algorithms.",
        "Developed a Bash script for streamlined Git pulls across 15 servers, relieving developers from manual server updates."
      ],
      tags: ["Python", "NLP / Intent Extraction", "IVR Algorithms", "Bash Automation", "Log Processing", "Linux"]
    },
    {
      id: "flyingspark",
      role: "Data Scientist",
      company: "FlyingSpark Infotech",
      period: "June 2021 - September 2021 (4 mos)",
      location: "Remote / Ahmedabad",
      badge: "Data Science & ML",
      highlights: [
        "Developed an Anime Recommendation system using collaborative filtering techniques.",
        "Converted unstructured logs data into informative structured format that reduced 100% human efforts."
      ],
      tags: ["Python", "Recommendation Systems", "Collaborative Filtering", "Data Pipelines", "Pandas", "NumPy"]
    }
  ],

  architectures: [
    {
      id: "a2a-mcp",
      title: "Autonomous Multi-Agent System (A2A & MCP)",
      category: "Agentic AI Architecture",
      description: "Production multi-agent pipeline orchestrating autonomous agents, tool invocations via Model Context Protocol, and OpenTelemetry & Langfuse observability.",
      nodes: [
        { id: "1", title: "Enterprise Task / Prompt", type: "input", desc: "Incoming request, task trigger, or webhook" },
        { id: "2", title: "Intent & Router Gateway", type: "core", desc: "FastAPI gateway evaluating user intent and context" },
        { id: "3", title: "A2A Agent Orchestrator", type: "ai", desc: "Autonomous agent-to-agent collaboration and sub-task delegation" },
        { id: "4", title: "MCP Tool Calling Server", type: "tool", desc: "Executes DB queries, external APIs, code execution" },
        { id: "5", title: "AI Guardrails & Verification", type: "security", desc: "Responsible AI safety rules and output validation" },
        { id: "6", title: "OpenTelemetry & Langfuse", type: "obs", desc: "Distributed trace instrumentation (-67% latency speedup)" }
      ]
    },
    {
      id: "gcp-genai",
      title: "GCP Event-Driven GenAI Recommendation Pipeline",
      category: "Vertex AI & Cloud Architecture",
      description: "Real-time TV/media ad spot makegood evaluation utilizing Vertex AI Gemini 1.5, Google ADK, and Pub/Sub event streams.",
      nodes: [
        { id: "1", title: "Broadcast Discrepancy", type: "input", desc: "Schedule change or preemption event detected" },
        { id: "2", title: "GCP Pub/Sub Queue", type: "core", desc: "Asynchronous high-throughput message ingestion" },
        { id: "3", title: "Vertex AI & Gemini Engine", type: "ai", desc: "Google ADK agent computing optimal replacement spots" },
        { id: "4", title: "BigQuery & GCS Storage", type: "tool", desc: "Historical ratings, ad specifications & inventory data" },
        { id: "5", title: "Automated Recommendation", type: "security", desc: "Verified replacement spots reducing manual effort by 70%" }
      ]
    },
    {
      id: "banking-pipeline",
      title: "High-Throughput Cryptographic FinTech Pipeline",
      category: "Distributed Backend Architecture",
      description: "High-speed customer deduplication and financial CAM processing serving 14+ Indian commercial banks.",
      nodes: [
        { id: "1", title: "Encrypted Banking Payload", type: "input", desc: "Customer application and KYC records from 14+ banks" },
        { id: "2", title: "RSA Decryption Gateway", type: "security", desc: "Asymmetric cryptographic verification" },
        { id: "3", title: "Multithreaded Match Engine", type: "core", desc: "25% faster fuzzy and exact identity deduplication" },
        { id: "4", title: "Partitioned Oracle Cluster", type: "tool", desc: "Indexed table query execution at sub-second speeds" },
        { id: "5", title: "Visual Analytics & Reports", type: "obs", desc: "Automated Excel visual dashboards and SLA tracking" }
      ]
    }
  ],

  certifications: [
    {
      id: "gcp-genai-leader",
      title: "Google Cloud Certified Generative AI Leader",
      issuer: "Google Cloud",
      date: "Certified",
      category: "certification",
      badge: "Google Cloud",
      brandColor: "#1a73e8",
      icon: "Award",
      featured: true,
      tags: ["Vertex AI", "Gemini 1.5", "GenAI Strategy", "Responsible AI", "Model Governance"],
      description: "Validation of strategic and technical expertise in architecting enterprise GenAI solutions on Google Cloud Platform."
    },
    {
      id: "databricks-genai",
      title: "Databricks Certified Generative AI Engineer Associate",
      issuer: "Databricks",
      date: "Certified",
      category: "certification",
      badge: "Databricks",
      brandColor: "#FF3621",
      icon: "CheckCircle",
      featured: true,
      tags: ["RAG Pipelines", "Vector Databases", "LLM Evaluation", "Fine-Tuning"],
      description: "Demonstrated proficiency in building production LLM applications, RAG pipelines, and vector database management."
    },
    {
      id: "google-ai-essentials",
      title: "Google AI Essentials Certificate (Gen AI, Prompt Engineering)",
      issuer: "Google",
      date: "Certified",
      category: "certification",
      badge: "Google AI",
      brandColor: "#EA4335",
      icon: "ShieldCheck",
      featured: true,
      tags: ["Prompt Engineering", "Ethical AI", "LLM Workflows", "Google ADK"],
      description: "Specialized in Generative AI architectures, advanced prompt engineering, and ethical AI deployment."
    },
    {
      id: "gemini-streamlit",
      title: "Develop GenAI Apps with Gemini and Streamlit",
      issuer: "Google Cloud / DeepLearning.AI",
      date: "Certified",
      category: "certification",
      badge: "Google Gemini",
      brandColor: "#4285F4",
      icon: "Award",
      featured: true,
      tags: ["Google Gemini", "Streamlit", "Rapid Prototyping", "Multimodal AI"],
      description: "Specialized credential for developing interactive LLM prototypes and production interfaces using Google Gemini models."
    },
    {
      id: "aws-ml-foundations",
      title: "AWS Machine Learning Foundations",
      issuer: "Amazon Web Services",
      date: "Certified",
      category: "certification",
      badge: "AWS",
      brandColor: "#FF9900",
      icon: "CheckCircle",
      featured: false,
      tags: ["Amazon Bedrock", "AWS Lambda", "Model Hosting", "ML Pipelines"],
      description: "Credential in Amazon Web Services ML ecosystem, model hosting, Bedrock foundations, and automated pipelines."
    },
    {
      id: "ibm-datascience",
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "Certified",
      category: "certification",
      badge: "IBM",
      brandColor: "#052FAD",
      icon: "BookOpen",
      featured: false,
      tags: ["Python Data Science", "Machine Learning", "Data Pipelines", "SQL"],
      description: "Comprehensive credential covering machine learning, data engineering, statistical analysis, and Python data structures."
    },
    {
      id: "superhacks-award",
      title: "Special Jury Mention Award Winner: MAESTRO",
      issuer: "SuperHacks 2025 powered by AWS",
      date: "Hackathon Winner",
      category: "award",
      badge: "AWS Hackathon Winner",
      brandColor: "#FF9900",
      icon: "Trophy",
      featured: true,
      tags: ["Multi-Agent AI", "Amazon Bedrock", "Autonomous IT Ops", "FastAPI"],
      description: "Won Special Jury Mention Award for MAESTRO, an autonomous multi-agent IT operations platform built with Amazon Bedrock."
    },
    {
      id: "talentica-pat",
      title: "'PAT on the Back' Corporate Excellence Award",
      issuer: "Talentica Software",
      date: "Corporate Award",
      category: "award",
      badge: "Corporate Award",
      brandColor: "#34A853",
      icon: "Star",
      featured: true,
      tags: ["Backend Optimization", "AWS Lambda & CloudWatch", "GMS Sports Platform"],
      description: "Awarded for optimizing critical backend systems, implementing automated CloudWatch monitoring, and improving UX in the Game Management System."
    },
    {
      id: "linkedin-python",
      title: "Top 5% in Python Skill Assessment",
      issuer: "LinkedIn Assessment (1.5M+ candidates)",
      date: "Top 5% Global",
      category: "award",
      badge: "Top 5% Global",
      brandColor: "#0A66C2",
      icon: "TrendingUp",
      featured: true,
      tags: ["Python Core", "Data Structures", "Algorithms", "Concurrency"],
      description: "Ranked in the top 5th percentile among over 1.5 million developers globally in Python algorithmic and backend proficiencies."
    },
    {
      id: "stars-earth",
      title: "1st Place Winner: STARS ON EARTH Python Hackathon 2020",
      issuer: "STARS ON EARTH",
      date: "1st Place Winner",
      category: "award",
      badge: "1st Place Winner",
      brandColor: "#FBBC05",
      icon: "Trophy",
      featured: false,
      tags: ["Algorithmic Automation", "Python Workflows", "Rapid Prototyping"],
      description: "Secured first prize building rapid algorithmic automation and distributed Python workflows under competitive constraints."
    }
  ],

  education: {
    degree: "Bachelor of Engineering (B.E.) in Information Technology",
    institution: "Vishwakarma Government Engineering College (VGEC)",
    year: "2017 - 2021",
    location: "Chandkheda, Gandhinagar, Gujarat, India"
  },

  aiAssistantKnowledge: [
    {
      keywords: ["who is", "about", "bhavesh", "intro", "summary"],
      answer: "Bhaveshkumar Rathod is an AI Engineer and Senior Software Engineer with 5+ years of experience building scalable distributed backends and production Multi-Agent AI systems (A2A, MCP, RAG) across AWS & GCP. He is currently at Talentica Software."
    },
    {
      keywords: ["talentica", "multi agent", "a2a", "mcp", "makegood", "gemini", "vertex", "langfuse"],
      answer: "At Talentica Software, Bhavesh is a Senior Software Engineer (April 2026 - Present, previously SE II from Jan 2024). He architected a production Multi-Agent platform using A2A and Model Context Protocol (MCP) with FastAPI and OpenTelemetry/Langfuse (cutting response times by 67%). He also led the GenAI Makegood recommendation system on GCP (Vertex AI, Gemini, Google ADK, Pub/Sub, BigQuery) reducing manual effort by 70%, and optimized a Django API by 94% (1,200 records/min to 4s)."
    },
    {
      keywords: ["maestro", "hackathon", "superhacks", "aws", "bedrock", "award"],
      answer: "MAESTRO is an AI-powered Multi-Agent IT Operations Platform built by Bhavesh that won the 'Special Jury Mention Award' at SuperHacks 2025 powered by AWS. It uses Amazon Bedrock foundation models for proactive issue resolution, autonomous triage, and self-healing infrastructure. You can watch the full demo video right on this portfolio!"
    },
    {
      keywords: ["optimize", "performance", "speed", "latency", "94%"],
      answer: "Key performance optimizations:\n1) Reduced Django API processing from 1,200 records/min to 4s (94% speedup).\n2) Cut Multi-Agent AI response time from 3m to 1m (67% speedup) via OpenTelemetry and Langfuse trace analysis.\n3) Reduced Game Management System batch times from 30-40 minutes to milliseconds.\n4) Decreased FinTech query latency by 25% using multithreading."
    },
    {
      keywords: ["skills", "stack", "tech", "technologies", "languages"],
      answer: "Core Skills:\n• GenAI & Agentic AI: Multi-Agent Systems (A2A, MCP), LLM Orchestration, RAG, Google Vertex AI, Google Gemini, Amazon Bedrock, Google ADK, AI Guardrails, Langfuse, Streamlit\n• Backend: Python (Top 5% Global), FastAPI, Django & DRF, Microservices, Asymmetric Cryptography (RSA), Multithreading\n• Cloud & Ops: GCP (Pub/Sub, BigQuery, GCS), AWS (Lambda, Bedrock, S3, CloudWatch), OpenTelemetry, Docker, Linux\n• Databases: BigQuery, Oracle (Partitioning), PostgreSQL, MySQL, Python ELT Pipelines, Pandas."
    },
    {
      keywords: ["certifications", "certified", "credentials", "badges"],
      answer: "Key Credentials:\n• Google Cloud Certified Generative AI Leader\n• Google AI Essentials Certificate (Gen AI, Prompt Engineering)\n• Databricks Certified Generative AI Engineer Associate\n• Develop GenAI Apps with Gemini and Streamlit\n• AWS Machine Learning Foundations\n• Talentica 'PAT on the Back' Corporate Award\n• Top 5% Global Python (LinkedIn)\n• 1st Place, STARS ON EARTH Python Hackathon."
    },
    {
      keywords: ["contact", "email", "reach", "hire", "linkedin", "remote", "opportunity", "job"],
      answer: "Bhavesh is actively open to Remote Opportunities across India & Worldwide (AI Engineer, Senior Backend Engineer, GenAI Architect). You can reach him directly via:\n• Email: bhavesh3194@gmail.com\n• LinkedIn: linkedin.com/in/bhaveshkumar-rathod/\n• Location: Ahmedabad, Gujarat, India (100% Remote Available)"
    },
    {
      keywords: ["banking", "online psb", "fintech", "oracle"],
      answer: "At Online PSB Loans (Jul 2022 - Dec 2023), Bhavesh developed Django APIs serving 14+ Indian Banks for duplicate customer detection, designed partitioned Oracle DB tables, built Python ELT pipelines (saving 2 hours daily), and secured financial data using RSA asymmetric cryptography."
    }
  ]
};
