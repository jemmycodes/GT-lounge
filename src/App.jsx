import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import NotFound from "./pages/NotFound";

const routes = createBrowserRouter([
  { path: "/", element: <SplashScreen />, errorElement: <NotFound /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
