import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/set-one/posts/Posts";
import Root from "./pages/Root";
import LoginForm from "./pages/set-one/login/LoginForm";
import LoginFormContainer from "./pages/set-one/login/LoginFormContainer";
import TicketBooking from "./pages/set-two/TicketBooking";
import BingHomepage from "./pages/set-three/BingHomepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/set-one",
    element: <LoginFormContainer />,
    children: [
      { path: "login-form", element: <LoginForm /> },
      { path: "posts", element: <Posts /> },
    ],
  },
  {
    path: "/set-two",
    element: <Root />,
    children: [{ path: "", element: <TicketBooking /> }],
  },
  {
    path: "/set-three",
    element: <BingHomepage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
