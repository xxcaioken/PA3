// import Contact from "./components/Contact/";
import EventCard from "./components/EventCard/EventCard";
import AddForm from "./components/Form/AddForm";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/Event',
    element: <EventCard />
  },
  {
    path:'/add',
    element: <AddForm></AddForm>
  }
  // ,
  // {
  //   path:'/contact',
  //   element: <Contact></Contact>
  // }
];

export default AppRoutes;
