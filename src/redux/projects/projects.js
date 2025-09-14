import bookAppoinments from '../../assets/images/projects/book-appointments.png';
import covid19Metrics from '../../assets/images/projects/covid19-metrics.png';
import disneyCharacters from '../../assets/images/projects/disney-characters.png';
import spaceTravelers from '../../assets/images/projects/space-travelers.png';
import bootCamp from '../../assets/images/projects/bootcamp.png';
import recipeApp from '../../assets/images/projects/recipe-app.png';
import bookStore from '../../assets/images/projects/book-store.png';
import budgetTracker from '../../assets/images/projects/budget-tracker.png';
import trendify from '../../assets/images/projects/trendify.png';
import taskMaster from '../../assets/images/projects/task-master.png';
import formBuilder from '../../assets/images/projects/smart-form-builder.png';
import pipelineFlow from '../../assets/images/projects/pipeline-flow.png';
import chatbotFlow from '../../assets/images/projects/chatbot-flow.png';
import marketSeasonality from '../../assets/images/projects/market-seasonality-explorer.png';
import aiImageStudio from '../../assets/images/projects/ai-image-studio.png';
import customDataGrid from '../../assets/images/projects/custom-data-grid.png';
import aiFormPilot from '../../assets/images/projects/ai-form-pilot.png';

