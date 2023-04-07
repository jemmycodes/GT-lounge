import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";

import SplashScreen from "./pages/SplashScreen";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <SplashScreen />,
      errorElement: <NotFound />,
    },
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

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {screenWidth > 550 ? (
        <div className="min-h-screen bg-black p-4 text-center text-gold text-xl flex items-center justify-center">
          Sorry, You have to use a mobile phone to view this site!
        </div>
      ) : (
        <RouterProvider router={routes} />
      )}
    </>
  );
}

export default App;
