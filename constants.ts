import { EducationItem, ExperienceItem, ResearchItem, TeachingItem, WorkingPaper, Project, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: "nitinyadav0497@gmail.com",
  phone: "+1 3348706720",
  linkedin: "https://www.linkedin.com/in/nitin-yadav-4867311a7/",
  github: "https://github.com/nitin0497"
};

export const USER_INFORMATION = [
  "I am a Data Scientist and Applied AI Researcher with a strong foundation in statistics, engineering, and analytics. My work spans machine learning, causal inference, deep learning, and computer vision, with a demonstrated ability to deliver end-to-end AI systems across both academic research and industry settings.",
  "I have specialized experience in causal inference under endogeneity, using structural path models and dynamic response frameworks to uncover and validate causal mechanisms in complex observational data. More recently, my work has focused on AI engineering and applied research in deep learning and computer vision, where I design scalable, data-efficient vision–language systems and build production-ready pipelines that integrate large language models with modern deep learning architectures and classical computer vision techniques.",
  "My goal is to bridge rigorous research and real-world deployment—translating advances in machine learning, computer vision, and statistical modeling into reliable, interpretable, and high-impact AI systems that perform in production environments.",
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Auburn University",
    degree: "Master's degree in AI Engineering",
    duration: "June 2025 – May 2026 (expected)",
    description: "Focusing on LLMs, Deep Learning, Computer Vision, and AI system design utilizing sophisticated evolutionary algorithms. I specifically concentrate on integrating LLMs with Computer Vision to construct Vision-Language Models, applied to zero-shot object counting.",
    location: "Auburn, AL"
  },
  {
    institution: "Auburn University",
    degree: "Graduate Certificate in Business Analytics",
    duration: "Aug 2024 - May 2025",
    description: "Complements technical training with skills in data-driven decision-making, analytics strategy, and business-focused empirical modeling. This combination allows me to translate complex AI and statistical models into insights that are actionable in organizational and operational settings.",
    location: "Auburn, AL"
  },
  {
    institution: "Auburn University",
    degree: "Master of Science in Probability and Statistics",
    duration: "Aug 2022 - Dec 2023",
    description: "Coursework emphasized predictive modeling, computational statistics, multivariate analysis, and time-series econometrics. Developed strong foundations in statistical learning, causal inference, simulation methods, and empirical research design.",
    location: "Auburn, AL"
  },
  {
    institution: "BITS Pilani, Hyderabad Campus",
    degree: "Bachelor of Engineering in Chemical Engineering",
    duration: "Aug 2016 - May 2020",
    description: "Completed with a minor in Finance. Provided a strong quantitative foundation in calculus, linear algebra, probability, numerical methods, and financial analysis, shaping my ability to approach complex systems analytically and across disciplines.",
    location: "Hyderabad, India"
  }
];

export const PROFESSIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    title: "Analytical Solutions Analyst (CIB Operations)",
    company: "JPMorgan Chase & Co.",
    location: "Mumbai, India",
    duration: "June 2024 – August 2024",
    points: [
      "Performed root-cause analysis and process engineering for core equity operations, identifying inefficiencies and failure points in high-volume workflows.",
      "Designed automation and analytical solutions that reduced manual intervention and achieved 1.5 FTE-equivalent efficiency gains.",
      "Delivered actionable insights to stakeholders by translating operational data into clear performance metrics and recommendations."
    ]
  },
  {
    title: "Graduate Assistant – Project Management",
    company: "Biggio Center for the Enhancement of Teaching & Learning, Auburn University",
    location: "Auburn, AL",
    duration: "October 2022 – July 2023",
    points: [
      "Automated extraction of course data from the Canvas LMS using web scraping tools to support workload estimation across university courses.",
      "Developed an interactive R Shiny application for estimating course workload, designed for future integration into Auburn’s instructional planning systems."
    ]
  },
  {
    title: "Data Consultant",
    company: "RBD Library (IRC), Auburn University",
    location: "Auburn, AL",
    duration: "August 2022 – December 2023",
    points: [
      "Provided one-on-one consulting to graduate students and faculty on statistical analysis and data science workflows.",
      "Specialized in debugging and optimizing R and Python scripts for research projects across multiple disciplines."
    ]
  },
  {
    title: "Data Analyst & Project Manager",
    company: "Fractal Analytics",
    location: "Mumbai, India",
    duration: "June 2020 – July 2022",
    points: [
      "Served as a data engineering and analytics SME on a large-scale compliance and reporting project, working directly with clients and vendors.",
      "Built and maintained automated data pipelines and analytical workflows in Python and Databricks, enabling a 20× expansion of the project scope.",
      "Developed end-to-end compliance reporting systems by defining key KPIs and delivering recurring insights to senior client leadership.",
      "Led project coordination and scrum management, scaling the team from one to five data engineers and onboarding new members."
    ]
  },
  {
    title: "Reporting & Analytics Intern",
    company: "UBS Business Solutions – Group Finance",
    location: "Pune, India",
    duration: "July 2019 – December 2019",
    points: [
      "Produced daily financial and reconciliation reports, supporting internal stakeholders with timely and accurate data insights.",
      "Assisted in financial analysis and reporting processes used for management decision-making."
    ]
  }
];

