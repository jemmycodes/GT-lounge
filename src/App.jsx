import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";

const routes = createBrowserRouter([
  { path: "/", element: <SplashScreen />, errorElement: <NotFound /> },
  {
    path: "menu",
    element: <Home />,
    children: [
      { index: true, element: <Menu /> },
      {
        path: ":type",
        element: <Menu />,
      },
    ],
  },
  { path: "cart", element: <Cart /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