// initial-state
const initialState = [
  {
    id: 0,
    title: 'Market Seasonality Explorer',
    image: marketSeasonality,
    details:
      'Market Seasonality Explorer is a responsive, real-time crypto analytics dashboard that visualizes market performance through a dynamic calendar interface. Each calendar cell represents a day/week/month and provides detailed insights such as volume, performance, volatility, and other technical metrics. Users can click on any day to access a comprehensive drill-down report with historical trends, comparative analysis, and visual breakdowns.',
    live: 'https://market-explorer.thecodechaser.com',
    github: 'https://github.com/thecodechaser/market-seasonality-explorer',
    tech: ['JavaScript', 'TypeScript', 'React', 'Tailwind'],
  },
  {
    id: 1,
    title: 'AI Form Pilot',
    image: aiFormPilot,
    details:
      'AI Form Pilot is a lightweight Next app for guided form-filling. Instead of overwhelming users with fields, it asks questions one by one—like name, email, or phone—then auto-fills the form with real-time responses from the Gemini API. Users get a smooth guided flow instead of static fields, with the interactive responses from AI. Built with TypeScript and Tailwind, it’s fast, accessible, and keyboard-friendly—perfect for exploring AI-driven form experiences without extra complexity',
    live: 'https://ai-form.thecodechaser.com',
    github: 'https://github.com/thecodechaser/ai-form-pilot',
    tech: ['Gemini API', 'TypeScript', 'Next', 'Tailwind'],
  },
  {
    id: 2,
    title: 'AI Image Studio',
    image: aiImageStudio,
    details:
      'AI Image Studio is a lightweight React app for rapid image-ideation. Upload a PNG/JPG (auto-downscaled if large), enter a prompt, choose a style, and see a live summary before generating. A mocked API simulates latency, errors, retries with backoff, and aborts, while the last five results persist as a clickable history. Built with TypeScript and Tailwind, it’s fast, accessible, and keyboard-friendly—perfect for testing AI-studio flows without backend complexity.',
    live: 'https://ai-image.thecodechaser.com',
    github: 'https://github.com/thecodechaser/ai-image-studio',
    tech: ['JavaScript', 'TypeScript', 'React', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Pipeline Flow Builder',
    image: pipelineFlow,
    details:
      'Pipeline Flow Builder is a visual editor that allows users to construct custom data processing pipelines with drag-and-drop simplicity. Each node, such as Input, Math, Delay, or Output, represents a specific function and can be connected to define the flow of logic. Users can configure each node’s parameters and visualize how data moves through the system.',
    live: 'https://pipeline-flow.thecodechaser.com',
    github: 'https://github.com/thecodechaser/pipeline-flow-builder',
    tech: ['JavaScript', 'React', 'ReactFlow', 'Tailwind'],
  },
  {
    id: 4,
    title: 'Smart Form Builder',
    image: formBuilder,
    details:
      'Smart Form Builder is a dynamic form creation tool that empowers users to design custom forms with ease. Users can add questions and options manually or via drag-and-drop. Each option can have follow-up questions, allowing for deeply nested, conditional logic. Whether creating simple surveys or complex decision trees.',
    live: 'https://form-builder.thecodechaser.com',
    github: 'https://github.com/thecodechaser/smart-form-builder',
    tech: ['JavaScript', 'React', 'Redux', 'Tailwind'],
  },
  {
    id: 5,
    title: 'Trendify',
    image: trendify,
    details:
      'Trendify is a React-based e-commerce application designed for seamless online shopping. It offers a wide range of products across categories such as clothing, shoes, and home appliances. Users can browse products, add items to their cart or wishlist, and complete their purchase effortlessly through a streamlined checkout process.',
    live: 'https://trendify.thecodechaser.com',
    github: 'https://github.com/thecodechaser/trendify',
    tech: ['JavaScript', 'TypeScript', 'React', 'Tailwind'],
  },
  {
    id: 6,
    title: 'Task Master',
    image: taskMaster,
    details:
      'TaskMaster is a React-based task management application designed for efficient task organization. It offers full CRUD operations for creating, updating, and managing tasks. Users can track progress using a Kanban board with drag-and-drop functionality, making task management seamless and intuitive.',
    live: 'https://task-master.thecodechaser.com',
    github: 'https://github.com/thecodechaser/task-master',
    tech: ['JavaScript', 'TypeScript', 'React', 'Tailwind'],
  },
  {
    id: 7,
    title: 'Chatbot Flow Builder',
    image: chatbotFlow,
    details:
      'Chatbot flow Builder is a visual conversation design tool that empowers users to create custom chatbot flows with ease. Users can add message nodes manually or via drag-and-drop, each with configurable inputs and connections. Nodes can have follow-up branches, enabling deeply nested, conditional conversations.',
    live: 'https://chatbot-flow.thecodechaser.com',
    github: 'https://github.com/thecodechaser/chatbot-flow-builder',
    tech: ['TypeScript', 'React', 'ReactFlow', 'Tailwind'],
  },
  {
    id: 8,
    title: 'Custom Data Grid',
    image: customDataGrid,
    details:
      'Custom Data Grid is a high-performance, feature-rich custom table component build from scratch without any additional library. It supports dynamic column rendering, row virtualization, and multi-column sorting. Users can search, filter, paginate, and export data with ease. Advanced tools include column pinning, resizing, reordering, and grouping. With inline editing, bulk actions, and customizable cell types.',
    live: 'https://data-grid.thecodechaser.com',
    github: 'https://github.com/thecodechaser/custom-data-grid',
    tech: ['JavaScript', 'TypeScript', 'React', 'Tailwind'],
  },
  {
    id: 9,
    title: 'Book Appoinments',
    image: bookAppoinments,
    details:
      'Book Appointments is a responsive web application for managing doctor appointments. Users can create, view, and delete doctors and reservations. The app supports authentication with sign-up and sign-in functionality. Designed for usability and convenience, it ensures a smooth booking experience across devices with a clean, accessible interface.',
    live: 'https://book-appointments.thecodechaser.com',
    github: 'https://github.com/thecodechaser/book-appointment-frontend',
    tech: ['Rails', 'React', 'Tailwind'],
  },
  {
    id: 10,
    title: 'Covid19 Metrics',
    image: covid19Metrics,
    details:
      'Covid19 Metrics is a web application that fetches covid data from API. It shows all countries with the confirmed covid cases on the homepage, users can select any country and go to the details page. The details page shows other details for that specific country like recovered cases, confirmed cases, and deaths.',
    live: 'https://covid19-metrics.thecodechaser.com',
    github: 'https://github.com/thecodechaser/covid19-metrics',
    tech: ['React', 'Redux', 'HTML & CSS'],
  },
  {
    id: 11,
    title: 'Disney Characters',
    image: disneyCharacters,
    details:
      'Disney Character is a web application that shows data of Disney characters from the Disney API. Users can like the character and users can also leave comments on any character on the comment popup. It shows the comments left by other people and gives an idea of what people think about Disney characters.',
    live: 'https://disney-characters.thecodechaser.com',
    github: 'https://github.com/thecodechaser/Disney-characters-webapp',
    tech: ['JavaScript', 'HTML & CSS'],
  },
  {
    index: 12,
    title: 'Space Travelers',
    image: spaceTravelers,
    details:
      'Space Travelers Hub is a React web application that fetches rockets, and missions from the SpaceX API. Users can book and cancel their reservations for rockets and missions. The application has three pages Rockets/Missions/MY Profile, My Profile page shows the list of reserved rockets and missions.',
    live: 'https://space-travelers.thecodechaser.com',
    github: 'https://github.com/thecodechaser/space-travelers-hub',
    tech: ['React', 'Redux', 'HTML & CSS'],
  },
  {
    id: 13,
    title: 'Thecodechaser BootCamp',
    image: bootCamp,
    details:
      'ThecodeChaser Bootcamp is a responsive web application designed to showcase a web development bootcamp. It provides detailed information about the program and allows users to submit queries or questions through an integrated contact form. The site is optimized for both desktop and mobile devices, offering a clean and accessible user experience.',
    live: 'https://web-bootcamp.thecodechaser.com',
    github: 'https://github.com/thecodechaser/thecodechaser-web-bootcamp',
    tech: ['HTML', 'CSS'],
  },
  {
    id: 14,
    title: 'Recipe App',
    image: recipeApp,
    details:
      'The Recipe app is a classic example of a recipe website. Its a functional website that shows the list of foods and recipes and empowers readers to interact with them by adding new foods and recipes. Users can access the services of the application by creating a new account or by login in if they already have an account.',
    live: 'https://recipe-app-thecodechaser.herokuapp.com/',
    github: 'https://github.com/thecodechaser/recipe-app',
    tech: ['Rails', 'Ruby', 'Tailwind'],
  },
  {
    id: 15,
    title: 'Book Store',
    image: bookStore,
    details:
      'Book Store is a React-based web application that allows users to manage a personalized list of favorite books. Users can add and remove books from their collection with ease. Built using JavaScript and React libraries, the application provides a responsive and user-friendly interface for organizing book preferences efficiently.',
    live: 'https://book-store.thecodechaser.com',
    github: 'https://github.com/thecodechaser/book-store',
    tech: ['React', 'Redux', 'HTML & CSS'],
  },
  {
    id: 16,
    title: 'Budget Tracker',
    image: budgetTracker,
    details:
      'Budget Tracker is a full-stack web application for managing personal finances. It allows users to view categories and transactions, as well as add new ones for better tracking. The app includes user authentication, enabling account creation and secure login. Designed for usability, it helps users stay on top of their budget with ease.',
    live: 'https://budget-tracker-thecodechaser.herokuapp.com/',
    github: 'https://github.com/thecodechaser/budget-tracker',
    tech: ['Rails', 'Ruby', 'Tailwind'],
  },
];

// reducer
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
