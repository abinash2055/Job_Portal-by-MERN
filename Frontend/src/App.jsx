import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
