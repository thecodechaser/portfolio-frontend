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
    title: 'Book Appoinments',
    image: bookAppoinments,
    details: 'Book Appointments is an application to book doctors appointments. This application is responsive and users can load, create, and delete doctors and reservations. Users need to sign up or sign in to access the application.',
    live: 'https://book-appointments-frontend.netlify.app/',
    github: 'https://github.com/thecodechaser/book-appointment-frontend',
    tech: [
      Rails, React, Tailwind
    ]
  }
];

// reducer
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;