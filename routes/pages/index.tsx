import { Dashboard } from "pages/dashboard";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export default routes;
