import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TripDetailsPage } from "./pages/trip-details";
import CreateTrip from "./pages/create-trip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

function App() {
  return(<RouterProvider router={router} /> )
}

export default App;