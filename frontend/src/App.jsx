import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import Header from "./components/Header";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Header /> */}

        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        {/* <Header /> */}

        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        {/* <Header /> */}

        <SignUp />
      </>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <>
        {/* <Header /> */}

        <ResetPassword />
      </>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <>
        {/* <Header /> */}
        <ForgotPassword />
      </>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
