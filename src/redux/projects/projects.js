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

// initial-state
const initialState = [
  {
    id: 0,
    title: 'Smart Form Builder',
    image: formBuilder,
    details:
      'Smart Form Builder is a dynamic form creation tool that empowers users to design custom forms with ease. Users can add questions and options manually or via drag-and-drop. Each option can have follow-up questions, allowing for deeply nested, conditional logic. Whether creating simple surveys or complex decision trees.',
    live: 'https://form-builder.thecodechaser.com',
    github: 'https://github.com/thecodechaser/smart-form-builder',
    tech: ['JavaScript', 'React', 'Redux', 'Tailwind'],
  },
  {
    id: 1,
    title: 'Trendify',
    image: trendify,
    details:
      'Trendify is a React-based e-commerce application designed for seamless online shopping. It offers a wide range of products across categories such as clothing, shoes, and home appliances. Users can browse products, add items to their cart or wishlist, and complete their purchase effortlessly through a streamlined checkout process.',
    live: 'https://trendify.thecodechaser.com',
    github: 'https://github.com/thecodechaser/trendify',
    tech: ['JavaScript', 'TypeScript', 'React', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Task Master',
    image: taskMaster,
    details:
      'TaskMaster is a React-based task management application designed for efficient task organization. It offers full CRUD operations for creating, updating, and managing tasks. Users can track progress using a Kanban board with drag-and-drop functionality, making task management seamless and intuitive.',
    live: 'https://task-master.thecodechaser.com',
    github: 'https://github.com/thecodechaser/task-master',
    tech: ['JavaScript', 'TypeScript', 'React', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Book Appoinments',
    image: bookAppoinments,
    details:
      'Book Appointments is a responsive web application for managing doctor appointments. Users can create, view, and delete doctors and reservations. The app supports authentication with sign-up and sign-in functionality. Designed for usability and convenience, it ensures a smooth booking experience across devices with a clean, accessible interface.',
    live: 'https://book-appointments.thecodechaser.com',
    github: 'https://github.com/thecodechaser/book-appointment-frontend',
    tech: ['Rails', 'React', 'Tailwind'],
  },
  {
    id: 4,
    title: 'Covid19 Metrics',
    image: covid19Metrics,
    details:
      'Covid19 Metrics is a web application that fetches covid data from API. It shows all countries with the confirmed covid cases on the homepage, users can select any country and go to the details page. The details page shows other details for that specific country like recovered cases, confirmed cases, and deaths.',
    live: 'https://covid19-metrics.thecodechaser.com',
    github: 'https://github.com/thecodechaser/covid19-metrics',
    tech: ['React', 'Redux', 'HTML & CSS'],
  },
  {
    id: 5,
    title: 'Disney Characters',
    image: disneyCharacters,
    details:
      'Disney Character is a web application that shows data of Disney characters from the Disney API. Users can like the character and users can also leave comments on any character on the comment popup. It shows the comments left by other people and gives an idea of what people think about Disney characters.',
    live: 'https://disney-characters.thecodechaser.com',
    github: 'https://github.com/thecodechaser/Disney-characters-webapp',
    tech: ['JavaScript', 'HTML & CSS'],
  },
  {
    index: 6,
    title: 'Space Travelers',
    image: spaceTravelers,
    details:
      'Space Travelers Hub is a React web application that fetches rockets, and missions from the SpaceX API. Users can book and cancel their reservations for rockets and missions. The application has three pages Rockets/Missions/MY Profile, My Profile page shows the list of reserved rockets and missions.',
    live: 'https://space-travelers.thecodechaser.com',
    github: 'https://github.com/thecodechaser/space-travelers-hub',
    tech: ['React', 'Redux', 'HTML & CSS'],
  },
  {
    id: 7,
    title: 'Thecodechaser BootCamp',
    image: bootCamp,
    details:
      'ThecodeChaser Bootcamp is a responsive web application designed to showcase a web development bootcamp. It provides detailed information about the program and allows users to submit queries or questions through an integrated contact form. The site is optimized for both desktop and mobile devices, offering a clean and accessible user experience.',
    live: 'https://web-bootcamp.thecodechaser.com',
    github: 'https://github.com/thecodechaser/thecodechaser-web-bootcamp',
    tech: ['HTML', 'CSS'],
  },
  {
    id: 8,
    title: 'Recipe App',
    image: recipeApp,
    details:
      'The Recipe app is a classic example of a recipe website. Its a functional website that shows the list of foods and recipes and empowers readers to interact with them by adding new foods and recipes. Users can access the services of the application by creating a new account or by login in if they already have an account.',
    live: 'https://recipe-app-thecodechaser.herokuapp.com/',
    github: 'https://github.com/thecodechaser/recipe-app',
    tech: ['Rails', 'Ruby', 'Tailwind'],
  },
  {
    id: 9,
    title: 'Book Store',
    image: bookStore,
    details:
      'Book Store is a React-based web application that allows users to manage a personalized list of favorite books. Users can add and remove books from their collection with ease. Built using JavaScript and React libraries, the application provides a responsive and user-friendly interface for organizing book preferences efficiently.',
    live: 'https://book-store.thecodechaser.com',
    github: 'https://github.com/thecodechaser/book-store',
    tech: ['React', 'Redux', 'HTML & CSS'],
  },
  {
    id: 10,
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
