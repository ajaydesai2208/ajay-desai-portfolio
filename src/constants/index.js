export const myProjects = [
  {
    id: 1,
    title: "AI-powered Legal Research Platform",
    description:
      "Developed an AI-powered legal research platform to process 10,000+ scanned legal PDFs (250-300 pages each), automating the extraction of legal details like case numbers, defendant names, dates, etc., with 95% accuracy using LangChain for parsing and the OpenAI API for conversational AI.",
    subDescription: [
      "Designed a responsive frontend interface with Next.js, Mantine UI, and Tailwind CSS, enabling document uploads, chat-based querying, and real-time status tracking. Leveraged Zustand for state management to handle user sessions, file uploads, and chat history seamlessly.",
      "Architected a scalable backend infrastructure using tRPC for type-safe API communication, FastAPI for server-side logic, and Weaviate vector database for efficient document indexing and retrieval, achieving a processing throughput of 50+ PDFs per hour and reducing manual effort by 80%.",
      "Deployed the platform using Cloudflare R2 for secure file storage, Weaviate Cloud for vector embeddings, and Docker to ensure scalability, reliability, and efficient AI-driven document retrieval for legal research.",
    ],
    href: "https://www.linkedin.com/in/ajayhdesai/", // Keep LinkedIn for this project
    image: "/assets/projects/ai-legal-research.jpg", // We'll need to create this image later
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 4,
        name: "LangChain",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 5,
        name: "OpenAI API",
        path: "/assets/logos/openai.svg",
      },
      {
        id: 6,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Findash: Financial Dashboard Application",
    description:
      "Architected a full-stack financial dashboard using the MERN stack integrating complex chart visualizations (Recharts) and dynamic data grids for KPI tracking, ensuring seamless user interaction and data representation.",
    subDescription: [
      "Developed a responsive frontend with Material UI, React, and Redux Toolkit for state management, and integrated a machine learning model using Regression.js for revenue predictions; built and optimized backend APIs with Node.js, Express.js, and MongoDB, reducing response times by 30%.",
      "Deployed the application on Fly.io (backend) and Vercel (frontend), increasing load speed by 40% for real-time data analysis.",
    ],
    href: "https://github.com/ajaydesai2208/Findash",
    image: "/assets/projects/findash.jpg", // We'll need to create this image later
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 6,
        name: "Regression.js",
        path: "/assets/logos/regressionjs.svg", // This might need a custom SVG
      },
      {
        id: 7,
        name: "Material UI",
        path: "/assets/logos/materialui.svg",
      },
      {
        id: 8,
        name: "Recharts",
        path: "/assets/logos/recharts.svg", // This might need a custom SVG
      },
    ],
  },
  {
    id: 3,
    title: "Mythical Fridge: Recipe Recommendation Web Application",
    description:
      "Developed a full-stack recipe recommendation web application using Java with Spring Boot, React, and MySQL.",
    subDescription: [
      "Integrated the OpenAI API with the Spring Boot backend using Langchain4j to generate recipe suggestions based on user-provided ingredients, dynamically update fridge inventory as users select recipes, and optimize API calls for cost efficiency.",
      "Implemented user authentication and data persistence using MySQL and Spring Boot, enabling users to securely log in, manage a virtual fridge, save preferences, and access favorite recipes.",
    ],
    href: "https://github.com/ajaydesai2208/MythicalFridge",
    image: "/assets/projects/mythical-fridge.jpg", // We'll need to create this image later
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "Spring Boot",
        path: "/assets/logos/springboot.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 5,
        name: "OpenAI API",
        path: "/assets/logos/openai.svg",
      },
      {
        id: 6,
        name: "Langchain4j",
        path: "/assets/logos/langchain.svg", // Using LangChain logo for Langchain4j
      },
    ],
  },
  {
    id: 4,
    title: "Vaaj: AI Video Sharing Platform",
    description:
      "Designed and delivered a cross-platform mobile app using React Native and Expo, featuring eight dynamic screens, including user onboarding, authentication, video uploads, and search functionalities, enhancing usability across iOS and Android devices.",
    subDescription: [
      "Integrated AI-powered metadata generation for uploaded videos, improving search accuracy and personalized recommendations; utilized Node.js and MongoDB via Aite for backend operations, achieving a 99% success rate while managing 500 concurrent user sessions during stress testing.",
      "Optimized performance with Tailwind CSS, implementing responsive layouts and dynamic navigation, ensuring seamless feature delivery.",
    ],
    href: "https://github.com/ajaydesai2208/vaaj",
    image: "/assets/projects/vaaj.jpg", // We'll need to create this image later
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/logos/react-native.svg",
      },
      {
        id: 2,
        name: "Expo",
        path: "/assets/logos/expo.svg", // This might need a custom SVG
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Generative AI Blog Generation Application",
    description:
      "Engineered a Generative AI tool leveraging Llama 3 and LangChain for automatic blog creation, reducing content drafting time by 40% with custom prompt templates.",
    subDescription: [
      "Incorporated an interactive UI with Streamlit, enabling real-time content generation and prompt fine-tuning for consistent tone and topic depth.",
      "Rolled out the application on Hugging Face Spaces with secure API integration for seamless real-time blog generation and improving accessibility.",
    ],
    href: "https://www.linkedin.com/in/ajayhdesai/", // Keep LinkedIn for this project
    image: "/assets/projects/generative-ai-blog.jpg", // We'll need to create this image later
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "LLM",
        path: "/assets/logos/llm.svg", // This might need a custom SVG
      },
      {
        id: 3,
        name: "Llama 3",
        path: "/assets/logos/llama3.svg", // This might need a custom SVG
      },
      {
        id: 4,
        name: "Streamlit",
        path: "/assets/logos/streamlit.svg",
      },
      {
        id: 5,
        name: "Hugging Face",
        path: "/assets/logos/huggingface.svg",
      },
      {
        id: 6,
        name: "LangChain",
        path: "/assets/logos/langchain.svg",
      },
    ],
  },
  {
    id: 6,
    title: "File Sharing Application",
    description:
      "Designed and built a file-sharing application using Java with Spring Boot for the backend, React.js for the frontend, and AWS S3 for scalable file storage, enabling users to seamlessly upload, manage, and share documents.",
    subDescription: [
      "Enabled secure user authentication with JWT and authorization using Spring Security, ensuring data privacy.",
      "Utilized AWS S3 for scalable file storage and DynamoDB for efficient metadata management, enhancing the reliability and cost-effectiveness.",
    ],
    href: "https://github.com/ajaydesai2208/FileSharingApp",
    image: "/assets/projects/file-sharing.jpg", // We'll need to create this image later
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "Spring Boot",
        path: "/assets/logos/springboot.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "AWS S3",
        path: "/assets/logos/aws-s3.svg", // This might need a custom SVG
      },
      {
        id: 5,
        name: "AWS DynamoDB",
        path: "/assets/logos/aws-dynamodb.svg", // This might need a custom SVG
      },
      {
        id: 6,
        name: "JWT",
        path: "/assets/logos/jwt.svg", // This might need a custom SVG
      },
    ],
  },
  {
    id: 7,
    title: "Anime Recommendation System",
    description:
      "Built an anime recommendation system leveraging collaborative filtering to deliver personalized top 10 suggestions, enhancing user satisfaction.",
    subDescription: [
      "Enhanced anime discovery through a tkinter GUI with sorting options and autocomplete for seamless navigation.",
      "Deployed the system on Heroku, ensuring scalability and accessibility for a broader user base.",
    ],
    href: "https://github.com/ajaydesai2208/Anime-Recommendation-System",
    image: "/assets/projects/anime-recommendation.jpg", // We'll need to create this image later
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Django",
        path: "/assets/logos/django.svg",
      },
      {
        id: 3,
        name: "tkinter",
        path: "/assets/logos/tkinter.svg", // This might need a custom SVG
      },
      {
        id: 4,
        name: "scikit-surprise",
        path: "/assets/logos/scikit-surprise.svg", // This might need a custom SVG
      },
      {
        id: 5,
        name: "matplotlib",
        path: "/assets/logos/matplotlib.svg", // This might need a custom SVG
      },
      {
        id: 6,
        name: "pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 7,
        name: "Heroku",
        path: "/assets/logos/heroku.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ajayhdesai/",
    icon: "/assets/socials/linkedIn.svg", // This icon should already exist
  },
  {
    name: "GitHub",
    href: "https://github.com/ajaydesai2208", // Assuming this is your GitHub, please confirm if different
    icon: "/assets/socials/github.svg", // We might need to add this icon if it doesn't exist
  },
  {
    name: "Email", // Adding an email icon
    href: "mailto:ajdesai@syr.edu",
    icon: "/assets/socials/email.svg", // We might need to add this icon if it doesn't exist
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    job: "JPMorgan Chase & Co., USA",
    date: "June 2024 – Present",
    contents: [
      "Contributed to and maintained microservices for trading and settlement platforms using Java, Spring Boot, and Hibernate, ensuring secure handling of 1M+ trades/day with under 200ms response latency, supported in meeting SEC and FINRA compliance requirements.",
      "Implemented GraphQL APIs for portfolio aggregation and risk analysis, consolidating equities and FX data from 500K+ daily trades, enabling traders to generate real-time exposure and P&L dashboards.",
      "Leveraged AWS EKS (on EC2) and CloudWatch to host and monitor trading microservices, achieving 99.98% uptime and reducing mean time to detection (MTTD) for system anomalies to under 3 minutes.",
      "Built analytics workflows with Elasticsearch, allowing risk managers to query 1.2M+ daily transactions in near real-time and cut compliance report generation from hours to under 30 minutes.",
      "Carried out CI/CD pipelines with GitHub Actions, Docker, and Kubernetes to automate deployments of financial applications, increasing release frequency by 20 per month.",
    ],
  },
  {
    title: "Software Engineer",
    job: "Center for Policy Research, SU, New York",
    date: "November 2023 – May 2024",
    contents: [
      "Launched an AI-native legal research platform from the ground up, automating the analysis of over 20,000+ dense legal documents to solve the legal researcher's critical bottleneck in manual data extraction.",
      "Engineered a Python FastAPI backend with async I/O and a tRPC-based Node BFF to provide typed client APIs in Next.js, then orchestrated LangChain with the OpenAI API to run an ingestion pipeline that processed 50+ PDFs per hour.",
      "Designed a responsive frontend with Next.js and Mantine UI, featuring seamless document uploads, real-time processing status tracking, and a conversational chat interface powered by the Weaviate vector database for complex semantic querying.",
      "Ensured mission-critical reliability by containerizing the application with Docker and deploying to a specialized cloud stack, leveraging Cloudflare R2 for secure file storage and Weaviate Cloud to manage production vector indexes at scale.",
    ],
  },
  {
    title: "Software Engineer",
    job: "LTIMindtree, India",
    date: "July 2020 – December 2022",
    contents: [
      "Constructed and deployed microservices-based healthcare applications using Java, Spring Boot, and REST APIs on AWS, securely processing thousands of patient records and insurance claims daily while maintaining HIPAA-aligned controls (encryption, RBAC, audit logs).",
      "Architected React.js frontends and Node.js backend services with REST APIs, providing doctors and patients real-time access to medical histories, prescriptions, and billing, handling 5,000+ patient records daily.",
      "Optimized payment and billing workflows using Hibernate, JPA, and PostgreSQL, reducing query time from ~12s to under 9s per transaction and enhancing reliability for 50,000+ monthly insurance claims.",
      "Containerized full-stack healthcare applications with Docker and Kubernetes, setting up CI/CD pipelines to automate build, testing, and deployment, supporting 25+ monthly production deployments with rolling updates.",
      "Initiated reporting queries and indexing strategies in PostgreSQL for healthcare claims and compliance audits, handling 2M+ patient transactions monthly and reducing report generation time from 45 to under 20 minutes.",
      "Applied real-time healthcare data streaming solutions using Apache Kafka, enabling secure ingestion of patient vitals, lab results, and insurance transactions, handled peaks up to 12,000 records/min with secure transport.",
    ],
  },
];

export const reviews = [];
