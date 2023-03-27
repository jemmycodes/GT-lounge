import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const routes = createBrowserRouter([
  { path: "/", element: <SplashScreen />, errorElement: <NotFound /> },
  { path: "/home", element: <Home /> },
  { path: "/cart", element: <Cart /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