export const RESEARCH_EXPERIENCE: ResearchItem[] = [
  {
    title: "Research Assistant",
    institution: "Auburn University",
    duration: "September 2022 – May 2025",
    points: [
      "Introduced the concept of Functional Form Misspecification (FFM) in testing nonlinear hypotheses, demonstrating how misspecified controls lead to biased and unreliable estimates in Operations Management literature.",
      "Proposed Generalized Additive Models (GAMs) with first-differencing in panel data to mitigate FFM and address endogeneity.",
      "Investigating the causal impact of Generative AI adoption on online knowledge communities across the Stack Exchange platform, revealing evidence of negative long-run effects on user engagement and network cohesion using network analytics and Difference-in-Differences designs.",
      "Conducted an extensive methodological review of matching techniques (CEM vs. PSM), focusing on their applicability and limitations when applied to interview and survey data in leadership and organizational research.",
      "Developed and evaluated data imputation methods (Expectation-Maximization and industry-mean imputation) for EPS forecasting of S&P 500 firms using WRDS data."
    ]
  }
];

export const TEACHING_EXPERIENCE: TeachingItem = {
  role: "Graduate Teaching Assistant",
  institution: "Auburn University",
  courses: [
    "BUAL 5600 / 6600 – Predictive Modeling (Dr. Kang Bok Lee): Fall 2024, Spring 2025",
    "BUAL 2650 – Business Analytics II (Dr. Kang Bok Lee): Fall 2024",
    "BUAL 5600 – Predictive Modeling (Dr. Sumin Han): Fall 2023, Spring 2025",
    "FINC 3700 – Financial Markets and Institutions (Dr. James R. Barth): Fall 2022"
  ],
  description: "Responsibilities included leading lab sessions, supporting model implementation in R/Python, grading, and mentoring students on applied analytics projects."
};

export const WORKING_PAPERS: WorkingPaper[] = [
  {
    title: "Effects of GenAI on Programming-Focused Online Knowledge Communities: A Network Science Approach",
    authors: "Yadav, Nitin",
    description: "Examines the causal impact of ChatGPT on Stack Overflow and related communities using network analytics and Difference-in-Differences. Available at SSRN.",
    link: "https://ssrn.com/abstract=5170208"
  },
  {
    title: "A Comparative Analysis of Propensity Score and Coarsened Exact Matching Methods",
    authors: "Jeong, Yeasung; Lee, Kang Bok; Han, Sumin; Paradice, David; Yadav, Nitin",
    description: "Methodological comparison of PSM and CEM within operations research contexts.",
    status: "Manuscript submitted to Organizational Research Methods."
  },
  {
    title: "Nonlinear Hypothesis Testing in Operations Management: A Novel Methodology for Mitigating Misspecified Controls and Endogeneity",
    authors: "Lee, Kang Bok; Jeong, Yeasung; Han, Sumin; Park, Junyoung; Yadav, Nitin",
    description: "Proposes a new framework to address functional form misspecification and endogeneity in nonlinear OM models.",
    status: "Manuscript submitted following acceptance of proposal at an elite operations research journal."
  }
];

export const ACADEMIC_HONORS = [
  "Harbert Eminent Scholar Fellowship (2024) — awarded by the Harbert College of Business in recognition of exceptional academic performance and research contributions."
];

