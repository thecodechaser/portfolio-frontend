import bookAppoinments from '../../assets/images/projects/book-appointments.png';
import covid19Metrics from '../../assets/images/projects/covid19-metrics.png';
import disneyCharacters from '../../assets/images/projects/disney-characters.png';
import spaceTravelers from '../../assets/images/projects/space-travelers.png';
import bootCamp from '../../assets/images/projects/bootcamp.png';
import recipeApp from '../../assets/images/projects/recipe-app.png';
import bookStore from '../../assets/images/projects/book-store.png';
import budgetTracker from '../../assets/images/projects/budget-tracker.png';

// initial-state
const initialState = [
  {
    id: 0,
    title: 'Book Appoinments',
    image: bookAppoinments,
    details: 'Book Appointments is an application to book doctors appointments. This application is responsive and users can load, create, and delete doctors and reservations. Users need to sign up or sign in to access the application.',
    live: 'https://book-appointments-frontend.netlify.app/',
    github: 'https://github.com/thecodechaser/book-appointment-frontend',
    tech: [
      'Rails', 'React', 'Tailwind',
    ],
  },
  {
    id: 1,
    title: 'Covid19 Metrics',
    image: covid19Metrics,
    details: 'Covid19 Metrics is a web application that fetches covid data from API. It shows all countries with the confirmed covid cases on the homepage, users can select any country and go to the details page. The details page shows other details for that specific country like recovered cases, confirmed cases, and deaths.',
    live: 'https://covid19-metrics-thecodechaser.netlify.app/',
    github: 'https://github.com/thecodechaser/covid19-metrics',
    tech: [
      'React', 'Redux', 'HTML & CSS',
    ],
  },
  {
    id: 2,
    title: 'Disney Characters',
    image: disneyCharacters,
    details: 'Disney Character is a web application that shows data of Disney characters from the Disney API. Users can like the character and users can also leave comments on any character on the comment popup. It shows the comments left by other people and gives an idea of what people think about Disney characters.',
    live: 'https://thecodechaser.github.io/Disney-characters-webapp/dist/',
    github: 'https://github.com/thecodechaser/Disney-characters-webapp',
    tech: [
      'JavaScript', 'HTML & CSS',
    ],
  },
  {
    index: 3,
    title: 'Space Travelers',
    image: spaceTravelers,
    details: 'Space Travelers Hub is a React web application that fetches rockets, and missions from the SpaceX API. Users can book and cancel their reservations for rockets and missions. The application has three pages Rockets/Missions/MY Profile, My Profile page shows the list of reserved rockets and missions.',
    live: 'https://space-travelers-thecodechaser.netlify.app/',
    github: 'https://github.com/thecodechaser/space-travelers-hub',
    tech: [
      'React', 'Redux', 'HTML & CSS',
    ],
  },
  {
    id: 4,
    title: 'Thecodechaser BootCamp',
    image: bootCamp,
    details: 'ThecodeChaser Bootcamp is a web development boot camp website, responsive for desktop and mobile screens. It delivers all related information and user can submit their query and questions using the mentioned form.',
    live: 'https://thecodechaser.github.io/thecodechaser-web-bootcamp/',
    github: 'https://github.com/thecodechaser/thecodechaser-web-bootcamp',
    tech: [
      'HTML', 'CSS',
    ],
  },
  {
    id: 5,
    title: 'Recipe App',
    image: recipeApp,
    details: 'The Recipe app is a classic example of a recipe website. Its a functional website that shows the list of foods and recipes and empowers readers to interact with them by adding new foods and recipes. Users can access the services of the application by creating a new account or by login in if they already have an account.',
    live: 'https://recipe-app-thecodechaser.herokuapp.com/',
    github: 'https://github.com/thecodechaser/recipe-app',
    tech: [
      'Rails', 'Ruby', 'Tailwind',
    ],
  },
  {
    id: 6,
    title: 'Book Store',
    image: bookStore,
    details: 'Book Store is a web application to add favorite books by the user, users can add and remove books, This website is built using REACT and JavaScript libraries.',
    live: 'https://book-store-thecodechaser.netlify.app/',
    github: 'https://github.com/thecodechaser/book-store',
    tech: [
      'React', 'Redux', 'HTML & CSS',
    ],
  },
  {
    id: 7,
    title: 'Budget Tracker',
    image: budgetTracker,
    details: 'The Budget tracker app is a full-stack application. Its a functional website that shows the list of categories and transactions and empowers readers to interact with them by adding new categories and transactions. Users can access the services of the application by creating a new account or by login in if they already have an account.',
    live: 'https://budget-tracker-thecodechaser.herokuapp.com/',
    github: 'https://github.com/thecodechaser/budget-tracker',
    tech: [
      'Rails', 'Ruby', 'Tailwind',
    ],
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
