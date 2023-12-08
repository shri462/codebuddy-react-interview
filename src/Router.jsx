import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Root from "./pages/Root";
import LoginForm from "./pages/set-one/login/LoginForm";
import LoginFormContainer from "./pages/set-one/login/LoginFormContainer";

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
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/set-three",
    element: <Root />,
    children: [{ path: "", element: <Home /> }],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