export const PROJECTS: Project[] = [
  {
    title: "Zero-Shot Object Counting: Reproducing the VA-Count Framework",
    githubLink: "https://github.com/nitin0497/Zero-Shot-Object-Counting",
    visualIds: [
      "https://raw.githubusercontent.com/nitin0497/Zero-Shot-Object-Counting/2bf7476f552f920ce0534592ae73b5e8b7fae2f9/zero_shot_framework_diagram.png",
      "/images/zero_shot_counting_examples.png",
      "/images/ZSOC exemplars.png"
    ],
    description: "Implemented the VA-Count zero-shot object counting framework to enable class-agnostic object counting without human-labeled exemplars. Designed a scalable, data-efficient system requiring only object class names as input.",
    keyContributions: [
      {
        title: "Exemplar Enhancement Module (EEM)",
        items: [
          "Implemented automated exemplar mining using GroundingDINO for open-vocabulary proposals and a CLIP-based classifier to filter high-quality single-object patches."
        ]
      },
      {
        title: "Noise Suppression Module (NSM)",
        items: [
          "Trained an exemplar-guided contrastive density regression model using positive and negative exemplars to suppress background noise and improve counting accuracy.",
          "Built a reproducible end-to-end pipeline in Python, including preprocessing, training, evaluation, and visualization.",
          "Evaluated performance on the FSC-147 benchmark dataset, demonstrating generalization to unseen object categories and complex scenes."
        ]
      },
      {
        title: "Impact",
        items: [
          "Highlighted expertise in data-efficient AI, open-vocabulary vision, and scalable perception systems, with applications in autonomous systems, environmental monitoring, and large-scale visual analytics."
        ]
      }
    ]
  },
  {
    title: "Object Recognition and Tracking: Classical & Deep Learning Computer Vision Pipelines",
    githubLink: "https://github.com/nitin0497/Object-Recognition-and-Tracking",
    visualIds: [
      "/images/Final_bubble_tracking_output.gif",
      "/images/mnist_digit_recognition.png"
    ],
    description: "Architected an end-to-end computer vision system integrating classical image processing with deep learning models to address real-world object recognition and tracking challenges.",
    keyContributions: [
      {
        title: "Real-Time Object Tracking",
        items: [
          "Designed a classical vision pipeline to detect and track geometric objects (e.g., circles) across video frames using edge detection, contour extraction, Hough Circle Transform, and the Hungarian algorithm for frame-to-frame object assignment.",
          "Engineered the system to maintain object identity under motion, noise, and partial occlusion."
        ]
      },
      {
        title: "Handwritten Digit Recognition",
        items: [
          "Built and trained a Convolutional Neural Network (CNN) on the MNIST dataset for digit classification, demonstrating preprocessing, segmentation, and generalization to custom inputs."
        ]
      },
      {
        title: "Summary",
        items: [
          "Demonstrates a modular and interpretable approach to vision systems, illustrating effective integration of classical methods and deep learning for robust perception."
        ]
      }
    ]
  },
  {
    title: "Network Analysis of Stack Overflow: Impact of Generative AI on Online Knowledge Communities",
    githubLink: "https://github.com/nitin0497/Network-Analysis-of-StackOverflow",
    visualIds: [
      "/images/stackoverflow_network_analysis_chart.png"
    ],
    description: "Investigated how the rapid adoption of Generative AI tools (e.g., ChatGPT) has altered user engagement, collaboration, and knowledge exchange in programming-focused online communities, utilizing Stack Overflow as the primary case study.",
    keyContributions: [
      {
        title: "Methodology",
        items: [
          "Constructed dynamic user interaction networks from Stack Exchange data, modeling users as nodes and Q&A interactions as weighted edges evolving over time. Employed network science and causal inference to analyze structural community changes post-ChatGPT introduction."
        ]
      },
      {
        title: "Key Findings & Contributions",
        items: [
          "Designed time-varying weighted networks to capture interaction intensity and user activity.",
          "Implemented a Difference-in-Differences (DiD) framework using a control community (e.g., Mathematics Stack Exchange) to isolate the causal impact of AI adoption.",
          "Computed and analyzed network metrics such as clustering coefficients, degree correlations, connectivity, and node survival rates across rolling windows.",
          "Identified a significant decline in peer-to-peer engagement and community cohesion, raising critical insights regarding the sustainability of collaborative knowledge platforms."
        ]
      },
      {
        title: "Summary",
        items: [
          "Synthesizes data science, network analysis, and empirical research to quantify the social consequences of AI-driven technological change."
        ]
      }
    ]
  },
  {
    title: "Modeling Financial Volatility with ARCH/GARCH",
    githubLink: "https://github.com/nitin0497/Volatility-Modeling",
    visualIds: [
      "/images/sp500_time_series_volatility.png"
    ],
    description: "Modeled and forecasted time-varying volatility in financial markets using daily S&P 500 returns, addressing volatility clustering in financial time series through advanced econometric methods.",
    keyContributions: [
      {
        title: "Approach",
        items: [
          "Implemented and compared ARCH, GARCH, and GJR-GARCH models to capture conditional heteroskedasticity and leverage effects, utilizing resulting forecasts for comprehensive risk measurement."
        ]
      },
      {
        title: "Contributions",
        items: [
          "Built a full ARCH-family modeling pipeline to estimate dynamic conditional variance.",
          "Analyzed volatility clustering and asymmetric responses to positive vs. negative shocks.",
          "Conducted Monte Carlo simulations to study volatility dynamics.",
          "Estimated Value at Risk (VaR) for downside risk assessment and portfolio applications.",
          "Developed a fully reproducible R-based workflow, including visualization and documentation."
        ]
      },
      {
        title: "Skills Demonstrated",
        items: [
          "Demonstrates advanced proficiency in time-series econometrics and financial risk modeling."
        ]
      }
    ]
  }
];
