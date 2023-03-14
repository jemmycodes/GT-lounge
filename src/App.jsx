import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

const routes = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <NotFound /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
